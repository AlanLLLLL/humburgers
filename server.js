const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mogoose = require("mongoose");
const port = 5000;

//引入链接
const mongo = require("./config/keys");
//连接mongoDB
mogoose.connect(mongo.mongoURI,() =>{
    console.log("mongoDB connected")
})
//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//引入user.js
const user = require("./routes/user");
const cashflow = require("./routes/cashflow")
const clientUser = require("./routes/clientUser")
const hamburgers = require("./routes/hamburgers")
//使用user
app.use("/users",user);
//使用cashflow
app.use("/cashflows",cashflow)
//使用clientUser
app.use("/client/users",clientUser)
//使用hamburgers
app.use("/hamburgers",hamburgers);

app.listen(port,() =>{
    console.log(`server is running on ${port}`);
})
