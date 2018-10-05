const express = require("express");
const router = express.Router();

const Hamburger = require("../models/hamburgersMenu");

router.post("/",(req,res) => {
    const newHamburger = {}
    if(req.body.name) newHamburger.name = req.body.name;
    if(req.body.description) newHamburger.description = req.body.description;
    newHamburger.Options = {};
    if(req.body.size) newHamburger.size = req.body.size;
    if(req.body.price) newHamburger.price = req.body.price;
    // if(req.body.size1) newHamburger.Options.optionOneSize = req.body.size1;
    // if(req.body.price1) newHamburger.Options.optionOnePrice = req.body.price1;
    // if(req.body.size2) newHamburger.Options.optionTwoSize = req.body.size2;
    // if(req.body.price2) newHamburger.Options.optionTwoPrcie = req.body.price2;
    new Hamburger(newHamburger).save().then((Hamburger) => {
        res.json(Hamburger);
    })
})
//get 全部数据
router.get("/",(req,res) => {
    Hamburger.find()
        .then((Hamburgers) => {
            res.json(Hamburgers);
        })
})
//根据ID删除单个数据
router.delete("/:id",(req,res) => {
    Hamburger.findByIdAndRemove(req.params.id)
        .then((Hamburger) => {
            res.json({msg:"删除成功"});
        })
})
module.exports = router;