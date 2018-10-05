<template>
    <div class="clientAbout">
        <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>联系我们</span>
        </div>
        <div>
           377392099@qq.com
        </div>
        </el-card>
        <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>历史订单</span>
        </div>
        <div>
           Alan is handsome
        </div>
        </el-card>
        <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>快递信息</span>
        </div>
        <div>
           China
        </div>
        </el-card>
        <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>更多信息</span>
        </div>
        <div>
           nothing
        </div>
        </el-card>
    </div>
</template>

<script>
export default {
  name: 'clientAbout',
  data () {
    return {
     
    }
  }
}
</script>

<style scoped>
.clientAbout{
    float: left;
    margin-top:-2px;
    width: 100%;
    height:100%;
    background-color: #fff;
}

</style>
