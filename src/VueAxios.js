import axios from 'axios'
import store from './store/index'
import router from './router'

axios.defaults.withCredentials = true

// http请求拦截
axios.interceptors.request.use(config => {
  config.headers['Authorization'] = localStorage.getItem('token')
  return config
}, err => {
  // 打印错误
  store.commit('changAlert', {
    msg: '请求信息错误！',
    status: 2,
    sec: 5
  })
  return Promise.reject(err)
})

axios.interceptors.response.use(data => {
  if (data.status) {
    return data
  } else {
    console.log('err')
    return data
  }
  // return data
}, error => {
  console.log(error)
  console.log(router.app.$route.path)
  if (error.response.status) {
    switch (error.response.status) {
      case 401:
        if (router.app.$route.path !== '/login') {
          router.replace({
            path: '/login?url=' + router.app.$route.path
          })
        }
        break
      case 403:
        store.commit('changAlert', {
          msg: '登录过期！',
          status: 2,
          sec: 5
        })
        localStorage.removeItem('token')
        break

      case 404:
        store.commit('changAlert', {
          msg: '网络请求不存在',
          status: 2,
          sec: 5
        })
        break
      default:
        store.commit('changAlert', {
          msg: '请求失败！',
          status: 2,
          sec: 5
        })
    }
  }
  return Promise.reject(error)
})

const install = Vue => {
  if (install.installed) return
  install.installed = true

  Object.defineProperties(Vue.prototype, {
    $axios: {
      get () {
        return axios
      }
    }
  })
}

export default install
