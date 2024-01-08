<template>
    <div class="logo">
        <slot name="collapseButton"></slot>
        <!-- <h1 style="margin: 5px;">VISUAL-SCREEN</h1> -->
    </div>
    <el-menu default-active="2" :collapse="props.isCollapse" :collapse-transition="false" @open="handleOpen"
        @close="handleClose" background-color="#ebf1f5" text-color="#606266" active-text-color="#2F74FF" class="menu"
        router>
        <template v-for="(item, index) in routes">
            <el-menu-item v-if="item.path === '/'" :index="item.path" :key="'item' + index">
                <el-icon>
                    <location />
                </el-icon>
                <span>{{ item.name }}</span>
            </el-menu-item>
            <el-sub-menu :index="item.path" v-if="item.children.length > 0" :key="index">
                <template #title>
                    <el-icon>
                        <location />
                    </el-icon>
                    <span>{{ item.meta!.title }}</span>
                </template>
                <template v-for="citem in item.children">
                    <el-menu-item :index="citem.name" :route="{ name: citem.name }">{{ citem.meta!.title }}</el-menu-item>
                </template>
            </el-sub-menu>
        </template>
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
console.log(routes)

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
