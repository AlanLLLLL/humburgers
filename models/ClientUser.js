const express = require("express");
const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})
module.exports = ClientUser = mongoose.model("clientUser",userSchema);
