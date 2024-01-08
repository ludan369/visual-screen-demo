import { createRouter, createWebHistory } from 'vue-router'
import { RouterView } from 'vue-router'

let router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'home',
            path: '/',
            meta: { title: '首页', icon: 'Fold' },
            component: RouterView
        },
        {
            name: 'bigScreen',
            path: '/bigScreen',
            meta: { title: '大屏demo', icon: 'Fold' },
            component: RouterView,
            children: [
                {
                    name: 'demo01',
                    path: 'demo01',
                    meta: { title: 'demo01', icon: 'location' },
                    component: () => import('@/pages/bigScreen/demo01/index.vue')
                },
                {
                    name: 'demo02',
                    path: 'demo02',
                    meta: { title: 'demo02', icon: 'location' },
                    component: () => import('@/pages/bigScreen/demo02/index.vue')
                },
                {
                    name: 'demo03',
                    path: 'demo03',
                    meta: { title: 'demo03', icon: 'location' },
                    component: () => import('@/pages/bigScreen/demo03/index.vue')
                }
            ]
        },
    ]
})

export default router