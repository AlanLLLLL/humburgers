import axios from 'axios'
import router from './routes/router'
import {Message,Loading} from 'element-ui'//设置加载动画和消息提示

let loading;
function startLoading(){    //使用Element loading-start 方法
    loading = Loading.service({
        lock: true,
        text: '加载中',
        background: 'rgba(0, 0, 0, 0.7)'
    })
}
function endLoading() {    //使用Element loading-close 方法
    loading.close()
}
//请求拦截
axios.interceptors.request.use(config =>{
    startLoading();
    //设置统一的请求头
    if(localStorage.clientLoginToken){
        config.headers.Authorization = localStorage.clientLoginToken;
    }
    if(localStorage.loginToken){
        config.headers.Authorization = localStorage.loginToken;
    }
    return config;
},error => {
    return Promise.reject(error)
})
//响应拦截
axios.interceptors.response.use(response =>{
    endLoading();
    return response;
},error => {
    // 错误提醒
    endLoading()
    Message.error(error.response.data)

    const { status } = error.response
    if (status == 401) {
        Message.error('token值无效，请重新登录')
        // 清除token
        localStorage.removeItem('loginToken')

        // 页面跳转
        router.push('/login')
    }
})
export default axios;