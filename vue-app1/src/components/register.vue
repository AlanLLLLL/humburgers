<template>
    <div class="register">
      <div class="container">
        <router-link to="/">
          <el-button class="homeBtn" type="primary">Home</el-button>
        </router-link>
         <router-link to="/login">
          <el-button class="loginBtn" type="primary">Login</el-button>
        </router-link>
        <h1>hamburgers后台管理系统</h1>
        <el-form :model="registerUser" :rules="rules" ref="registerUser" label-width="80px" class="registerForm">
        <el-form-item label="用户名" prop="name">
            <el-input type="text" v-model="registerUser.name" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
            <el-input type="text" v-model="registerUser.email" placeholder="请输入邮箱"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="registerUser.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="password2">
            <el-input type="password" v-model="registerUser.password2" placeholder="请确认密码"></el-input>
        </el-form-item>
        <el-form-item label="选择身份">
            <el-select v-model="registerUser.identity" placeholder="请选择身份">
                <el-option label="管理员" value="manager"></el-option>
                <el-option label="员工" value="employee"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-button class="registerBtn" type="primary" @click="submitForm('registerUser')">注册</el-button>
        </el-form-item>
        </el-form>
      </div>
    </div>
</template>

<script>
export default {
  name: 'register',
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
            password2:"",
            identity:""
        },
         rules: {
        name: [
          { required: true, message: "用户名不能为空", trigger: "change" },
          { min: 2, max: 30, message: "长度在 2 到 30 个字符", trigger: "blur" }
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
            this.$axios.post("/api/users/register",this.registerUser)
                .then((res) => {
                    console.log(res)
                    this.$message({
                    message: "注册成功！",
                    type: "success"
                     });
                     this.$router.push({path:"/login"})
                })
                .catch((err) => {
                   console.log(err)
                })
          }
        });
      },
  }
}
</script>


<style scoped>
.register {
  position: relative;
  width: 100%;
  height: 100%;
  background: url("../assets/indexHome.jpeg") no-repeat;
  background-size: 100% 100%;
}
.registerForm{
    position:absolute;
    margin:6% 35%;
    padding: 20px;
    width: 25%;
    border:1px solid rgb(211, 206, 206);
    border-radius: 10px;
    box-shadow: 0px 5px 10px #cccc;
    background-color: rgba(255, 255, 255,0.7);
}
.registerBtn{
    width: 100%;
}
h1{
    position: absolute;
    top:10px;
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
.loginBtn{
    position: absolute;
    top:20px;
    left: 120px;
}
</style>
