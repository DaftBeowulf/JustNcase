const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
    },
    countryCode:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    verified:{
        type:Boolean,
        default: false,
    },
    authyId:String,
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    }
})

const VerifiedUsers = mongoose.model("VerifiedUser", UserSchema);

module.exports = VerifiedUsers;