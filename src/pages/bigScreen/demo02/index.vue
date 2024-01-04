<template>
    <screen-adapter :width="1920" :height="1080">
        <div class="main">
            <div class="mainbox">
                
            </div>
        </div>
    </screen-adapter>
</template>

<script setup lang="ts">
import ScreenAdapter from '@/components/bigScreen/ScreenAdapter.vue'

</script>

<style lang="less" scoped>
@import url(../../../assets/style/common.less);

.main {
    width: 1920px;
    height: 1080px;
}

.mainbox {
    border:1px solid #000;
    width: 10rem;
    height: 10rem;
}

</style>
