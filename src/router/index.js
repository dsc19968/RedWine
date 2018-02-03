import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Variety from '@/components/Variety'
import Cart from '@/components/Cart'
import Self from '@/components/Self'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Detail from '@/components/Detail'

Vue.use(Router)

export default new Router({
	mode:"hash",
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/variety',
      name: 'Variety',
      component: () => import('@/components/Variety')
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('@/components/Cart')
    },
    {
      path: '/self',
      name: 'Self',
      component: () => import('@/components/Self')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('@/components/Register')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/components/Login')
    },
    {
      path: '/detail/:fid',
      name: 'Detail',
      component: Detail
    }
  ]
})
