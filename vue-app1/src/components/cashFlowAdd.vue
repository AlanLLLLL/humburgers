<template>
    <div class="cashFlowAdd">
       <el-form :model="cashFlowData" :rules="rules" ref="cashFlowForm" label-width="100px" class="demo-cashFlowForm">
            <el-form-item label="商品名称" prop="goods">
                <el-input v-model="cashFlowData.goods" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="商家" prop="seller">
                <el-input v-model="cashFlowData.seller" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="收入" prop="income">
                <el-input v-model="cashFlowData.income" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="支出" prop="pay">
                <el-input v-model="cashFlowData.pay" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="订单号" prop="ordernum">
                <el-input v-model="cashFlowData.ordernum" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="商品分类" prop="bill">
                <el-input v-model="cashFlowData.bill" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button class="addBtn" type="primary" @click="goBack">返回</el-button>
                <el-button class="addBtn" type="primary" @click="submitForm('cashFlowForm')">添加</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
  name: 'cashFlowAdd',
  data () {
    return {
        cashFlowData:{
            goods:"",
            seller:"",
            income:"",
            pay:"",
            ordernum:"",
            bill:""
        },
        rules:{
            goods:[
                {required:true,message:"商品名称不能为空",trigger:"blur"}
            ],
            seller:[
                {required:true,message:"商家不能为空",trigger:"blur"}
            ],
            income:[
                {required:true,message:"收入不能为空",trigger:"blur"}
            ],
            pay:[
                {required:true,message:"支出不能为空",trigger:"blur"}
            ],
            ordernum:[
                {required:true,message:"订单号不能为空",trigger:"blur"}
            ],
            bill:[
                {required:true,message:"商品分类不能为空",trigger:"blur"}
            ]
        }
    }
  },
  methods:{
      goBack(){
          this.$router.go(-1);
      },
      submitForm(formName){
          this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$axios.post("/api/cashflows",this.cashFlowData)
                .then((res) => {
                    console.log(res)
                    this.$message({
                    message: "添加成功！",
                    type: "success"
                     });
                     this.$router.push({path:"/cashflow"})
                })
                .catch((err) => {
                   console.log(err)
                })
          }
        });
      }
  }
}
</script>

<style scoped>
.cashFlowAdd{
    width: 40%;
    margin-left: 20%;
    margin-top: 3%;
    padding: 20px;
    border:rgb(224, 218, 218) 1px solid;
    border-radius: 5px;
}
.addBtn{
    width: 48%;
}
</style>
