import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import TareaView from '../views/TareaView.vue'
import DimensionView from '../views/DimensionView.vue'


const routes: RouteRecordRaw[] = [
  { path: '/', component: Home },
  { path: '/tarea', component: TareaView },
  { path: '/dimension', component: DimensionView },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router