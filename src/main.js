//这是项目打包的入口文件
//今后, 只要运行webpack, 就会自动把main.js 打包

import Vue from 'vue'
import App from './App'
//如果要加载某个目录中的index.js文件,则可以省略这个目录名
import router from './router'

import axios from 'axios'

//导入全局样式表
import './assets/css/global.css'
//导入字体图标库
import './assets/fonts/iconfont.css'

//导入element-ui
import ElementUI from 'element-ui';
Vue.use(ElementUI);

//添加路由导航守卫, 只有登陆了才能访问
router.beforeEach((to, from, next) => {
  if(to.path === '/login') return next()
  //获取令牌
  const token = sessionStorage.getItem('token')
  if(!token) return next('/login')
  next()
  
})

//安装axios安装挂载到vue上
axios.defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1/'
Vue.prototype.$http = axios


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
