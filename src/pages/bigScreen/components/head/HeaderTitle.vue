<template>
    <div class="head">
        <h1>{{ props.title }}</h1>
    </div>
</template>

<script setup lang="ts">
const props = defineProps(['title'])
</script>

<style scoped>
.head {
    background: url(@/assets/images/head/head_bg01.png) no-repeat center center;
    width: 100%;
    height: 80px;
}

.head h1 {
    color: #fff;
    text-align: center;
    font-size: 35px;
    padding-top: 15px;
    opacity: 0.9;
    letter-spacing: -1px;
}

</style>
