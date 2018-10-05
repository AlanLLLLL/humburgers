<template>
    <div class="clientNav">
        <el-row>
            <el-col :span="12">
                <ul class="leftUl">
                    <li>
                        <span class="hamburgerBg"></span>
                       <span class="headerLeft" style="color:rgb(38,38,38);
                        font-size:20px;">Hamburgers小店</span>
                    <li>
                        <router-link to="/clientHome">
                            <span class="headerLeft">主页</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/clientMenu">
                            <span class="headerLeft">菜单</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/clientAdmin">
                            <span class="headerLeft">管理</span>
                        </router-link>
                    </li>
                     <li>
                        <router-link :to="'/myOrder/' + user.id">
                            <span class="headerLeft">我的订单</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/clientAbout">
                            <span class="headerLeft">关于我们</span>
                        </router-link>
                    </li>
                </ul>
            </el-col>
            <el-col :span="12">
                <ul class="rightUl">
                    <li>
                        <router-link to="/">
                            <span class="headerLeft">Home</span>
                        </router-link>
                    </li>
                    <li v-show="isLogin == true">
                        欢迎你，<span class="userName">{{user.name}}</span>&nbsp;  &nbsp; 
                        <a class="headerLeft" @click.prevent="logout">退出</a>
                    </li>
                    <li v-show="isLogin == false">
                        <router-link to="/clientRegister">
                            <span class="headerLeft">注册</span>
                        </router-link>
                    </li>
                    <li v-show="isLogin == false">
                        <router-link to="/clientLogin">
                            <span class="headerLeft">登录</span>
                        </router-link>
                    </li>
                </ul>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  name: 'clientNav',
  data () {
    return {
     
    }
  },
  computed:{
      isLogin(){
          return this.$store.getters.isLogin;
      },
      user(){
          return this.$store.getters.clientUser;
      }
  },
  methods:{
      logout(){
          this.$store.dispatch("setIsLoginAction",false);
          this.$store.dispatch("setClientUserAction",{});
          this.$store.dispatch("setOrderInfoAction",{});
          localStorage.removeItem("clientLoginToken");
          this.$router.push({path:"/clientLogin"})
      }
  }
}
</script>

<style scoped>
*{
    text-decoration: none;
    list-style: none;
}
.clientNav{
    width: 90%;
    height: 54px;
    background-color: #f8f9fa;
}
.leftUl{
    line-height: 54px;
    
}
.leftUl li{
    float: left;
    margin-left: 20px;
}
.rightUl{
    line-height: 54px;
}
.rightUl li{
    float: right;
    margin-right: 20px;
}
a{
    color: #8a9294;
    cursor: pointer;
}
a:hover{
    color: rgb(38, 38, 38);
}
.userName{
    color:#409eff;
}
.hamburgerBg{
    margin:-3px;
    width: 20px;
    height: 20px;
    background: url("../../assets/hamburger.png") no-repeat;
    background-size: 100% 100%;
    display: inline-block;
}
</style>
