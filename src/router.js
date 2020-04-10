import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('./components/Index.vue')
    },
    {
      path: '/form',
      name: 'Form',
      component: () => import('./components/Form.vue')
    },
    {
      path: '/detail/:itemId',
      name: 'Detail',
      component: () => import('./components/Detail.vue')
    },
  ]
})
