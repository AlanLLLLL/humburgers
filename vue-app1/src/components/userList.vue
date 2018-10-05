<template>
    <div class="userList">
        <div class="tableContent">
            <h3>后台人员列表</h3>
         <el-form class="datePicker" v-model="search_data">
            <el-form-item>
            </el-form-item>
            </el-form>
            <el-table
            :data="tableData"
            border
            style="width: 100%;height:100%;">                   
            <el-table-column
            type="index"
            label="序号"
            width="60"
            align="center">
            </el-table-column>
            <el-table-column
            label="ID"
            width="250"
            align="center">
            <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span>{{ scope.row._id }}</span>
            </template>
            </el-table-column>
            <el-table-column
            label="注册时间"
            width="250"
            align="center">
            <template slot-scope="scope">
                <span>{{ scope.row.date }}</span>
            </template>
            </el-table-column>
            <el-table-column
            label="用户姓名"
            width="150"
            align="center">
            <template slot-scope="scope">
                <span>{{ scope.row.name }}</span>
            </template>
            </el-table-column>
            <el-table-column
            label="邮箱"
            width="250"
            align="center">
            <template slot-scope="scope">
                <span style="color:#00d053">{{ scope.row.email }}</span>
            </template>
            </el-table-column>
            <el-table-column
            label="权限"
            width="100"
            align="center">
            <template slot-scope="scope">
                <span style="color:#f56767">{{ scope.row.identity =="manager" ? "管理员":"普通员工"  }}</span>
            </template>
            </el-table-column>
         </el-table>
        </div>
    </div>
</template>

<script>
export default {
  name: 'userList',
  data () {
    return {
        tableData:[],
        search_data:[]
    }
  },
  created(){
      this.getTableData();
  },
  methods:{
      getTableData(){
          this.$axios.get(`/api/users`)
            .then(res => {
                this.tableData = res.data;
                console.log(this.tableData)
            })
      }
  }
}
</script>

<style scoped>
.tableContent{
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  margin-left: 10px;
  margin-top: 20px;
}
h3{
    color: #8a9294;
}
</style>
