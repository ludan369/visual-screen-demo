<template>
    <div class="head" :style="data.style">
        <h1>{{ props.title }}</h1>
    </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";


interface PropsInterface {
  title?: string,
  height?: string
}

const props = withDefaults(defineProps<PropsInterface>(), {
  title: '这是一个banner标题',
  height: '80px'
})

let data = reactive({
    style: {
        height: props.height
    }
})

</script>

<style scoped>
.head {
    background: url('@/assets/images/head/head_bg01.png') no-repeat center center;
    width: 100%;
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
