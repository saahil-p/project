const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Passes = require("../models/Passes");
const {body,validationResult} = require("express-validator");

//Route 1: get all the passes for a user @ /api/passes/fetchallpasses

router.get("/fetchallpasses",fetchuser, async (req,res)=>{
    try{
        const passes = await Passes.find({user: req.user.id});
        res.json(passes);
    }
    catch(error){
        console.log(error.message)
        return res.status(400).json({error: "Some error occured"})
    }
})  

//Route 2: Add passes at /api/passes/addpass

router.post("/addpass",fetchuser,[
    body("location","Location needs be at least 3 characters long").isLength({min:3})
], async (req,res)=>{
    try{
        const {location,p_type,validity} = req.body;

        const errors = validationResult(req)

        //check if location is not empty from backend

        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()})
        }

        const pass = new Passes({
            location,p_type,validity, user: req.user.id
        });

        const savedPass = await pass.save();

        res.json(savedPass);
    }
    catch(error){
        console.log(error.message)
        res.status(500).json({error: "Some error occured"});
    }
})



module.exports = router