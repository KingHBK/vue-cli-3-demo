import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { A } from './core'
import store from './store'
import 'lib-flexible'
// import '@/assets/js/vConsole'
import './registerServiceWorker'

Vue.prototype.A = A
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
