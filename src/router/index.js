import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/userlogin',
    name: 'userlogin',
    component: () => import(/* webpackChunkName: "about" */ '../views/UserLogin.vue')
  },
  {
    path: '/adminlogin',
    name: 'adminlogin',
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminLogin.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
