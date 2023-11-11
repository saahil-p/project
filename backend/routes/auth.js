const express = require("express");
const User = require("../models/User")
const router = express.Router();
const { body, validationResult } = require("express-validator")
const bcrypt = require("bcryptjs")
var jwt = require("jsonwebtoken")
const fetchuser = require("../middleware/fetchuser")

const JWT_SECRET = "L3W15HAM1LT0N"

// Create user at : /api/auth/createuser Login: Not required

router.post("/createuser", [
    body("email", "Enter a valid email").isEmail(),
    body("name", "Name needs to be at least three letters long").isLength({ min: 3 }),
    body("password", "Password needs to be at least five letters long").isLength({ min: 5 }),
],
    async (req, res) => {
        var success = true;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            success = false;
            return res.status(400).json({ success, errors: errors.array() })
        }
        try {
            let user = await User.findOne({ email: req.body.email });

            if (user) {
                success = false;
                res.status(400).json({ success, error: "User with this email already exists" })
            }

            const salt = await bcrypt.genSalt(10);
            // console.log(req.body.password)
            const secPass = await bcrypt.hash(req.body.password, salt);


            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: secPass,
                acctype : req.body.acctype
            });

            const data = {
                user: {
                    id: user.id
                }
            }

            const authtoken = jwt.sign(data, JWT_SECRET);

            res.json({ authtoken, success});
        }
        catch (error) {
            console.log(error.message);
            res.status(500).send("Some error occured");
        }
    });

// Logging in a user at /api/auth/login

router.post("/", [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password needs to be at least five letters long").isLength({ min: 5 })
],
    async (req, res) => {
        var success = true;
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            success = false;
            return res.status(400).json({ success, errors: errors.array() });
        }
        const { email, password } = req.body;
        try {
            let user = await User.findOne({ email }) //check this for the need of await
            const pwdcmp = await bcrypt.compare(password, user.password)
            if (!user) {
                success = false;
                return res.status(400).json({ success, errors: "User with this email does not exist" })
            }
            if (!pwdcmp) {
                success = false;
                return res.status(400).json({ success, errors: "Incorrect username/password" });
            }
            const data = {
                user: {
                    id: user.id
                }
            }   

            const authtoken = jwt.sign(data, JWT_SECRET);
            success = true;
            const type = user.acctype;
            res.json({ authtoken, success, type});
        } catch (error) {
            console.log(error.message)
            return res.status(500).json({ "Error": "Some error occured" });
        }
    })

    // Route 3: Getting logged in user's details, login required

    router.post("/getuser",fetchuser,async (req,res) =>{
        const errors =  validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()})
        }

        try {
            userId = req.user.id;
            const user = await User.findById(userId).select("-password")

            res.send(user)
        } catch (error) {
            console.log(error.message)
            return res.status(500).json({ "Error": "Some error occured" });
        }
    })

module.exports = router