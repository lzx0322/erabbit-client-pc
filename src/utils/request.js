// 1. 创建一个新的 axios 实例
// 2. 请求拦截器,如果有 token 进行头部携带
/**
 * 3. 响应拦截器
 *    3.1 剥离无效数据
 *    3.2 处理 token 失效
 */
// 4. 导出一个函数,调用当前的axios实例发请求,返回值 promise

import axios from 'axios'
import store from '@/store'
import router from '@/router'

// 导出基准地址
export const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'
const instance = axios.create({
  // axios 的一些配置
  baseURL,
  timeout: 5000
})

instance.interceptors.request.use(config => {
  // 拦截业务逻辑
  // 进行请求配置的修改
  // 如果本地有 token 就在头部携带
  // 1. 获取用户信息对象
  const { profile } = store.state.user
  // 2. 判断是否有 token
  if (profile.token) {
    // 3. 设置 token
    config.headers.Authorization = `Bearer ${profile.token}`
  }
  return config
}, err => {
  return Promise.reject(err)
})

// res => res.data 取出 data 数据,将来调用接口的时候直接拿到的就是后台的数据
instance.interceptors.response.use(res => res.data, err => {
  // 401 状态码,进入该函数
  if (err.response && err.response.status === 401) {
    // 1. 清空无效用户信息
    // 2. 跳转到登录页
    // 3. 跳转需要传参 (当前路由地址) 给登录页
    store.commit('user/setUser', {})
    /**
     * 当前路由地址
     * 组件里头: `/user?a=10` $route.path === /user  $route.fullPath === /user?a=10
     * js模块中: router.currentRoute.value.fullPath 就是当前路由地址，router.currentRoute 是ref响应式数据
     */
    // encodeURIComponent 转换uri编码，防止解析地址出问题
    const fullPath = encodeURIComponent(router.currentRoute.value.fullPath)
    router.push('/login?redirectUrl=' + fullPath)
  }
  return Promise.reject(err)
})

// 请求工具函数
export default (url, method, submitData) => {
  // 负责发请求
  return instance({
    url,
    method,
    /**
     * 提交数据
     * 1. 如果是get请求  需要使用params来传递submitData   ?a=10&c=10
     * 2. 如果不是get请求  需要使用data来传递submitData   请求体传参
     * [] 设置一个动态的key, 写js表达式，js表达式的执行结果当作 KEY
     * method参数: 转换成小写再来判断
     *  在对象，['params']:submitData ===== params:submitData 这样理解
     */
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}
