import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/folder/Inbox'
  },
  {
    path: '/view/worker',
    component: () => import ('../views/WorkerView.vue')
  },
  {
    path: '/view/mega',
    component: () => import ('../views/MegaView.vue')
  },
  {
    path: '/view/admin',
    component: () => import ('../views/AdminView.vue')
  },
  {
    path: '/view/tickets',
    component: () => import ('../views/TicketsView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
