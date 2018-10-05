<template>
    <div class="indexHome">
        <div class="container">
            <h1 class="title">欢迎你，{{user.name}}</h1>
        </div>
    </div>
</template>

<script>
export default {
  name: 'indexHome',
  data () {
    return {
     
    }
  },
  computed:{
      user(){
          return this.$store.getters.user;
      }
  }
}
</script>

<style scoped>
.indexHome{
    width: 100%;
    height: 100%;
    background: url("../assets/indexHome.jpeg") no-repeat;
    background-size: 100% 100%;
}
.container{
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5)
}
.title{
    color: rgba(255, 255, 255, 0.9);
    text-align:center;
    line-height: 100px;
}
</style>
