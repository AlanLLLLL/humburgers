<template>
    <div class="clientMenu">
        <div class="container">
            <el-col :span="16">
                <div class="addHead">菜单</div>
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
                label="尺寸"
                width="180">
                <template slot-scope="scope" >
                    <span>
                        {{ scope.row.size }}寸
                    </span>
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
                label="操作"
                width="180">
                <template slot-scope="scope">
                    <el-button type="primary" @click="addShop(scope.row,scope.row.price)">加入购物车</el-button>
                </template>
                </el-table-column>
            </el-table>
            </el-col>
            <!-- 购物车 -->
            <el-col :span="7" class="shop">
                <div class="addHead">购物车</div>
                <el-table
                :data="shops"
                style="width: 100%">
                <el-table-column
                label="数量"
                width="130">
                <template slot-scope="scope">
                   <el-button
                    size="mini"
                    @click="reduceQuantity(scope.row)">-</el-button>
                    <span>{{scope.row.quantity}}</span>
                    <el-button
                    size="mini"
                    @click="increaseQuantity(scope.row)">+</el-button>
                </template>
                </el-table-column>
                <el-table-column
                label="品种"
                width="110">
                <template slot-scope="scope">
                    <span>{{scope.row.name}}</span>
                </template>
                </el-table-column>
                <el-table-column label="价格">
                <template slot-scope="scope">
                    {{scope.row.quantity*parseInt(scope.row.price)}}元
                </template>
                </el-table-column>
            </el-table>
            <p class="totalMoney">总额：{{total}}元</p>
            <el-button class="submitBtn" type="primary" @click="submitInfo()">提交</el-button>
            </el-col>
        </div>
    </div>
</template>

<script>
export default {
  name: "clientMenu",
  data() {
    return {
      tableData: [],
      shops: []
    };
  },
  created() {
    this.getHamburgers();
  },
  computed:{
      total(){
          let totalMoney = 0;
          for(let index in this.shops){
              let shop = this.shops[index];
              totalMoney += shop.quantity * parseInt(shop.price)
          }
          return totalMoney;
      }
  },
  methods: {
    getHamburgers() {
      this.$axios.get(`/api/hamburgers`).then(res => {
        this.tableData = res.data;
        // console.log(this.tableData)
      });
    },
    addShop(item, price) {
      const shop = {
        name: item.name,
        price: item.price,
        quantity: 1
      };
      if (this.shops.length > 0) {
        // 过滤
        let result = this.shops.filter(shop => {
          return shop.name === item.name && shop.price === item.price;
        });
        if (result != null && result.length > 0) {
          result[0].quantity++;
        } else {
          this.shops.push(shop);
        }
      } else {
        this.shops.push(shop);
      }
    },
    reduceQuantity(item) {
      item.quantity--;
      if (item.quantity <= 0) {
       this.removeShop(item);
      }
    },
    increaseQuantity(item) {
        item.quantity++;
    },
    removeShop(shop) {
      this.shops.splice(this.shops.indexOf(shop), 1);
    },
    submitInfo(){

      // let myOrder = this.$store.getters.orderInfo;
      this.$store.commit("pushOrderInfo",this.shops);
      // let resultOrder = [];
      // if(myOrder.length <= 0){
      //    this.$store.commit("pushOrderInfo",this.shops);
      // }else{
      //       for(let index in myOrder){
      //         for(let i in myOrder[index]){
      //           let res = myOrder[index][i];
      //           resultOrder.push(res);
      //         }
      //       }
      //       if (this.shops.length > 0) {
      //         // 过滤
      //         let result = this.shops.filter(shop => {
      //           return shop.name === resultOrder.name && shop.price === resultOrder.price;
      //         });
      //         if (result != null && result.length > 0) {
      //           result[0].quantity++;
      //         } else {
      //           this.shops.push(shop);
      //           this.$store.commit("pushOrderInfo",this.shops);
      //         }
      //       } else {
      //         this.shops.push(shop);
      //         this.$store.commit("pushOrderInfo",this.shops);
      //       }
      //     }
      
      
      //console.log(this.$store.getters.orderInfo)
     this.$router.push({path:"/myOrder/" + this.$store.getters.clientUser.id})
    }
  }
};
</script>

<style scoped>
.clientMenu {
  width: 100%;
  height: 100%;
  background: #fff;
}
.addHead {
  color: #8a9294;
  margin: 20px;
  font-size: 24px;
}
.shop {
  float: right;
}
.totalMoney{
    margin-top:20px;
    font-size: 20px;
    font-weight: bold;
    color: #909399;
}
.submitBtn{
  width: 100%;
  margin: 30px 0;
}
</style>
