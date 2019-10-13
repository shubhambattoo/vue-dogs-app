import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.ignoredElements = [
  'ion-icon'
]

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
