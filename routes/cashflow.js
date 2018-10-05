const express = require("express");
const router = express.Router();
const CashFlow = require("../models/CashFlow")

// router.get("/",(req,res) => {
//     res.send("豪哥最帅")
// })
router.post("/",(req,res) => {
    const newCash = new CashFlow({
        goods:req.body.goods,
        seller:req.body.seller,
        income:req.body.income,
        pay:req.body.pay,
        ordernum:req.body.ordernum,
        bill:req.body.bill,
    })
    newCash.save()
        .then(cash => {
            res.json({cash});
        })
        .catch(err => {
            res.status(400).json(err);
        })
})
//获取全部数据
router.get("/",(req,res) => {
    CashFlow.find()
        .then(cashs => {
            res.json(cashs);
        })
        .catch(err =>{
            res.json({msg:"no datas"})
        })
})
//编辑单个数据
router.post("/:id",(req,res) => {
    const updateCash = {
        // goods:req.body.goods,
        // seller:req.body.seller,
        // income:req.body.income,
        // pay:req.body.pay,
        // ordernum:req.body.ordernum,
        // bill:req.body.bill,
    }
    if(req.body.goods) updateCash.goods = req.body.goods;
    if(req.body.seller) updateCash.seller = req.body.seller;
    if(req.body.income) updateCash.income = req.body.income;
    if(req.body.pay) updateCash.pay = req.body.pay;
    if(req.body.ordernum) updateCash.ordernum = req.body.ordernum;
    if(req.body.bill) updateCash.bill = req.body.bill;

    CashFlow.findOneAndUpdate(
        {_id:req.params.id},
        {$set:updateCash},
        {new:true}
        )
        .then(cash => {
            res.json(cash);
        })
})
//获取单个数据
router.get("/:_id",(req,res) => {
    CashFlow.findById(req.params._id)
        .then(cash => {
            res.json(cash)
        })
})
//删除单个数据
router.delete("/:id",(req,res) => {
    CashFlow.findByIdAndRemove(req.params.id)
        .then(cash => {
            cash.save().then(cash => {res.json({msg:"delete success"})})
        })
})
module.exports = router;