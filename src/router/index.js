import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'

//
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {//如果访问的式/根路径,则重定向到/login登录界面
      path: '/',
      redirect:'/login'
    },
    {
      path:'/login',component:Login
    },
    {
      path:'/home',component:Home
    }
  ]
})
