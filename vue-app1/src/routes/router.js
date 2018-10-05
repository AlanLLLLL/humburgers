import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/index/home.vue'
import Register from '../components/register.vue'
import Index from '../components/index.vue'
import Login from '../components/login.vue'
import IndexHome from '../components/indexHome.vue'
import InfoShow from '../components/infoShow.vue'
import CashFlow from '../components/cashFlow.vue'
import CashFlowAdd from '../components/cashFlowAdd.vue'
import CashFlowEdit from '../components/cashFlowEdit.vue'
import UserList from '../components/userList.vue'
import ClientList from '../components/clientList.vue'
import OrderInfo from '../components/orderInfo.vue'
import Sales from '../components/sales.vue'

import ClientRegister from '../components/client/Register.vue'
import ClientLogin from '../components/client/Login.vue'
import ClientHome from '../components/client/clientHome.vue'
import ClientAbout from '../components/client/clientAbout.vue'
import ClientAdmin from '../components/client/clientAdmin.vue'
import ClientMenu from '../components/client/clientMenu.vue'
import MyOrder from '../components/client/myOrder.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    mode:"history",
    routes:[
        {path:"/",component:Home},
        {path:"",component:Home},
        //客户端
        {
            path:"/clientHome",component:ClientHome,
            children:[
                {path:"/clientRegister",component:ClientRegister},
                {path:"/clientLogin",component:ClientLogin},
                {path:"/clientAbout",component:ClientAbout},
                {path:"/clientAdmin",component:ClientAdmin},
                {path:"/clientMenu",component:ClientMenu},
                {path:"/myOrder/:id",component:MyOrder}
            ]
        },
        //后台管理系统
        {path:"/index",component:Index,
        children:[
            {path:"",component:IndexHome},
            {path:"/infoShow",component:InfoShow},
            {path:"/clientList",component:ClientList},
            {path:"/userList",component:UserList},
            {path:"/orderInfo",component:OrderInfo},
            {path:"/cashFlow",component:CashFlow},
            {path:"/cashFlowAdd",component:CashFlowAdd},
            {path:"/cashFlowEdit/:id",component:CashFlowEdit},
            {path:"/sales",component:Sales}
        ]
    },
        {path:"/register",component:Register},
        {path:"/login",component:Login}
    ]
})
//设置路由守卫
router.beforeEach((to,from,next) =>{
    const isBackLogin = localStorage.loginToken ? true:false;
    const isClientLogin = localStorage.clientLoginToken ? true:false;

    if(to.path == "/login" || to.path == "/register" || to.path == "/" || to.path == "/clientHome" || to.path =="/clientRegister" || to.path =="/clientLogin" || to.path =="/clientAbout"){
        next();
    }else if(to.path == "/clientAdmin" || to.path == "/clientMenu"){
        isClientLogin ? next() : next("/clientLogin");
    }else{
        // isBackLogin ? next() : next("/login");
        next();
    }
})

export default router;