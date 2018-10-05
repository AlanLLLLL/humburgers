//定义数据模型
const mongoose = require("mongoose");
const schema = mongoose.Schema;
const CashSchema = new schema({
    goods:{
        type:String,
        required:true
    },
    seller:{
        type:String,
        required:true
    },
    income:{
        type:Number,
        required:true
    },
    pay:{
        type:Number,
        required:true
    },
    ordernum:{
        type:String,
        required:true
    },
    bill:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = CashFlow = mongoose.model("CashFlow",CashSchema);