const mongoose = require("mongoose")

const mongoURI = "mongodb://localhost:27017/project"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI,).then(console.log("Connected"));
}

module.exports = connectToMongo;
 //      