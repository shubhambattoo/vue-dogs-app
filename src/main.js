import Vue from 'vue'
import App from './App.vue'
import router from './router'
import infiniteScroll from 'vue-infinite-scroll'

Vue.use(infiniteScroll)

Vue.config.ignoredElements = [
  'ion-icon'
]

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
