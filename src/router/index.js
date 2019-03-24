import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import me from '@/components/me'
import files from '@/components/files'
import cultural from '@/components/cultural'
import activities from '@/components/activities'
// import filesIndex from '@/components/files/index'
// import xxzl from '@/components/files/xxzl'
// import whcp from '@/components/files/whcp'
// import sxdwj from '@/components/files/sxdwj'
import login from '@/components/login'
import meIndex from '@/components/me/index'
import jianjie from '@/components/me/jianjie'
import leave from '@/components/me/leave'
import change from '@/components/me/change'
import notice from '@/components/notice'
import race from '@/components/race'
import admin from '@/components/admin'
import adminIndex from '@/components/admin/index'
import adminrace from '@/components/admin/race'
import addRace from '@/components/admin/addRace'
import addZl from '@/components/admin/addZl'
import adminsxdwj from '@/components/admin/sxdwj'
import adminwhcp from '@/components/admin/whcp'
import adminxxzl from '@/components/admin/xxzl'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    // {
    //   path: '/files',
    //   component: files,
    //   children: [{
    //     path: '/',
    //     component: filesIndex
    //   },
    //   {
    //     path: 'sxdwj',
    //     component: sxdwj
    //   },
    //   {
    //     path: 'xxzl',
    //     component: xxzl
    //   },
    //   {
    //     path: 'whcp',
    //     component: whcp
    //   }]
    // },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/me',
      component: me,
      children: [{
        path: '/',
        component: meIndex
      }, {
        path: 'jianjie',
        component: jianjie
      }, {
        path: 'leave',
        component: leave
      }, {
        path: 'change',
        component: change
      }]
    },
    {
      path: '/notice',
      component: notice
    },
    {
      path: '/video',
      component: race
    },
    {
      path: '/files',
      component: files
    },
    {
      path: '/cultural',
      component: cultural
    },
    {
      path: '/activities',
      component: activities
    },
    {
      path: '/admin',
      component: admin,
      children: [{
        path: '/',
        component: adminIndex,
        redirect: 'race',
        children: [
          {
            path: 'race',
            component: adminrace
          },
          {
            path: 'addrace',
            component: addRace
          },
          {
            path: 'addzl',
            component: addZl
          },
          {
            path: 'sxdwj',
            component: adminsxdwj
          },
          {
            path: 'whcp',
            component: adminwhcp
          },
          {
            path: 'xxzl',
            component: adminxxzl
          }
        ]
      }]
    }
  ]
})
