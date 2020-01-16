const mongoose = require("mongoose");

const userSchema = new mongoose.Schema([{
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    pass:{
        type:String,
        required:true
    },
    signup_date:{
        type:Date,
        default: Date.now
    }
}])

mongoose.model('users',userSchema);