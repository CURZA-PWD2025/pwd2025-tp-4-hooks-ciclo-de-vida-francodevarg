import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import TareaView from '../views/TareaView.vue'


const routes: RouteRecordRaw[] = [
  { path: '/', component: Home },
  { path: '/tarea', component: TareaView },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router