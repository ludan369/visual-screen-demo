<template>
  <!-- 屏幕自适应组件 -->
  <div :style="[data.isOpenZoom ? data.style : '']" :class="[data.isOpenZoom ? 'ScreenAdapter' : '']"
    v-if="data.isRouterAlive">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { reactive, nextTick, onMounted, onUnmounted } from "vue"
import emitter from '@/utils/emitter'

interface PropsInterface {
  width?: number,
  height?: number
}

// 父组件的传值
const props = withDefaults(defineProps<PropsInterface>(), {
  width: 1920,
  height: 1080
})

const data = reactive({
  style: {
    width: props.width + 'px',
    height: props.height + 'px',
    transform: "scale(1)",
  },
  isOpenZoom: true,
  isRouterAlive: true
})

function debounce(fn: Function, delay: number): () => void {
  let timer: NodeJS.Timeout
  return function (...args: any[]): void {
    if (timer) clearTimeout(timer)
    timer = setTimeout(
      () => {
        typeof fn === 'function' && fn.apply(null, args)
        clearTimeout(timer)
      },
      delay > 0 ? delay : 100
    )
  }
}

// Layout的mitt
let mittScreenMsgData = reactive({
  widthAdapter: 200,
  heightAdapter: 0
})

// 跟随Layout.vue的toggle()缩放大小进行重新的计算
emitter.on('mitt-screen-adapter', (isCollapse: any) => {
  if (isCollapse) {
    mittScreenMsgData.widthAdapter = 0
  } else {
    mittScreenMsgData.widthAdapter = 200
  }
})

// 获取放大缩小比例
function getScale() {
  let widthAdapter = mittScreenMsgData.widthAdapter
  let heightAdapter = mittScreenMsgData.heightAdapter
  const currentWidth = document.body.clientWidth - widthAdapter
  const currentHeight = document.body.clientHeight - heightAdapter
  const w = currentWidth / props.width;
  const h = currentHeight / props.height;
  return w + "," + h;
}

// 设置比例
function setScale() {
  if (!data.isOpenZoom) {
    return;
  }
  data.style.transform =
    "scale(" + getScale() + ")";
}


function reload() {
  data.isRouterAlive = false;
  console.log("------screenAdapter页面重新加载-------");
  nextTick(() => {
    data.isRouterAlive = true;
  })
}

onMounted(() => {
  if (!data.isOpenZoom) {
    return;
  }
  setScale()
  window.onresize = debounce(setScale, 1000);
})

onUnmounted(() => {
  emitter.off('mitt-screen-adapter')
})
</script>

<style scoped>
.ScreenAdapter {
  position: fixed;
  transform-origin: left top;
}
</style>
