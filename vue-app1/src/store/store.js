import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        isAuthenticated:false, //后台管理系统是否认证
        user:{}, //存储后台管理系统用户信息
        isLogin:false, //客户端是否认证
        clientUser:{}, //存储客户端用户信息
        menuItems:[],  //存储汉堡信息
        orderInfo:[]  //存储订单信息
    },
    getters: {
        isAuthenticated: (state) => {
           return state.isAuthenticated;
        },
        user: (state) => {
            return state.user;
        },
        isLogin: (state) => {
            return state.isLogin;
        },
        clientUser: (state) => {
            return state.clientUser;
        },
        menuItems: (state) => {
            return state.menuItems;
        },
        orderInfo: (state) => {
            return state.orderInfo;
        }
        
    },
    mutations: {
        setIsAuthenticated:(state,data) => {
            state.isAuthenticated = data;
        },
        setUser: (state,data) => {
            state.user = data;
        },
        setIsLogin: (state,data) => {
            state.isLogin = data;
        },
        setClientUser: (state,data) => {
            state.clientUser = data;
        },
        setMenuItems: (state,data) => {
            state.menuItems = data;
        },
        setOrderInfo: (state,data) => {
            state.orderInfo = data;
        },
        pushOrderInfo(state,data){
            state.orderInfo.push(data)
        },
        // 将新添加的汉堡 Push到menuItems属性中
        pushToMenuItems(state,data){
            state.menuItems.push(data)
        },
        // 将匹配到的对象,在menuItems数组中删除
        removeMenuItems(state,data){
            state.menuItems.forEach((item,index) => {
              if(item == data){
                state.menuItems.splice(index,1)
              }
            });
        }
    },
    actions: {
        setIsAuthenticatedAction: ({commit},data) => {
            commit("setIsAuthenticated",data);
        },
        setUserAction: ({commit},data) => {
            commit("setUser",data);
        },
        setIsLoginAction: ({commit},data) => {
            commit("setIsLogin",data);
        },
        setClientUserAction: ({commit},data) => {
            commit("setClientUser",data);
        },
        setMenuItemsAction: ({commit},data) => {
            commit("setMenuItems",data);
        },
        setOrderInfoAction: ({commit},data) => {
            commit("setOrderInfo",data);
        }
    }  
})

export default store;