import Vue from 'vue'
import Router from 'vue-router'

const Home = () =>
  import('../components/Home/Home.vue')
const Content = () =>
  import('../components/Content/Content.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    component: Home
  },
  {
    name: 'content',
    path: '/content/:id',
    component: Content
  }
  ]
})
