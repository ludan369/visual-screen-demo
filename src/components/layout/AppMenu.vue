<template>
    <div class="logo">
        <slot name="collapseButton"></slot>
        <!-- <h1 style="margin: 15px;">VISUAL-SCREEN</h1> -->
    </div>
    <el-menu default-active="2" :collapse="props.isCollapse" :collapse-transition="false" @open="handleOpen"
        @close="handleClose" background-color="#ebf1f5" text-color="#606266" active-text-color="#2F74FF" class="menu"
        router>
        <template v-for="(item, index) in routes">
            <!-- 处理首页 -->
            <el-menu-item v-if="item.path === '/home'" :index="item.path">
                <el-icon>
                    <location />
                </el-icon>
                <span>{{ item.name }}</span>
            </el-menu-item>
            <!-- 处理子菜单 -->
            <sub-menu-component :route="item"></sub-menu-component>
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
import {routes} from '@/router'
import SubMenuComponent from '@/components/layout/SubMenuComponent.vue'

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
