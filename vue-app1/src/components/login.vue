<template>
    <div class="login">
        <div class="container">
            <router-link to="/">
                <el-button class="homeBtn" type="primary">Home</el-button>
            </router-link>
            <h1>hamburgers后台管理系统</h1>
            <el-form :model="loginUser" :rules="rules" ref="loginUser" label-width="60px" class="loginForm">
                <el-form-item label="邮箱" prop="email">
                    <el-input type="text" v-model="loginUser.email" placeholder="请输入邮箱"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="loginUser.password" placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button class="loginBtn" type="primary" @click="submitForm('loginUser')">登录</el-button>
                </el-form-item>
                <div class="noNumber">没有账号？点击<router-link to="/register">注册</router-link></div>
            </el-form>
        </div>   
    </div>
</template>

<script>
import jwt_decode from 'jwt-decode'
export default {
  name: 'login',
  data () {
     var validatePass2 = (rule, value, callback) => {
      if (value !== this.loginUser.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
        loginUser:{
            email:"",
            password:"",
        },
         rules: {
        email: [
          {
            type: "email",
            required: true,
            message: "邮箱格式不正确",
            trigger: "blur"
          }
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, max: 30, message: "长度在 6 到 30 个字符", trigger: "blur" }
         ]
        }
    }
  },
  methods:{
       submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$axios.post("/api/users/login",this.loginUser)
                .then((res) => {
                    this.$message({
                    message: "登录成功！",
                    type: "success"
                     });
                    
                    //  console.log(res.data)
                    //存储token到localStorage中
                    const {token} = res.data;
                    localStorage.setItem("loginToken",token);
                    //解析token
                    const decoded = jwt_decode(token);
                    //console.log(decoded)
                    
                    //存储数据到Vuex中
                    this.$store.dispatch("setIsAuthenticatedAction",!this.isEmpty(decoded));
                    this.$store.dispatch("setUserAction",decoded);

                    this.$router.push({path:"/index"})
                })
                .catch((err) => {
                   this.$message({
                    message: "用户不存在！",
                    type: "warning"
                     });
                })
          }
        });
      },
        isEmpty(value) {
        return (
            value === undefined ||
            value === null ||
            (typeof value === "object" && Object.keys(value).length === 0) ||
            (typeof value === "string" && value.trim().length === 0)
        );
    }
  }
}
</script>


<style scoped>
.login {
  position: relative;
  width: 100%;
  height: 100%;
  background: url("../assets/indexHome.jpeg") no-repeat;
  background-size: 100% 100%;
}
.loginForm{
    position:absolute;
    margin:10% 35%;
    padding: 20px;
    width: 25%;
    border:1px solid rgb(211, 206, 206);
    border-radius: 10px;
    box-shadow: 0px 5px 10px #cccc;
    background-color: rgba(255, 255, 255,0.7);
}
.loginBtn{
    width: 100%;
}
.noNumber{
    font-size: 14px;
    margin-left: 62%;
}
h1{
    position: absolute;
    top:50px;
    left: 49%;
    transform:translateX(-50%);
    color:rgba(0, 0, 0,0.6);
    background-color: rgba(255, 255, 255, 0.6);
    padding:10px;
    border-radius: 10px;
}
.homeBtn{
    position: absolute;
    top:20px;
    left: 20px;
}
</style>
