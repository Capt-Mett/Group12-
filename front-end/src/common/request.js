import axios from 'axios'
import store from '../store/index'
import NProgress from 'nprogress'; // Progress 进度条
import 'nprogress/nprogress.css'; // Progress 进度条样式
import {Loading} from 'element-ui'
import router from '../router/index.js'
// import qs from 'qs';

export function request(config, autoRemote = null) {
    let axiosCreateConfig = {
        // baseURL: autoRemote === null ? 'http://47.94.36.16:18002' : autoRemote,
        // baseURL: autoRemote === null ? 'http://localhost:18082' : autoRemote,
        baseURL: autoRemote === null ? 'http://127.0.0.1:8080' : autoRemote,
        timeout: 8000
    };

    //加载动态
    NProgress.start();
    let loading = Loading.service({
        text: '加载中...',
    });

    const instance = axios.create(axiosCreateConfig);

    // let that = this



    //请求拦截
    instance.interceptors.request.use(config => {
        //2.某些网络请求（比如登录（token）），必须携带一些特殊信息
        //必须返回config，不然会无法发送请求。

        if (store.state.token != null) {
            config.headers.token = 'Bearer ' + store.state.token;
        }
        return config;
    }, err => {
        console.log(err);
        //一般只有网络连接中断才会走这里
        NProgress.done();
        loading.close();
    });

    //响应拦截
    instance.interceptors.response.use(res => {
        NProgress.done();
        loading.close();

        let type = res.data.type;
        let message = res.data.message;
        let statusCode = res.data.statusCode;

        let notifyConfig = {};
        notifyConfig.message = '<i style="color: orange">[' + statusCode + ']  </i>  ' + message;
        notifyConfig.position = 'top-right';
        notifyConfig.showClose = true;
        notifyConfig.dangerouslyUseHTMLString = true;
        switch (type) {
            case 1:
                notifyConfig.title = '提示';
                notifyConfig.type = 'info';
                notifyConfig.duration = 3000;
                break;
            case 2:
                notifyConfig.title = '成功';
                notifyConfig.type = 'success';
                notifyConfig.duration = 3000;
                break;
            case 3:
                notifyConfig.title = '警告';
                notifyConfig.type = 'warning';
                notifyConfig.duration = 4500;
                break;
            case 4:
                notifyConfig.title = '失败';
                notifyConfig.type = 'error';
                notifyConfig.duration = 4500;
                break;
            case 5:
                notifyConfig.title = '注意';
                notifyConfig.type = 'warning';
                notifyConfig.duration = 0;
                store.commit("setToken", null);
                store.commit("setCurrentUser", null);
                router.replace('/');
                break;
            default:
                break;
        }


        return res.data;
    }, err => {
        console.log(err);
        switch (err.message) {
            case 'Network Error':    // 服务端服务没有启动  或 本机没有联网
                break;
            case 'timeout of 8000ms exceeded':   //请求执行太久
                break;
        }


        NProgress.done();
        loading.close();
    });



    return instance(config)
}