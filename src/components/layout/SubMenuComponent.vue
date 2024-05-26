<template>
    <el-sub-menu :index="route!.path" v-if="route!.children && route!.children.length > 0">
        <template #title>
            <el-icon>
                <location />
            </el-icon>
            <span>{{ route!.meta.title }}</span>
        </template>
        <template v-for="citem in route!.children">
            <sub-menu-component v-if="citem.children && citem.children.length > 0" :route="citem"></sub-menu-component>
            <el-menu-item v-else :index="citem.name" :route="{ name: citem.name }">
                {{ citem.meta.title }}
            </el-menu-item>
        </template>
    </el-sub-menu>
</template>

<script setup lang="ts">
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
    Fold
} from '@element-plus/icons-vue'
import SubMenuComponent from './SubMenuComponent.vue'

const props = defineProps({
    route: Object
})
</script>