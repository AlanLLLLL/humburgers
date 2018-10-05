<template>
 <el-row class="leftNav">
  <el-col>
    <el-menu
      class="el-menu-vertical-demo"
      background-color="#324057"
      text-color="#fff"
      active-text-color="#409eff">
      <router-link to="/index">
        <el-menu-item index="1">
            <i class="fas fa-home"></i>
            <span slot="title">首页</span> 
        </el-menu-item>
      </router-link>
     <el-submenu index="2">
        <template slot="title">
         <i class="fas fa-user-alt"></i>
          <span>用户列表</span>
        </template>
        <el-menu-item-group>
          <router-link to="/clientList">
            <el-menu-item index="2-1">客户列表</el-menu-item>
          </router-link>
          <router-link to="/userList">
             <el-menu-item index="2-2">后台人员列表</el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>
      <router-link to="/orderInfo">
        <el-menu-item index="3">
            <i class="fab fa-first-order-alt"></i>
            <span slot="title">订单信息</span> 
        </el-menu-item>
      </router-link>
      <el-submenu index="4">
        <template slot="title">
          <i class="fas fa-money-bill-alt"></i>
          <span>资金管理</span>
        </template>
        <el-menu-item-group>
          <router-link to="/cashFlow">
            <el-menu-item index="4-1">资金流水</el-menu-item>
          </router-link>
          <el-menu-item index="4-2">资金动向</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="fas fa-info-circle"></i>
          <span>信息管理</span>
        </template>
        <el-menu-item-group>
            <router-link to="/infoShow">
                <el-menu-item index="2-1">个人信息</el-menu-item>
            </router-link>
          
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">
          <i class="fas fa-universal-access"></i>
          <span>销量信息</span>
        </template>
        <el-menu-item-group>
          <router-link to="/sales">
            <el-menu-item index="6-1">周销量</el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-col>
</el-row>
</template>

<script>
export default {
  name: 'leftNav',
  data () {
    return {
     
    }
  }
}
</script>

<style scoped>
.leftNav{
  position: fixed;
  left: 0;
  min-height: 100%;
  background-color: #324057;
  z-index: 99;
}
.el-menu {
  border: none;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 180px;
  min-height: 400px;
}
.el-menu-vertical-demo {
  width: 35px;
}
.el-submenu .el-menu-item {
  min-width: 180px;
}
a{
    text-decoration: none;
}
</style>
