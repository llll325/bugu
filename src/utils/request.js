import axios from 'axios'

const request = axios.create({
    baseURL: '/api',  // 注意！！ 这里是全局统一加上了 '/api' 前缀，也就是说所有接口都会加上'/api'前缀在，页面里面写接口的时候就不要加 '/api'了，否则会出现2个'/api'，类似 '/api/api/user'这样的报错，切记！！！
    timeout: 5000
})

// let baseUrl = process.env.NODE_ENV === 'production'?'':'/apiurl';

// this.targetAction =  `${window.location.origin}/api/configurationController/loadConfig`
// request 拦截器
// 可以自请求发送前对请求做一些处理
// 比如统一加token，对请求参数统一加密
request.interceptors.request.use(config => {
    config.headers['Content-Type'] = 'application/json;charset=utf-8';
    config.headers.token = localStorage.getItem("token")

    // config.headers['token'] = user.token;  // 设置请求头
    return config
}, error => {
    return Promise.reject(error)
});

// response 拦截器
// 可以在接口响应后统一处理结果
request.interceptors.response.use(
    response => {
        let res = response.data;
        // // 如果是返回的文件
        // if (response.config.responseType === 'blob') {
        //     return res
        // }
        // // 兼容服务端返回的字符串数据
        // if (typeof res === 'string') {
        //     res = res ? JSON.parse(res) : res
        // }
        return res;
    },
    error => {
        console.log('err' + error) // for debug
        return Promise.reject(error)
    }
)
// /**
//  * 可以通过 request.get() 方式调用
//  */
//  ['get', 'post', 'put', 'delete', 'patch'].forEach((item)=>{
// 	request[item] = (url, data, options)=>{
// 		return request({
// 			method: item,
// 			url, 
// 			data, 
// 			...options
// 		})
// 	}
// });



export default request

