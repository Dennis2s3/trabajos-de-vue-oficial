import { createRouter, createWebHistory } from 'vue-router'
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
    path: '/parte1',
    name: 'parte1',
  
    component: () => import(/* webpackChunkName: "about" */ '../components/Parte1')

  },
  {
    path: '/parte2',
    name: 'parte2',
  
    component: () => import(/* webpackChunkName: "about" */ '../components/Parte2')

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
