import axios from 'axios'
axios.defaults.withCredentials = true

// http请求拦截
axios.interceptors.request.use(config => {
  config.headers['Authorization'] = localStorage.getItem('token')
  return config
}, err => {
  // 打印错误
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
}, err => {
  return Promise.reject(err)
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
