<template>
    <div class="boxall">
        <div :class="[ props.title ? 'alltitle' : 'hidden' ]">
           <span style="padding-left: 10px;">{{ props.title }}</span>
        </div>
        <slot></slot>
    </div>
</template>

<script setup lang="ts">

const props = defineProps(['title'])

</script>

<style scoped>
.hidden {
    display: none;
}
.boxall {
    background: rgba(6, 48, 109, .5);
    position: relative;
}

.alltitle {
    font-size: 20px;
    color: #fff;
    font-family: "微软雅黑";
    position: relative;
    padding-left: 10px; /* 默认左边距 */
    padding-top: 10px;
}

.alltitle:before {
    position: absolute;
    height: 30px;
    width: 5px;
    background: #49bcf7;
    border-radius: 5px;
    content: "";
}
</style>
