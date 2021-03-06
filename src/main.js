import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Router from 'vue-router'
// 导入请求
import server from './server/fetch'
// 导入vant组件
import './assets/vant/index.js'
// 导入初始化css样式
import './assets/css/base.css'
import { BASE_URL } from './config/index'
// 导入字体图标
import './assets/fonts/iconfont.css'
Vue.config.productionTip = false
// 验证码
Vue.prototype.img_url = 'http://localhost:3000/user/getCode?time=' + Date.now()
Vue.prototype.$http = server
Vue.prototype.baseUrl = BASE_URL
// 处理路由切换报错的问题
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
