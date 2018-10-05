<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import jwt_decode from 'jwt-decode'
export default {
  name: 'App',
  components: {
    
  },
  created(){
    //后台
    if(localStorage.loginToken){
      const decoded = jwt_decode(localStorage.loginToken);
      //获取当前时间
      const time = Date.now() /1000;
      if(decoded.exp < time){
        this.$store.dispatch("setIsAuthenticatedAction",false);
        this.$store.dispatch("setUserAction",{});
        this.$router.push({path:"/login"})
      }else{
        this.$store.dispatch("setIsAuthenticatedAction",!this.isEmpty(decoded));
        this.$store.dispatch("setUserAction",decoded);
      } 
    }
  },
  methods:{
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

<style>
*{
  margin:0;
  padding:0;
  }
html,
body,
#app {
  width: 100%;
  height: 100%;
}
</style>
