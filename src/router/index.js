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
  {
    path: '/register',
    name: 'registeruser',
    component: () => import(/* webpackChunkName: "about" */ '../views/UserRegister.vue')
  },
  {
    path: '/mainuser',
    name: 'mainuser',
    component: () => import(/* webpackChunkName: "about" */ '../views/MainUser.vue')
  },
  {
    path: '/mainadmin',
    name: 'mainadmin',
    component: () => import(/* webpackChunkName: "about" */ '../views/MainAdmin.vue')
  },
  {
    path: '/notirepair',
    name: 'notify',
    component: () => import(/* webpackChunkName: "about" */ '../views/NotifyRepairuser.vue')
  },
  {
    path: '/editnotirepair',
    name: 'editnotirepair',
    component: () => import(/* webpackChunkName: "about" */ '../views/EditNotifyrepair.vue')
  },
  {
    path: '/trackMrr',
    name: 'trackMrr',
    component: () => import(/* webpackChunkName: "about" */ '../views/TrackMrr.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProfileUser.vue')
  },
 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
