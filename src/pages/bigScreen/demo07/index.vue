<template>
    <div class="main">
        <div class="header">
            <div class="nav left">
                <ul>
                    <li :class="{ 'nav_active': activeClass === 'Home' }">
                        <a @click="togglePage('Home')">首页</a>
                    </li>
                    <li :class="{ 'nav_active': activeClass === 'Menu01' }">
                        <a @click="togglePage('Menu01')">菜单一</a>
                    </li>
                    <li :class="{ 'nav_active': activeClass === 'Menu02' }">
                        <a @click="togglePage('Menu02')">菜单二</a>
                    </li>
                </ul>
            </div>
            <div class="header_center left">
                <h2><strong>xx区智慧旅游综合服务平台</strong></h2>
                <p class="color_font"><small>Comprehensive service platform for smart tourism</small></p>
            </div>
        </div>

        <div class="con_div">
            <component :is="tabs[activeClass]" ></component>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Home from '@/pages/bigScreen/demo07/components/Home.vue'
import Menu01 from '@/pages/bigScreen/demo07/components/Menu01.vue'
import Menu02 from '@/pages/bigScreen/demo07/components/Menu02.vue'

const tabs:any = {Home,Menu01,Menu02}

let activeClass = ref('Home')

function togglePage(componentName: string) {
    activeClass.value = componentName
}

</script>

<style lang="less" scoped>
@import url('./style/index.less');
</style>
