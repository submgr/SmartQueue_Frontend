import { createRouter, createWebHistory } from '@ionic/vue-router';
const routes = [
    {
        path: '',
        redirect: '/view/mega'
    },
    {
        path: '/view/worker',
        component: () => import('../views/WorkerView.vue')
    },
    {
        path: '/view/mega',
        component: () => import('../views/MegaView.vue')
    },
    {
        path: '/view/admin',
        component: () => import('../views/AdminView.vue')
    },
    {
        path: '/view/tickets',
        component: () => import('../views/TicketsView.vue')
    },
    {
        path: '/view/queuedWorkers',
        component: () => import ('../views/QueuedOperators.vue')
    }
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});
export default router;
//# sourceMappingURL=index.js.map