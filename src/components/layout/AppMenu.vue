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
