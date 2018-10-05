//login & register
const express = require("express");
const router = express.Router();
const User = require("../models/ClientUser");
const keys = require("../config/keys");
const jwt = require("jsonwebtoken");//使用jsonwebtoken获取token
// const passport = require("passport");//验证passport

//get  api/users/test
// router.get("/text",(req,res) =>{
//     res.json({
//         msg:"豪哥最帅"
//     })
// })

//post api/users/register
//存储json数据
router.post("/register",(req,res) =>{

    User.findOne({email:req.body.email})
        .then((user) =>{
            if(user){
                return res.status(400).json({email:"邮箱已被注册！"});
            }else{
                const newUser = new User({
                    name:req.body.name,
                    email:req.body.email,
                    password:req.body.password
                })
                newUser.save()
                    .then((user) =>{
                        res.json(user);
                    })
                    .catch(err => console.log(err))
            }
        })
})
//post api/users/login
//返回json数据
router.post("/login",(req,res) =>{
    User.findOne({email:req.body.email})
        .then((user) => {
            if(!user){
                res.status(404).json({msg:"该用户不存在！"})
            }else{
                const rule = {id:user.id,name:user.name};
                //第一个参数:规则；第二个参数：加密名字；第三个参数：有效期；第四个：回调函数
                jwt.sign(rule,keys.secretName,{expiresIn:3600},(err,token) =>{
                    if(err) throw err;
                    res.json({
                        msg:"success",
                        token:"Bearer " + token
                    })
                })
            }
        })
})
//post api/users/current
//验证token
// router.post("/current",passport.authenticate('jwt', { session: false }),(req,res) =>{
//     res.json({
//         id:req.user.id,
//         name:req.user.name,
//         email:req.user.email
//       });
// })

//获取全部用户信息
router.get("/",(req,res) => {
    User.find()
        .then(users => {
            res.json(users);
        })
})
module.exports = router;