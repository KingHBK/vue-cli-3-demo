import router from './router'
import axios from 'axios'
import { Toast } from 'vant'
import { getCookie, delCookie } from '@/assets/js/common'

// 判断当前应用环境
// 生产环境
const isProd = Object.is(process.env.NODE_ENV, 'production') && window.location.host.indexOf('') > -1
// 测试环境
// const isQc = Object.is(process.env.NODE_ENV, 'production') && window.location.host.indexOf('') > -1
// 开发环境
// const isDev = Object.is(process.env.NODE_ENV, 'development')

// 接口请求相关，修改时清不要直接修改拦截器，修改此处配置即可
const A = axios
const apiConfig = {
  baseUrl: isProd ? `` : '/api', // 对应axios的baseUrl
  wsUrl: isProd ? `` : ``, // websocket的地址
  dealRequest (config) { // 拦截请求时的处理
    if (getCookie('token')) {
      config.headers.Authorization = getCookie('token')
    }
    return config
  },
  dealResponse (response) { // 拦截返回时的处理
    let result = response.data
    if (result.code !== 200) {
      Toast(result.msg)
      if (result.code === 100) { // 后台验证登录信息失败
        delCookie('token')
        router.push({ path: '/login/index' })
      }
    }
    return result
  }
}

// 请尽量不要直接修改此处拦截器，若需要修改请到apiConfig处修改配置
A.defaults.baseURL = apiConfig.baseUrl
A.interceptors.request.use(config => {
  Toast.loading({
    duration: 0,
    forbidClick: true,
    loadingType: 'circular',
    message: '加载中...'
  })
  const dealConfig = apiConfig.dealRequest(config)
  return dealConfig
}, error => {
  return Promise.reject(error)
})
A.interceptors.response.use(response => {
  Toast.clear()
  const dealResponse = apiConfig.dealResponse(response)
  return dealResponse
}, error => {
  Toast(`连接异常 ${error.response.status}`)
})

export { A }
