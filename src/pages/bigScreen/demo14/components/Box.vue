<template>
    <div class="box">
        <div class="tit">{{ props.title }}</div>
        <div class="boxnav" :style="mergedStyle">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, reactive } from "vue"
import type { CSSProperties } from "vue"

interface PropsInterface {
  title?: string,
  height: string,
  width: string,
  customStyle?: CSSProperties
}

const props = withDefaults(defineProps<PropsInterface>(), {
  title: '这是一个box标题',
  customStyle: () => ({} as CSSProperties)
})

let data = reactive({
    style: {
        height: props.height,
        width: props.width
    }
})

const mergedStyle = computed(() => ({
    ...data.style,
    ...props.customStyle
}))
</script>

<style scoped>
.boxnav{padding: 10px;}
.box{ border:1px solid rgba(7,118,181,.5); box-shadow:inset 0 0 10px rgba(7,118,181,.4); position: relative;}
.tit{ padding: 10px 10px 10px 25px;border-bottom:1px solid rgba(7,118,181,.7);font-size: 16px; font-weight: 500; position: relative;}
.tit:before,.tit01:before{position: absolute; content: ""; width: 6px; height: 6px; background: rgba(22,214,255,.9);box-shadow: 0 0 5px rgba(22,214,255,.9); border-radius: 10px; left: 10px; top: 18px;}

.tit:after,.box:before{ width: 100%; height: 1px; content: ""; position: absolute; left: 0; bottom:-1px; background:linear-gradient(to right,#076ead,#4ba6e0,#076ead); box-shadow: 0 0 5px rgba(131,189,227,1); opacity: .6}
.box:before{top: -1px;}
</style>
