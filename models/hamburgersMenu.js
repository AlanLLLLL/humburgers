const express = require("express");
const mongoose = require("mongoose");
const schema = mongoose.Schema;

const HamburgersSchema = new schema({
    user:{
        type:schema.Types.ObjectId,
        ref:"users"
    },
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    size:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    }
   

})
module.exports = Hamburgers = mongoose.model("hamburgers",HamburgersSchema);