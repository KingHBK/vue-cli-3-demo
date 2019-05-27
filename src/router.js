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
