<template>
    <div class="clientAdmin">
        <div class="container">
            <!-- 添加 -->
            <el-col :span="16">
                <div class="addHead">添加新的hamburgers</div>
                <el-form :model="newHamburgers" :rules="rules" ref="newHamburgers" label-width="100px" class="demo-newHamburgers">
                    <el-form-item label="品种" prop="name">
                        <el-input v-model="newHamburgers.name"></el-input>
                    </el-form-item>
                    <el-form-item label="描述" prop="description">
                        <el-input type="textarea" v-model="newHamburgers.description"></el-input>
                    </el-form-item>
                    <el-form-item label="尺寸" prop="size">
                        <el-input v-model="newHamburgers.size"></el-input>
                    </el-form-item>
                    <el-form-item label="价格" prop="price">
                        <el-input v-model="newHamburgers.price"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button class="addBtn" type="primary" @click="submitForm('newHamburgers')">添加</el-button>
                    </el-form-item>
                </el-form>
            </el-col> 
            <!-- 菜单 -->
            <el-col :span="7" class="menu">
                <div class="addHead">菜单</div>
                <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                label="品种"
                width="110">
                <template slot-scope="scope">
                    <span>{{scope.row.name}}</span>
                </template>
                </el-table-column>
                <el-table-column
                label="尺寸"
                width="110">
                <template slot-scope="scope">
                    <span>{{scope.row.size}}</span>
                </template>
                </el-table-column>
                <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.row,scope.row._id)">删除</el-button>
                </template>
                </el-table-column>
            </el-table>
            </el-col>  
        </div> 
    </div>
</template>

<script>
export default {
  name: 'clientAdmin',
  data () {
    return {
        tableData:[],
        newHamburgers:{
        },
        rules: {
          name: [
            { required: true, message: '请输入名称', trigger: 'blur' }
          ],
          description: [
            { required: true, message: '请选择描述信息', trigger: 'blur' }
          ],
          size: [
            { required: true, message: '请选择尺寸', trigger: 'blur' }
          ],
          price: [
            {required: true, message: '请选择价格', trigger: 'blur' }
          ]
        }
    }
  },
  created(){
      this.getHamburgers();
  },
  methods:{
      getHamburgers(){
          this.$axios.get(`/api/hamburgers`)
            .then(res => {
                this.tableData = res.data;
                this.$store.commit("setMenuItems",res.data)
                // console.log(res.data)
                // console.log(this.$store.getters.menuItems);
                // console.log(this.tableData)
            })
            
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let data = {
                name:this.newHamburgers.name,
                description:this.newHamburgers.description,
                size:this.newHamburgers.size,
                price:this.newHamburgers.price
            }
            this.$axios.post("/api/hamburgers",data)
                .then((res) => {
                    this.$message({
                        type:"success",
                        message:"添加成功!"
                    })
                    this.$store.commit("pushToMenuItems",data);
                    // this.tableData.push(data);
                    
                }).catch((err) => {
                    
                });
                
          }
        });
      },
      handleDelete(index,id){
        //   console.log(index)
          this.$axios.delete(`/api/hamburgers/${id}`)
            .then(res => {
                this.$message({
                    type:"success",
                    message:"删除成功！"
                })
                this.$store.commit("removeMenuItems",index)
            })
      }
  }
}
</script>

<style scoped>
.clientAdmin{
    width:100%;
    height:100%;
    background: #fff;
}
.addHead{
    color: #8a9294;
    margin: 20px;
    font-size: 24px;
}
.addBtn{
    width: 100%;
}
.menu{
    float: right;
}
</style>
