<template>
    <div :style="data.style">
        <!--左上边框-->
        <div class="t_line_box">
            <i class="t_l_line"></i>
            <i class="l_t_line"></i>
        </div>
        <!--右上边框-->
        <div class="t_line_box">
            <i class="t_r_line"></i>
            <i class="r_t_line"></i>
        </div>
        <!--左下边框-->
        <div class="t_line_box">
            <i class="l_b_line"></i>
            <i class="b_l_line"></i>
        </div>
        <!--右下边框-->
        <div class="t_line_box">
            <i class="r_b_line"></i>
            <i class="b_r_line"></i>
        </div>
        <div class="main_title" id="title1">
            <img :src=props.titleImgSrc>
            {{ props.title }}
        </div>
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { reactive } from "vue"
import t_7 from '@/pages/bigScreen/demo10/assets/t_7.png'


interface PropsInterface {
    height?: string,
    width?: string,
    titleImgSrc?: string,
    title?:string
}

const props = withDefaults(defineProps<PropsInterface>(), {
    height: '100px',
    width: '100px',
    titleImgSrc: t_7,
    title:'示例标题示例标题示例标题'
})

let data = reactive({
    style: {
        height: props.height,
        width: props.width
    }
})
</script>

<style scoped>
.l_t_line {
    width: 5px;
    height: 24px;
    left: -3px;
    top: -3px;
}

.t_l_line {
    height: 5px;
    width: 26px;
    left: -3px;
    top: -3px;
}

.t_line_box {
    position: absolute;
    width: 100%;
    height: 100%;
}

.t_line_box i {
    background-color: #4788fb;
    box-shadow: 0px 0px 10px #4788fb;
    position: absolute;
}

.t_r_line {
    height: 5px;
    width: 26px;
    right: -3px;
    top: -3px;
}

.r_t_line {
    width: 5px;
    height: 24px;
    right: -3px;
    top: -3px;
}

.l_b_line {
    width: 5px;
    height: 24px;
    left: -3px;
    bottom: -3px;
}

.b_l_line {
    height: 5px;
    width: 26px;
    left: -3px;
    bottom: -3px;
}

.r_b_line {
    width: 5px;
    height: 24px;
    right: -3px;
    bottom: -3px;
}

.b_r_line {
    height: 5px;
    width: 26px;
    right: -3px;
    bottom: -3px;
}

.main_title {
    width: 180px;
    height: 35px;
    line-height: 33px;
    background-color: #2C58A6;
    border-radius: 18px;
    position: absolute;
    top: -17px;
    left: 50%;
    margin-left: -90px;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    box-sizing: border-box;
    padding-left: 45px;
    z-index: 1000;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}


.main_title img {
    position: absolute;
    top: 8px;
    left: 20px;
}

#title1{
    width: 340px;
    left: 32%;
}
</style>
