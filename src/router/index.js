import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import me from '@/components/me'
import files from '@/components/files'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/me',
      name: 'me',
      component: me
    },
    {
      path: '/files',
      name: 'files',
      component: files
    }
  ]
})
