<template>
    <div class="clientHome">
       <clientNav></clientNav>
       <div class="content">
           <router-view></router-view>
       </div>
    </div>
</template>

<script>
import jwt_decode from 'jwt-decode'
import ClientNav from './clientNav'
export default {
  name: 'clientHome',
  components:{
      ClientNav
  },
  data () {
    return {
     
    }
  },
  created(){
    //客户端
   
    if(localStorage.clientLoginToken){
       const decoded = jwt_decode(localStorage.clientLoginToken);
      //获取当前时间
      const time = Date.now() /1000;
      if(decoded.exp < time){
        this.$store.dispatch("setIsLoginAction",false);
        this.$store.dispatch("setClientUserAction",{});
        this.$router.push({path:"/clientLogin"})
      }else{
        this.$store.dispatch("setIsLoginAction",!this.isEmpty(decoded));
        this.$store.dispatch("setClientUserAction",decoded);
      } 
    }
    // console.log(decoded)
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

<style scoped>
.clientHome{
    position: absolute;
    left: 10%;
    top:0;
    width: 90%;
    height: 100%;
}
.content{
    width: 90%;
    height: calc(100% - 54px);
    background: url("../../assets/clientLoginBg.jpeg") no-repeat;
    background-size: 100% 100%;
}

</style>
