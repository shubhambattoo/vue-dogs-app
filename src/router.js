import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Likes from './views/Likes.vue'
import Breeds from './views/Breeds.vue'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: "/likes",
      name: "likes",
      component: Likes
    },
    {
      path: "/breeds",
      name: "breeds",
      component: Breeds
    }
  ]
})
