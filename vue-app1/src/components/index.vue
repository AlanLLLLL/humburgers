<template>
    <div class="index">
      <header-nav></header-nav>
      <left-nav></left-nav>
      <div class="rightContainer">
        <router-view v-if="isRouterAlive"></router-view>
      </div>
    </div>
</template>

<script>
import HeaderNav from './headerNav'
import LeftNav from './leftNav'
export default {
  name: 'index',
  provide(){
    return {
      reload: this.reload
    }
  },
  data () {
    return {
      isRouterAlive: true
    }
  },
  methods:{
    reload(){
      this.isRouterAlive = false;
      this.$nextTick(function(){
        this.isRouterAlive = true;
      })
    }
  },
  components:{
    HeaderNav,
    LeftNav
  }
}
</script>

<style scoped>
.index{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.rightContainer{
 position: relative;
 left: 180px;
 top:-1px;
 width: 100%;
 height: 100%;
 overflow: auto;
}
</style>
