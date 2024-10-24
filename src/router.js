import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';

const routes = [
    {
        path: '/',
        name: 'app',
        component: App,
        children: [
            {
                path: '',
                name: 'champions',
                component: () => import('./pages/Champions.vue')
            },
            {
                path: '/champions-pool',
                name: 'championsPool',
                component: () => import('./pages/ChampionsPool.vue')
            },
            {
                path: '/team-comp',
                name: 'teamComp',
                component: () => import('./pages/TeamComp.vue')
            },
        ]
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;