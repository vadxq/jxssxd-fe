import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import me from '@/components/me'
import files from '@/components/files'
import filesIndex from '@/components/files/index'
import xxzl from '@/components/files/xxzl'
import whcp from '@/components/files/whcp'
import sxdwj from '@/components/files/sxdwj'

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
    }
  ]
})
