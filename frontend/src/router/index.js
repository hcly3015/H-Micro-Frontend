import Vue from 'vue'
import VueRouter from 'vue-router'

import LayoutMain from '@/components/LayoutMain.vue'
import ManagerView from '@/views/ManagerView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: LayoutMain,
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        meta: { icon: 'md-funnel', title: '首页' },
        component: () => import('@/views/Dashboard')
      }
    ]
  },
  {
    path: '/pages',
    component: LayoutMain,
    children: [
      {
        path: '/testpage1',
        name: 'testpage1',
        meta: { icon: 'md-funnel', title: '路由页面1' },
        component: () => import('@/views/TestPage1')
      },
      {
        path: '/testpage2',
        name: 'testpage2',
        meta: { icon: 'md-funnel', title: '路由页面2' },
        component: () => import('@/views/TestPage2')
      }
    ]
  },
  {
    path: '/managerview',
    component: LayoutMain,
    children: [
      {
        path: '/managerview',
        name: 'managerview',
        meta: { icon: 'md-funnel', title: '微服务页面' },
        component: () => import('@/views/ManagerView')
      },
      {
        path: '/sub-app3',
        name: 'subapp3',
      }
    ]
  },
  {
    path: '/pages',
    component: LayoutMain,
    children: [
      {
        path: '/managerview',
        component: ManagerView,
        children: [
          {
            path: '/sub-app1',
            name: 'subapp1',
          },
          {
            path: '/sub-app2',
            name: 'subapp2',
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
