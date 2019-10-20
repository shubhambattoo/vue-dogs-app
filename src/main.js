import Vue from 'vue'
import App from './App.vue'
import router from './router'
import infiniteScroll from 'vue-infinite-scroll'
import Toasted from 'vue-toasted'
import VueClipboard from 'vue-clipboard2'
import './registerServiceWorker'

Vue.use(Toasted, { position: "top-center", duration: "1000" })
Vue.use(infiniteScroll)
VueClipboard.config.autoSetContainer = true // add this line
Vue.use(VueClipboard)

Vue.config.ignoredElements = [
  'ion-icon'
]

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
