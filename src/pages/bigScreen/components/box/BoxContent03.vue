<template>
    <div class="box">
        <div class="tit"><span>{{ props.title }}</span>
            <p></p>
        </div>
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
const props = defineProps(['title'])
</script>

<style scoped>
.box {
    position: relative;
}

.tit {
    display: flex;
    align-items: flex-end;
}

.tit span {
    background: url(@/assets/images/box/line1.png) no-repeat bottom right;
    font-size: 20px;
    white-space: nowrap;
    padding-bottom: 10px;
    padding-right: 20px;
}

.tit p {
    background: url(@/assets/images/box/line2.png) no-repeat bottom right;
    width: 100%;
    height: 13px;
    margin-bottom: 5px;
    opacity: .5
}


</style>
