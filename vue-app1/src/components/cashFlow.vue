<template>
<div class="tableContent">
    <el-form class="datePicker" v-model="search_data">
      <el-form-item style="margin-top:20px;">
        <el-date-picker
        v-model="search_data.startTime"
        type="datetime"
        placeholder="选择开始时间">
        </el-date-picker> --
        <el-date-picker
        v-model="search_data.endTime"
        type="datetime"
        placeholder="选择结束时间">
        </el-date-picker>
        <el-button type="primary" @click="cashFlowFilter()">筛选</el-button>
        <router-link to="cashFlowAdd">
          <el-button type="primary" v-if="user.identity == 'manager'">添加</el-button>
        </router-link>
      </el-form-item>
    </el-form>
    <el-table
    border
    :data="tableData"
    style="width: 100%"
    max-height="350"
    v-if="tableData.length > 0">                   
    <el-table-column
      type="index"
      label="序号"
      width="60"
      align="center">
    </el-table-column>
    <el-table-column
      label="日期"
      width="250"
      align="center">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span>{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="商品名称"
      width="130"
      align="center">
       <template slot-scope="scope">
        <span>{{ scope.row.goods }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="商家"
      width="130"
      align="center">
      <template slot-scope="scope">
        <span>{{ scope.row.seller }}</span>
      </template>
    </el-table-column>
     <el-table-column
      label="收入"
      width="100"
      align="center">
      <template slot-scope="scope">
        <span style="color:#00d053">+{{ scope.row.income }}</span>
      </template>
    </el-table-column>
     <el-table-column
      label="支出"
      width="100"
      align="center">
      <template slot-scope="scope">
        <span style="color:#f56767">-{{ scope.row.pay }}</span>
      </template>
    </el-table-column>
     <el-table-column
      label="订单号"
      width="130"
      align="center">
      <template slot-scope="scope">
        <span>{{ scope.row.ordernum }}</span>
      </template>
    </el-table-column>
     <el-table-column
      label="商品分类"
      width="120"
      align="center">
      <template slot-scope="scope">
        <span>{{ scope.row.bill }}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作" align="center" width="170">
       <template slot-scope="scope">
           <router-link :to="'/cashFlowEdit/'+scope.row._id">
               <el-button
                size="mini"
                type="info"
                v-if="user.identity == 'manager'"
                >编辑</el-button>
           </router-link>
        <el-button
          size="mini"
          type="danger"
          v-if="user.identity == 'manager'"
          @click="handleDelete(scope.$index, scope.row._id)">删除</el-button>
       </template>
    </el-table-column>
  </el-table>
  <!-- 分页 -->
  <el-row>
    <el-col :span="24">
      <div class="paginations">
        <el-pagination
        v-if='paginations.total > 0'
        :page-sizes="paginations.page_sizes"
        :page-size="paginations.page_size"
        :layout="paginations.layout"
        :total="paginations.total"
        :current-page.sync='paginations.page_index'
        @current-change='handleCurrentChange'
        @size-change='handleSizeChange'>
        </el-pagination>
      </div>
    </el-col>
  </el-row>
  <!-- <div v-show="tableData.length = 0" style="margin-left:100px;">
      <h2>还没有数据，点击添加！</h2>
  </div> -->
  <!-- <el-row>
    <el-col :span="24">
      <div class="paginations">
        <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="paginations.page_index"
        :page-sizes="paginations.page_sizes"
        :page-size="paginations.page_size"
        :layout="paginations.layout"
        :total="paginations.total">
        </el-pagination>
      </div>
    </el-col>
    </el-row>   -->
</div>
    
</template>

<script>
export default {
  inject: ['reload'],
  name: 'cashFlow',
  data () {
    return {
      tableData:[],
      allTableData:[],
      filterTableData:[],
      //需要给分页组件传的信息
      paginations: {
        page_index: 1, // 当前位于哪页
        total: 0, // 总数
        page_size: 5, // 1页显示多少条
        page_sizes: [5, 10, 15, 20], //每页显示多少条
        layout: "total, sizes, prev, pager, next, jumper" // 翻页属性
      },
      search_data: {
        startTime: "",
        endTime: ""
      }
    }
  },
  created(){
      this.getTableData();
  },
  computed:{
    user(){
      return this.$store.getters.user;
    }
  },
  methods:{
      getTableData() {
          this.$axios.get("/api/cashflows")
            .then(res =>{
                // this.tableData = res.data;
                // console.log(this.tableData)
                this.allTableData = res.data;
                this.filterTableData = res.data;
                //设置分页数据
                this.setPaginations();
            })
      },
      handleEdit(index,id){
          // console.log(index,id);
      },
      handleDelete(index,id){
          this.$axios.delete("/api/cashflows/" + id)
            .then(res => {
                 this.$message({
                    message: "删除成功！",
                    type: "success"
                });
                this.reload();
            })
      },
      handleCurrentChange(page) {
        // console.log(page)
        // 当前页
        let sortnum = this.paginations.page_size * (page - 1);
        let table = this.allTableData.filter((item, index) => {
          return index >= sortnum;
        });
        // 设置默认分页数据
        this.tableData = table.filter((item, index) => {
          return index < this.paginations.page_size;
        });
      },
      handleSizeChange(page_size) {
        console.log(page_size)
        // 切换size
        this.paginations.page_index = 1;
        this.paginations.page_size = page_size;
        this.tableData = this.allTableData.filter((item, index) => {
          return index < page_size;
        });
      },
      setPaginations() {
        // 总页数
        this.paginations.total = this.allTableData.length;
        this.paginations.page_index = 1;
        this.paginations.page_size = 5;
        // 设置默认分页数据
        this.tableData = this.allTableData.filter((item, index) => {
          return index < this.paginations.page_size;
        });
      },
      cashFlowFilter(){
        // 筛选
        if (!this.search_data.startTime || !this.search_data.endTime) {
          this.$message({
            type: "warning",
            message: "请选择时间区间"
          });
          this.getTableData();
          return;
        }
        const stime = this.search_data.startTime.getTime();
        const etime = this.search_data.endTime.getTime();
        this.allTableData = this.filterTableData.filter(item => {
          // console.log(item)
          let date = new Date(item.date);
          let time = date.getTime();
          return time >= stime && time <= etime;
        });
        // 分页数据
        this.setPaginations();
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
}
.paginations{
  /* text-align: right; */
  margin-top:20px;
}

</style>
