import { createRouter, createWebHistory } from 'vue-router'

// import các view
import HomeView from '../views/HomeView.vue'
import BuilderView from '../views/BuilderView.vue'

// khai báo routes
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/builder',
    name: 'Builder',
    component: BuilderView
  }
]

// tạo router instance
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
