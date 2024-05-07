import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Login',
        component: () => import('../views/Login.vue'),
    },
    {
        path: '/ManagerIndex',
        name: 'ManagerIndex',
        component: () => import('../views/ManagerIndex.vue'),
        children: [
            {
                path: '',
                name: 'UserManagement',
                component: () => import('../views/UserManagement.vue'),
            },
            {
                path: 'TeamManagement',
                name: 'TeamManagement',
                component: () => import('../views/TeamManagement.vue'),
            },
            {
                path: 'EventManagement',
                name: 'EventManagement',
                component: () => import('../views/EventManagement.vue'),
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
