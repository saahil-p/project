const jwt = require("jsonwebtoken");
const JWT_SECRET = "L3W15HAM1LT0N"
const fetchuser = (req, res, next) => {
    //Get user from jwt token and add id to req obj

    const token = req.header('auth-token')

    try {

        if (!token) {
            res.status(401).send("Please authenticate using a token")
        }

        const data = jwt.verify(token, JWT_SECRET)

        req.user = data.user
    } catch (error) {
        res.status(401).send("Please authenticate using a token")
    }

    next();
}

module.exports = fetchuser;