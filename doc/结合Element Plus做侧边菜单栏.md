# 结合Element Plus做侧边菜单栏

## 需求说明

- 页面左边展示菜单信息
- 菜单栏可打开和收起，其中按钮固定在特定可视区域，这样可以方便点击使用，在收起的时候，侧边栏为0px，打开为200px
- 使用路由进行跳转

![动画](/doc/assets/动画.gif)

## 安装Element Plus、router、mitt

```shell
npm install element-plus --save
npm -i mitt
npm i vue-router
```

## main.ts文件中引入Element Plus

```typescript
import {createApp} from 'vue'
import App from './App.vue'
// 路由信息
import router from './router'
// ElementPlus 和 其 css文件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(router)
app.use(ElementPlus)


app.mount('#app')
```

## Layout.vue的编写-侧边栏

```html
<template>
    <div class="common-layout">
        <el-container class="container">
            <!-- 侧边菜单栏 -->
            <el-aside class="aside" :style="{ 'width': (isCollapse ? '0px' : '200px') }">
                 <!-- 引入菜单模块 -->
                <app-menu :isCollapse="isCollapse">
                    <template #collapseButton>
                        <el-affix position="top" :offset="10">
                            <el-button :text ="true" @click="toggle">
                                <el-icon :size="25">
                                    <fold />
                                </el-icon>
                            </el-button>
                        </el-affix>
                    </template>
                </app-menu>
            </el-aside>
            <el-container>
                <!-- 数据展示区域 也是菜单点击后，路由的显示区域-->
                <el-main class="content">
                    <router-view />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup lang="ts">
import { ref, onUnmounted } from 'vue'
import { RouterView } from 'vue-router'
import { Fold } from '@element-plus/icons-vue'
import AppMenu from '@/components/layout/AppMenu.vue'
// 要使用mitt的话，直接引入就好
import emitter from '@/utils/emitter'

// 默认为打开
let isCollapse = ref(false)

// 收起打开的函数
const toggle = (): void => {
    isCollapse.value = !isCollapse.value
    // 手动触发窗口大小的重新计算，在这里做重新计算是因为ScreenAdapter.vue适配器使用的是窗口的总体高度
    // 需要手工计算一下，减去侧边栏的大小，这里使用的emitter来告诉screenAdapter,侧边栏的状态
    // emitter的安装使用可以看：mitt的安装使用.md
    emitter.emit('mitt-screen-adapter', isCollapse.value)
    let myEvent = new Event('resize');
    window.dispatchEvent(myEvent);
}

onUnmounted(() => {
    emitter.off('mitt-screen-adapter')
})
</script>

<style scoped>
.container {
    height: 100vh;

    .aside {
        overflow: hidden;
        box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
            6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
            12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
            22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
            41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
            100px 100px 80px rgba(0, 0, 0, 0.07);
    }

    .header {
        background: #ebf1f5;
        height: 50px;
        box-shadow:
            8.7px 9.2px 2.6px rgba(0, 0, 0, 0.023),
            18.5px 19.6px 6.3px rgba(0, 0, 0, 0.025),
            29.9px 31.7px 11.9px rgba(0, 0, 0, 0.024),
            44.2px 46.8px 21.2px rgba(0, 0, 0, 0.023),
            64.1px 67.9px 39.7px rgba(0, 0, 0, 0.028),
            100px 106px 95px rgba(0, 0, 0, 0.07);
    }

    .content {
        padding: 0;
        margin: 0;
    }
}
</style>
```

## AppMenu.vue的编写-菜单栏目

```typescript
<template>
    <div class="logo">
        <slot name="collapseButton"></slot>
        <!-- <h1 style="margin: 5px;">VISUAL-SCREEN</h1> -->
    </div>
    <el-menu default-active="2" :collapse="props.isCollapse" :collapse-transition="false" @open="handleOpen"
        @close="handleClose" background-color="#ebf1f5" text-color="#606266" active-text-color="#2F74FF" class="menu"
        router>
        <el-menu-item :route="{ name: 'home' }" index="0-1">
            <el-icon>
                <location />
            </el-icon>
            <span>首页</span>
        </el-menu-item>
        <el-sub-menu index="1">
            <template #title>
                <el-icon>
                    <location />
                </el-icon>
                <span>大屏demo</span>
            </template>
            <el-menu-item :route="{ name: 'demo01' }" index="1-1">demo01</el-menu-item>
            <el-menu-item :route="{ name: 'demo02' }" index="1-2">demo02</el-menu-item>
        </el-sub-menu>
    </el-menu>
</template>

<script setup lang="ts">
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
    Fold
} from '@element-plus/icons-vue'
import router from '@/router';

let routes = router.getRoutes()

const props = defineProps(['isCollapse'])
const handleOpen = (key: string, keyPath: string[]) => {
}
const handleClose = (key: string, keyPath: string[]) => {
}
</script>

<style scoped>
.logo {
    height: 50px;
    background: #e1eaf4;
    display: flex;
    flex-direction: row;
}

.menu {
    min-height: calc(100vh - 50px);
}
</style>
```

## 结合路由进行菜单点击的转发