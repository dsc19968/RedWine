import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Variety from '@/components/Variety'
import Cart from '@/components/Cart'
import Self from '@/components/Self'
import Register from '@/components/Register'
import Login from '@/components/Login'

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
      component: Variety
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/self',
      name: 'Self',
      component: Self
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
