<template>
    <div class="Register">
        <div class="container">
             <h1>欢迎来到hamburgers小店</h1>
            <el-form :model="registerUser" :rules="rules" ref="registerUser" label-width="60px" class="loginForm">
                <el-form-item label="姓名" prop="name">
                    <el-input type="text" v-model="registerUser.name" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                    <el-input type="text" v-model="registerUser.email" placeholder="请输入邮箱"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="registerUser.password" placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password2">
                    <el-input type="password" v-model="registerUser.password2" placeholder="请确认密码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button class="loginBtn" type="primary" @click="submitForm('registerUser')">注册</el-button>
                </el-form-item>
            </el-form>
        </div>   
    </div>
</template>

<script>
import jwt_decode from 'jwt-decode'
export default {
  name: 'Register',
  data () {
     var validatePass2 = (rule, value, callback) => {
      if (value !== this.registerUser.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
        registerUser:{
            name:"",
            email:"",
            password:"",
            password2:""
        },
         rules: {
        name: [
          {
            
            required: true,
            message: "用户名不能为空",
            trigger: "blur"
          }
        ],
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
         ],
         password2: [
          { required: true, message: "确认密码不能为空", trigger: "blur" },
          {
            min: 6,
            max: 30,
            message: "长度在 6 到 30 个字符",
            trigger: "blur"
          },
          { validator: validatePass2, trigger: "blur" }
        ]
        }
    }
  },
  methods:{
       submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$axios.post("/api/client/users/register",this.registerUser)
                .then((res) => {
                    console.log(res)
                    this.$message({
                    message: "注册成功！",
                    type: "success"
                     });
                     this.$router.push({path:"/clientLogin"})
                })
                .catch((err) => {
                   console.log(err)
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
.Register {
  position: relative;
  width: 100%;
  height: 100%;
 
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
h1{
    position: absolute;
    top:30px;
    left: 49%;
    transform:translateX(-50%);
    color:rgba(0, 0, 0,0.6);
    background-color: rgba(255, 255, 255, 0.6);
    padding:10px;
    border-radius: 10px;
}
</style>
