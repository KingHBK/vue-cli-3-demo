import Vue from 'vue'
import Router from 'vue-router'
import { Toast } from 'vant'
import { getCookie } from '@/assets/js/common'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/Home'
    },
    {
      path: '/Home',
      meta: {
        title: '首页',
        checkAuth: false
      },
      component: () => import('@/views/Home')
    },
    {
      path: '/lesson/dataType',
      meta: {
        title: '数据类型',
        checkAuth: false
      },
      component: () => import('@/views/lesson/DataType')
    },
    {
      path: '/lesson/proto',
      meta: {
        title: '原型',
        checkAuth: false
      },
      component: () => import('@/views/lesson/Proto')
    },
    {
      path: '/lesson/prototype',
      meta: {
        title: '原型链',
        checkAuth: false
      },
      component: () => import('@/views/lesson/Prototype')
    },
    {
      path: '/lesson/callApply',
      meta: {
        title: 'call()和apply()',
        checkAuth: false
      },
      component: () => import('@/views/lesson/CallApply')
    },
    {
      path: '/lesson/closure',
      meta: {
        title: '闭包',
        checkAuth: false
      },
      component: () => import('@/views/lesson/Closure')
    },
    {
      path: '/lesson/asyncAwait',
      meta: {
        title: 'async和await',
        checkAuth: false
      },
      component: () => import('@/views/lesson/AsyncAwait')
    },
    {
      path: '/lesson/es6',
      meta: {
        title: 'ES6',
        checkAuth: false
      },
      component: () => import('@/views/lesson/ES6')
    },
    {
      path: '/lesson/retina',
      meta: {
        title: 'Retina问题',
        checkAuth: false
      },
      component: () => import('@/views/lesson/RetinaPx')
    },
    {
      path: '/lesson/media',
      meta: {
        title: '媒体查询',
        checkAuth: false
      },
      component: () => import('@/views/lesson/Media')
    },
    {
      path: '/vue/slot',
      meta: {
        title: 'vue插槽',
        checkAuth: false
      },
      component: () => import('@/views/vue/slot/Slot')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const token = getCookie('token')
  if (to.meta.checkAuth && (token === null || token === '')) {
    Toast('请登录')
    next({ path: '/login/index' })
  } else {
    next()
  }
})

export default router
