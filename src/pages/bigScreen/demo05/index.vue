<template>
    <div class="main">
        <header-title class="header" title="数据可视化通用模版" height="50px" font-size="25px"></header-title>
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
            <div class="bar">
                <div class="barbox">
                    <ul class="clearfix">
                        <li class="pulll_left counter">{{ tweened.number.toFixed(0) }}</li>
                        <li class="pulll_left counter">{{ tweened.number.toFixed(0) }}</li>
                    </ul>
                </div>
                <div class="barbox2">
                    <ul class="clearfix">
                        <li class="pulll_left">实时收入情况 </li>
                        <li class="pulll_left">实时支出情况</li>
                    </ul>
                </div>
            </div>
            <div class="map">
                <div class="map1"><img src="../../../assets/images/map/lbx.png"></div>
                <div class="map2"><img src="../../../assets/images/map/jt.png"></div>
                <div class="map3"><img src="../../../assets/images/map/map.png"></div>
                <div class="map4" ref="map"></div>
            </div>
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
import { ref, onMounted,reactive,watch } from 'vue'
import gsap from 'gsap'
import * as echarts from "echarts"
import HeaderTitle from '@/pages/bigScreen/components/head/HeaderTitle.vue'
import BoxContent02 from '@/pages/bigScreen/components/box/BoxContent02.vue'
import options from '@/pages/bigScreen/demo05/options/options'
import China from '@/pages/chartsModules/json/China.json'

const number = ref(0)
const tweened = reactive({
  number: 12345678
})

watch(
  number,
  (n) => {
    gsap.to(tweened, { duration: 0.5, number: Number(n) || 0 })
  }
)

function getRandomEightDigitNumber() {
    let randomNum = Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000
    number.value = randomNum
}

const echarts1 = ref()
const echarts2 = ref()
const echarts31 = ref()
const echarts32 = ref()
const echarts33 = ref()
const echarts4 = ref()
const echarts5 = ref()
const echarts6 = ref()
const map = ref()

onMounted(() => {
    setInterval(getRandomEightDigitNumber, 5000)

    let chart1 = echarts.init(echarts1.value, null, { devicePixelRatio: 2 })
    chart1.setOption(options.echarts1)

    let chart2 = echarts.init(echarts2.value, null, { devicePixelRatio: 2 })
    chart2.setOption(options.echarts2)

    let chart31 = echarts.init(echarts31.value, null, { devicePixelRatio: 2 })
    chart31.setOption(options.echarts31)

    let chart32 = echarts.init(echarts32.value, null, { devicePixelRatio: 2 })
    chart32.setOption(options.echarts32)

    let chart33 = echarts.init(echarts33.value, null, { devicePixelRatio: 2 })
    chart33.setOption(options.echarts33)

    let chart4 = echarts.init(echarts4.value, null, { devicePixelRatio: 2 })
    chart4.setOption(options.echarts4)

    let chart5 = echarts.init(echarts5.value, null, { devicePixelRatio: 2 })
    chart5.setOption(options.echarts5)

    let chart6 = echarts.init(echarts6.value, null, { devicePixelRatio: 2 })
    chart6.setOption(options.echarts6)

    let mapChart = echarts.init(map.value, null, { devicePixelRatio: 2 });
    // @ts-ignore
    echarts.registerMap('china', China)
    mapChart.setOption(options.map)

    window.addEventListener("resize", function () {
        chart1.resize()
        chart2.resize()
        chart31.resize()
        chart32.resize()
        chart33.resize()
        chart4.resize()
        chart5.resize()
        chart6.resize()
        mapChart.resize()
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

@keyframes myfirst2 {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(359deg);
    }
}

@keyframes myfirst {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(-359deg);
    }
}


.center {
    float: left;
    position: relative;
    width: 40%;
    height: calc(100% - @header-height);
}

.map {
    position: absolute;
    z-index: 10;
    opacity: .8;
    width: 100%;
    height: 100%;
}


.map1,
.map2,
.map3 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.map1 {
    z-index: 2;
    animation: myfirst2 15s infinite linear;
    display: flex;
}

.map2 {
    z-index: 3;
    opacity: 0.2;
    animation: myfirst 10s infinite linear;
}

.map3 {
    z-index: 1;
}

.map1 img {
    width: 83%
}

.map2 img {
    width: 73%
}

.map3 img {
    width: 73%
}

.map4 {
    height: 100%;
    width: 100%;
    position: relative;
    z-index: 100;
    margin-top: 15%;
}

.bar {
    background: rgba(101, 132, 226, .1);
    margin-left: 2%;
    margin-right: 2%;
    margin-top: 2%;
}

.barbox li,
.barbox2 li {
    width: 50%;
    text-align: center;
    position: relative;
    z-index: 100;
}

.clearfix {
    list-style: none;
}

.pulll_left {
    float: left;
}

.pulll_right {
    float: right;
}

.barbox li:first-child:before {
    position: absolute;
    content: "";
    height: 50%;
    width: 1px;
    background: rgba(255, 255, 255, .2);
    right: 0;
    top: 25%;
}

.barbox {
    border: 1px solid rgba(25, 186, 139, .17);
    position: relative;
}

.barbox li {
    font-size: 40px;
    color: #ffeb7b;
    padding: 5px 0;
    font-family: electronicFont;
    font-weight: bold;
}

.barbox2 li {
    font-size: 15px;
    color: rgba(255, 255, 255, .7);
    padding-top: 5px;
}
</style>
