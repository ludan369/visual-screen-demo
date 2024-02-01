<template>
    <div class="main">
        <header-title class="header" title="大数据分析通用模版" height="50px" font-size="25px"></header-title>
        <div class="left">
            <box-content02 title="这是一个标题" style="height: 32%;margin-top: 2%;">
                <div ref="echarts1" style="height: 100%;"></div>
            </box-content02>
            <box-content02 title="这是一个标题" style="height: 32%;margin-top: 3%;">
                <div ref="echarts2" style="height: 100%;"></div>
            </box-content02>
            <box-content02 title="" style="height: 30%; margin-top: 3%;">
                <div style="display: flex;height: 100%;padding: 2% 2% 0 2%;">
                    <div ref="echarts31" class="pie"></div>
                    <div ref="echarts32" class="pie"></div>
                    <div ref="echarts33" class="pie"></div>
                </div>
            </box-content02>
        </div>

        <div class="center">

        </div>

        <div class="right">
            <box-content02 title="这是一个标题" style="height: 32%;margin-top: 2%;">
                <div ref="echarts4" style="height: 100%;"></div>
            </box-content02>
            <box-content02 title="这是一个标题" style="height: 32%;margin-top: 3%;">
                <div ref="echarts5" style="height: 100%;"></div>
            </box-content02>
            <box-content02 title="这是一个标题" style="height: 30%;margin-top: 3%;">
                <div ref="echarts6" style="height: 100%;"></div>
            </box-content02>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as echarts from "echarts"
import HeaderTitle from '@/pages/bigScreen/components/head/HeaderTitle.vue'
import BoxContent02 from '@/pages/bigScreen/components/box/BoxContent02.vue'
import options from '@/pages/bigScreen/demo05/options/options'

const echarts1 = ref()
const echarts2 = ref()
const echarts31 = ref()
const echarts32 = ref()
const echarts33 = ref()
const echarts4 = ref()
const echarts5 = ref()
const echarts6 = ref()

onMounted(() => {
    let chart1 = echarts.init(echarts1.value, null, { devicePixelRatio: 10 })
    chart1.setOption(options.echarts1)

    let chart2 = echarts.init(echarts2.value, null, { devicePixelRatio: 10 })
    chart2.setOption(options.echarts2)

    let chart31 = echarts.init(echarts31.value, null, { devicePixelRatio: 10 })
    chart31.setOption(options.echarts31)

    let chart32 = echarts.init(echarts32.value, null, { devicePixelRatio: 10 })
    chart32.setOption(options.echarts32)

    let chart33 = echarts.init(echarts33.value, null, { devicePixelRatio: 10 })
    chart33.setOption(options.echarts33)

    let chart4 = echarts.init(echarts4.value, null, { devicePixelRatio: 10 })
    chart4.setOption(options.echarts4)

    let chart5 = echarts.init(echarts5.value, null, { devicePixelRatio: 10 })
    chart5.setOption(options.echarts5)

    let chart6 = echarts.init(echarts6.value, null, { devicePixelRatio: 10 })
    chart6.setOption(options.echarts6)

    window.addEventListener("resize", function () {
        chart1.resize()
        chart2.resize()
        chart31.resize()
        chart32.resize()
        chart33.resize()
        chart4.resize()
        chart5.resize()
        chart6.resize()
    })
})
</script>

<style lang="less" scoped>
@font-face {
    font-family: electronicFont;
    src: url(@/assets/fonts/DS-DIGIT.TTF)
}

@header-height: 50px;

.main {
    background: #000d4a url(@/assets/images/bg/bg03.jpg) center center;
    background-size: cover;
    color: #fff;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.header {
    background: url('@/assets/images/head/head_bg02.png') no-repeat center center;
}

.header-time {
    float: right;
    width: 48%;
    line-height: 70px;
    float: right;
    text-align: right;
    padding-right: 20px;
    color: #fff;
}

.left {
    float: left;
    width: 30%;
    height: calc(100% - @header-height);
}

.center {
    float: left;
    width: 40%;
    height: calc(100% - @header-height);
}

.right {
    float: left;
    width: 30%;
    height: calc(100% - @header-height);
}

.pie {
    float: left;
    width: 33%;
    height: 95%;
}
</style>
