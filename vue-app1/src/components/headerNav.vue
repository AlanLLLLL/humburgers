<template>
    <header class="headerNav">
         <el-row>
            <el-col :span="6">
                <router-link to="/index">
                    <span class="headerLeft">Hamburgers后台管理系统</span>
                </router-link>
                
            </el-col>
             <el-col :span="6" class="user">
                <div class="headerRight">
                    <span class="welcome">welcome you,</span>
                    <span class="userName">{{user.name}}</span>
                    <span class='dropdownMenu'>
                    <el-dropdown
                        trigger="click"
                        @command='setDialogInfo'>
                        <span class="el-dropdown-link">
                            <i class="el-icon-caret-bottom el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command='info'>个人信息</el-dropdown-item>
                            <el-dropdown-item  command='logout'>退出</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                   
                </span>  
                <router-link to="/">
                    <span class="welcome">Home</span>  
                </router-link>
                  
                </div>
                 
            </el-col>
        </el-row>
       
    </header>
</template>

<script>
export default {
  name: 'headerNav',
  data () {
    return {
     
    }
  },
  computed:{
      user(){
          return this.$store.getters.user;
      }
  },
  methods:{
      setDialogInfo(cmd) {
            if(cmd =="info"){
              this.getInfo();
            }
            if(cmd =="logout"){
              this.logout();
            }
      },
      getInfo(){
          this.$router.push({path:"/infoShow"})
      },
      logout(){
          this.$store.dispatch("setIsAuthenticatedAction",false);
          this.$store.dispatch("setUserAction",null);
          localStorage.removeItem("loginToken")
          this.$router.push({path:"/login"});
      }
  }

}
</script>

<style scoped>
.headerNav{
    width: 100%;
    height: 50px;
    background-color: #19212e;
}
.headerLeft{
    color: #fff;
    line-height: 50px;
    margin-left: 30px;
}
.user {
  /* line-height: 50px; */
  text-align: right;
  float: right;
  margin-right:40px;
}
.welcome{
    color: #fff;
    font-size: 14px;
}
.userName{
    color: #409eff;
}
.headerRight{
    line-height: 50px;
}
a{
    text-decoration: none;
}
</style>
