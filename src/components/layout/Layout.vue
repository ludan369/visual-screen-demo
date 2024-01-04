<template>
    <div class="common-layout">
        <el-container class="container">
            <!-- 侧边菜单栏 -->
            <el-aside class="aside" :style="{ 'width': (isCollapse ? '0px' : '200px') }">
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
                <!-- 数据展示区域 -->
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
import emitter from '@/utils/emitter'

let isCollapse = ref(false)

const toggle = (): void => {
    isCollapse.value = !isCollapse.value
    // 手动触发窗口大小的重新计算
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
