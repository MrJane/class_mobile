import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      meta:{
        showFooter:true
      },
      component: Home
    },
    {
      path: '/my',
      name: 'about',
      meta:{
        showFooter:true
      },
      component: () => import(/* webpackChunkName: "about" */ './views/my/my.vue')
    },
    {
      path: '/resource',
      name: 'resource',
      meta:{
        showFooter:true
      },
      component: () => import(/* webpackChunkName: "about" */ './views/resource/resource.vue')
    },
    {
      path: '/detail/:id',
      name: 'resource',
      meta:{
        showFooter:false
      },
      component: () => import(/* webpackChunkName: "about" */ './views/detail/detail.vue')
    }
  ]
})
