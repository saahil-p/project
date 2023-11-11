const mongoose = require("mongoose");
const {Schema} = mongoose;

const PassSchema = new Schema({
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    location : {
        type: String,
        required: true
    },
    validity:{
        type: String,
        required: true
    },
    p_type:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("Passes",PassSchema);
