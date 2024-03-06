import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import { RouterView } from 'vue-router'

let router = createRouter({
    history: createWebHashHistory(),
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
                    meta: {
                        title: 'demo01', icon: 'location',
                        desc: {
                            imgSrc: './images/preview/demo01.png',
                            tags: ['柱状图', '折线图', '饼图', 'Table']
                        }
                    },
                    component: () => import('@/pages/bigScreen/demo01/index.vue')
                },
                {
                    name: 'demo02',
                    path: 'demo02',
                    meta: {
                        title: 'demo02', icon: 'location',
                        desc: {
                            imgSrc: './images/preview/demo02.png',
                            tags: ['柱状图', '折线图', '饼图', 'Table']
                        }
                    },
                    component: () => import('@/pages/bigScreen/demo02/index.vue')
                },
                {
                    name: 'demo03',
                    path: 'demo03',
                    meta: {
                        title: 'demo03', icon: 'location',
                        desc: {
                            imgSrc: './images/preview/demo03.png',
                            tags: ['粒子特效', '折线图', '饼图', '滚动Table']
                        }
                    },
                    component: () => import('@/pages/bigScreen/demo03/index.vue')
                },
                {
                    name: 'demo04',
                    path: 'demo04',
                    meta: {
                        title: 'demo04', icon: 'location',

                        desc: {
                            imgSrc: './images/preview/demo04.png',
                            tags: ['地图', '雷达图', '折线图', '横向柱状图']
                        }
                    },
                    component: () => import('@/pages/bigScreen/demo04/index.vue')
                },
                {
                    name: 'demo05',
                    path: 'demo05',
                    meta: {
                        title: 'demo05', icon: 'location',
                        desc: {
                            imgSrc: './images/preview/demo05.png',
                            tags: ['地图', '折线图', '柱状图']
                        }
                    },
                    component: () => import('@/pages/bigScreen/demo05/index.vue')
                },
                {
                    name: 'demo06',
                    path: 'demo06',
                    meta: {
                        title: 'demo06', icon: 'location',
                        desc: {
                            imgSrc: './images/preview/demo06.png',
                            tags: ['地图', '地图下钻', '柱状图', '圆形图']
                        }
                    },
                    component: () => import('@/pages/bigScreen/demo06/index.vue')
                },
                {
                    name: 'demo07',
                    path: 'demo07',
                    meta: {
                        title: 'demo07', icon: 'location',
                        desc: {
                            imgSrc: './images/preview/demo07.png',
                            tags: ['百度地图', '圆形图', '菜单切换', '3D柱状图']
                        }
                    },
                    component: () => import('@/pages/bigScreen/demo07/index.vue')
                },
                {
                    name: 'demo08',
                    path: 'demo08',
                    meta: {
                        title: 'demo08', icon: 'location',
                        desc: {
                            imgSrc: './images/preview/demo07.png',
                            tags: ['']
                        }
                    },
                    component: () => import('@/pages/bigScreen/demo08/index.vue')
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
                {
                    name: 'BaiduMapDemo02',
                    path: 'BaiduMapDemo02',
                    meta: { title: 'BaiduMapDemo02-百度地图', icon: 'location' },
                    component: () => import('@/pages/chartsModules/BaiduMapDemo02.vue')
                },
            ]
        },
        { path: '/', redirect: { name: 'home' } }
    ]
})

export default router