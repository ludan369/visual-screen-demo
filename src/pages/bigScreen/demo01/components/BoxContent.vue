<template>
    <div class="boxall">
        <div :class="[ props.title ? 'alltitle' : '' ]">
            {{ props.title }}
        </div>
        <slot></slot>
    </div>
</template>

<script setup lang="ts">

const props = defineProps(['title'])

</script>

<style scoped>
.boxall {
    background: rgba(6, 48, 109, .5);
    position: relative;
    margin-bottom: 6px;
    z-index: 10;
}

.alltitle {
    font-size: 20px;
    color: #fff;
    font-family: "微软雅黑";
    position: relative;
    padding-left: 45px;
    padding-top: 15px
}

.alltitle:before {
    position: absolute;
    height: 30px;
    width: 5px;
    background: #49bcf7;
    border-radius: 5px;
    content: "";
    left: 20px;
}
</style>
