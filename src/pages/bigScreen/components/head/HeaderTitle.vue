<template>
    <div class="head" :style="data.style">
        <h1 :style="{ color: props.titleColor }">{{ props.title }}</h1>
    </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";


interface PropsInterface {
  title?: string,
  height?: string,
  fontSize?: string,
  titleColor?: string
}

const props = withDefaults(defineProps<PropsInterface>(), {
  title: '这是一个banner标题',
  height: '80px',
  fontSize: '32px',
  titleColor: '#fff'
})

let data = reactive({
    style: {
        height: props.height,
        'font-size': props.fontSize
    }
})

</script>

<style scoped>
.head {
    background: url('@/assets/images/head/head_bg01.png') no-repeat center center;
    width: 100%;
    display: flex; 
    justify-content: center; 
    align-items: center; 
    text-align: center; 
}

.head h1 {
    color: #fff;
    opacity: 0.9;
    letter-spacing: -1px;
    margin: 0; 
}
</style>
