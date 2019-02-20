import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import me from '@/components/me'
import files from '@/components/files'
import filesIndex from '@/components/files/index'
import xxzl from '@/components/files/xxzl'
import whcp from '@/components/files/whcp'
import sxdwj from '@/components/files/sxdwj'
import login from '@/components/login'
import meIndex from '@/components/me/index'
import jianjie from '@/components/me/jianjie'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/files',
      name: 'files',
      component: files,
      children: [{
        path: '/',
        component: filesIndex
      },
      {
        path: 'sxdwj',
        component: sxdwj
      },
      {
        path: 'xxzl',
        component: xxzl
      },
      {
        path: 'whcp',
        component: whcp
      }]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/me',
      name: 'me',
      component: me,
      children: [{
        path: '/',
        component: meIndex
      }, {
        path: 'jianjie',
        component: jianjie
      }]
    }
  ]
})
