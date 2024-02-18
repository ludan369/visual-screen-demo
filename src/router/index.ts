import { createRouter, createWebHistory } from 'vue-router'
import { RouterView } from 'vue-router'

let router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'home',
            path: '/home',
            meta: { title: '首页', icon: 'Fold' },
            component: () => import('@/pages/home/index.vue')
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
                },
                {
                    name: 'demo05',
                    path: 'demo05',
                    meta: { title: 'demo05', icon: 'location' },
                    component: () => import('@/pages/bigScreen/demo05/index.vue')
                },
                {
                    name: 'demo06',
                    path: 'demo06',
                    meta: { title: 'demo06', icon: 'location' },
                    component: () => import('@/pages/bigScreen/demo06/index.vue')
                },
                {
                    name: 'demo07',
                    path: 'demo07',
                    meta: { title: 'demo07', icon: 'location' },
                    component: () => import('@/pages/bigScreen/demo07/index.vue')
                },
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
                {
                    name: 'mapDemo01',
                    path: 'mapDemo01',
                    meta: { title: 'mapDemo01-基础地图', icon: 'location' },
                    component: () => import('@/pages/chartsModules/MapDemo01.vue')
                },
            ]
        },
        { path: '/', redirect: { name: 'home' }}
    ]
})

export default router