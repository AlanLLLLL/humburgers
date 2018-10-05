<template>
  <div class="myOrder">
      <div class="container">
            <el-col :span="24">
                <div class="addHead">我的订单</div>
                <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                label="品种"
                width="180">
                <template slot-scope="scope">
                    <span>{{ scope.row.name }}</span>
                </template>
                </el-table-column>
                 <el-table-column
                label="价格"
                width="180">
                <template slot-scope="scope">
                    <span>{{ scope.row.price }}元</span>
                </template>
                </el-table-column>
                <el-table-column
                label="数量"
                width="180">
                <template slot-scope="scope">
                    <span>{{ scope.row.quantity }}份</span>
                </template>
                </el-table-column>
            </el-table>
            <p class="totalMoney">总额：{{total}}元</p>
            </el-col>
        </div>
  </div>
</template>

<script>
export default {
  name: 'myOrder',
  data () {
    return {
      tableData:[]
    }
  },
  computed:{
    total(){
      let totalMoney = 0;
      for(let index in this.tableData){
        const data = this.tableData[index];
        totalMoney += data.quantity * parseInt(data.price);
      }
      return totalMoney;
    }
  },
  created(){
    this.getTableData();
  },
  methods:{
    getTableData(){
      this.$store.getters.orderInfo.forEach(res => {
        res.forEach(result => {
          this.tableData.push(result);
        })
      });
      // console.log(this.tableData)
      
    }
  }
}
</script>

<style scoped>
.myOrder {
  width: 100%;
  height: 100%;
  background: #fff;
}
.addHead {
  color: #8a9294;
  margin: 20px;
  font-size: 24px;
}
.totalMoney{
    margin-top:20px;
    font-size: 20px;
    font-weight: bold;
    color: #909399;
}
</style>
