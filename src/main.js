import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { i18n, A } from './core'
// import store from './store/store'
import store from './store/index'
import 'lib-flexible'
// import '@/assets/js/vConsole'
import './registerServiceWorker'

Vue.prototype.A = A
Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
