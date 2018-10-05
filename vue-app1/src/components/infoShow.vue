<template>
    <div class="infoShow">
        <el-row>
            <el-col :span="24">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>个人信息</span>
                    </div>
                    <div class="cardBody">
                      姓名： {{user.name}}
                    </div>
                    <br>
                    <div class="cardBody" v-if="user.identity =='manager'? iden='管理员':iden='员工'">
                      用户权限： {{iden}}
                    </div>
                </el-card>
            </el-col>
        </el-row>
        
    </div>
</template>

<script>
export default {
  name: 'infoShow',
  data () {
    return {
     iden:""
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
.cardBody{
    font-size: 30px;
}

</style>
