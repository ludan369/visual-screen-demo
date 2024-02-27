<template>
    <div class="boxall" style="height: 30%;width: 30%;">
        <div :class="[props.title ? 'alltitle' : 'hidden']">
            <span :style="props.titleStyle">{{ props.title }}</span>
        </div>
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String,
  titleStyle: {
    type: Object as () => Record<string, any>,
    default: () => ({ color: 'white', 'padding-left': '10px' })
  }
});
</script>

<style scoped>
.hidden {
    display: none;
}
.boxall {
    /* background: rgba(0, 0, 0, 0.2); */
    background: rgba(6, 48, 109, .5);
    position: relative;
}

.alltitle {
    font-size: 20px;
    line-height: 50px;
    color: #fff;
    font-family: "微软雅黑";
    position: relative;
    padding-left: 10px;
    /* 默认左边距 */
    padding-top: 5px;
}

.alltitle::before {
    position: absolute;
    height: 50px;
    width: 100%;
    background: url(@/assets/images/icon/animate.gif) no-repeat bottom right;
    background-size: auto 100%;
    border-radius: 5px;
    content: "";
}
</style>
