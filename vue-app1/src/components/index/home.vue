<template>
  <div class="home">
    <div class="leftHome">
      <div class="container">
        <div class="leftContent">
          <h2>如果你是顾客</h2>
          <br>
          <router-link to="/clientHome">
            <el-button type="primary">进入主页</el-button>
          </router-link>
        </div>
      </div>
    </div>
    <div class="rightHome">
      <div class="container">
        <div class="rightContent">
          <h2>如果你是管理人员</h2>
          <br>
          <router-link to="/login">
            <el-button type="primary">登录</el-button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
     
    }
  }
}
</script>

<style scoped>
.home{
  width: 100%;
  height:100%;
}
.leftHome{
  float: left;
  height: 100%;
  width: 50%;
  background: url("../../assets/homeBg.jpeg") no-repeat;
  background-size: 100% 100%;
}
.rightHome{
  float: right;
  height: 100%;
  width: 50%;
  background: url("../../assets/homeBg2.jpeg") no-repeat;
  background-size: 100% 100%;
}
.container{
  width: 100%;
  height:100%;
  background-color: rgba(0, 0, 0, 0.7)
}
.rightContent{
  position: absolute;
  top: 50%;
  right: 16%;
  transform: translateY(-50%);
  color:#fff;
}
.leftContent{
  position: absolute;
  top: 50%;
  left: 16%;
  transform: translateY(-50%);
  color:#fff;
}
</style>
