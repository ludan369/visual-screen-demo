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
                },
                {
                    name: 'demo04',
                    path: 'demo04',
                    meta: { title: 'demo04', icon: 'location' },
                    component: () => import('@/pages/bigScreen/demo04/index.vue')
                }
            ]
        },
        {
            name: 'chartsModules',
            path: '/chartsModules',
            meta: { title: '模块组件demo', icon: 'Fold' },
            component: RouterView,
            children: [
                {
                    name: 'scrollDemo',
                    path: 'scrollDemo',
                    meta: { title: 'scrollDemo-行数据滚动', icon: 'location' },
                    component: () => import('@/pages/chartsModules/ScrollDemo.vue')
                },
            ]
        }
    ]
})

export default router