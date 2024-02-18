<template>
    <div class="main">
        <div class="header">
            <div class="nav left">
                <ul>
                    <li :class="{ 'nav_active': activeClass === 'home' }">
                        <a @click="togglePage('home')">首页</a>
                    </li>
                    <li :class="{ 'nav_active': activeClass === 'menu1' }">
                        <a @click="togglePage('menu1')">菜单一</a>
                    </li>
                    <li :class="{ 'nav_active': activeClass === 'menu2' }">
                        <a @click="togglePage('menu2')">菜单二</a>
                    </li>
                </ul>
            </div>
            <div class="header_center left">
                <h2><strong>xx区智慧旅游综合服务平台</strong></h2>
                <p class="color_font"><small>Comprehensive service platform for smart tourism</small></p>
            </div>
        </div>
    </div>
</template>
``
<script setup lang="ts">
import { ref } from 'vue'
let activeClass = ref('home');

function togglePage(componentName: string) {
    activeClass.value = componentName;
}

</script>

<style lang="less" scoped>
@header-height: 7%;

.left {
    float: left;
}

.right {
    float: right;
}

.main {
    height: 100%;
    width: 100%;
    background-color: #081832;
}

.header {
    width: 100%;
    height: @header-height;
    background-color: #030829;
}

.nav {
    width: 35%;
}

.nav>ul {}

.nav>ul>li {
    display: inline-block;
    width: 120px;
    text-align: center;
    height: 50px;
    position: relative;
    line-height: 50px;
    margin-top: 15px;
    box-sizing: border-box;
    border-radius: 5px;
}

.nav>ul>li:hover {
    box-shadow: -10px 0px 15px #034c6a inset,
        0px -10px 15px #034c6a inset,
        10px 0px 15px #034c6a inset,
        0px 10px 15px #034c6a inset;
    cursor: pointer;
    box-sizing: border-box;
}

.nav>ul>li>a {
    color: #ffffff;
    font-size: 14px;
}

.nav_active {
    border-bottom: 4px solid #4b8df8;
    box-shadow: -10px 0px 15px #034c6a inset,
        0px -10px 15px #034c6a inset,
        10px 0px 15px #034c6a inset,
        0px 10px 15px #034c6a inset;
    box-sizing: border-box;
}
.header_center{
    width: 35%;
    margin: 0px auto;
    color: #FFFFff;
    text-align: center;
    height: 80px;
    background-image: url(@/assets/images/head/logoBg.png);
    background-size: 100% 100%;
    font-family: "微软雅黑"!important;
}

</style>
