<template>
    <div class="con_div_main2">

        <div class="con_left">
            <box-content04 title="今日实时流量数据" :titleStyle="{ color: 'rgb(255, 185, 0)', 'padding-left': '10px' }"
                style="height: 25%;width: 100%;margin-bottom: 10px;">
                <div ref="echarts1" style="height: 100%;"></div>
            </box-content04>
            <box-content04 title="当日收入" :titleStyle="{ color: 'rgb(255, 185, 0)', 'padding-left': '10px' }"
                style="height:calc(35% - 10px);width: 100%;margin-bottom: 10px;">
                <div ref="echarts7" style="height: 100%;"></div>
            </box-content04>
            <box-content04 style="height: calc(40% - 10px);width: 100%;">
                <p class="pth"> <span>序号</span> <span>地区</span> <span>充值金额</span> <span>时间</span> </p>
                <div class="wrap">
                    <ul>
                        <vue3-seamless-scroll :list="scrollData" class="scroll" :step="0.2">
                            <li v-for="(item, index) in scrollData" :key="index">
                                <p> <span><i>{{ index }}</i></span>
                                    <span>{{ item.col1 }}</span>
                                    <span>{{ item.col2 }}</span>
                                    <span> {{ item.col3 }}</span>
                                </p>
                            </li>
                        </vue3-seamless-scroll>
                    </ul>
                </div>
            </box-content04>
        </div>
        <div class="con_center">
            <div ref="echarts6" style="height: 100%;"></div>
        </div>
        <div class="con_right">
            <box-content04 title="转化率" :titleStyle="{ color: 'rgb(255, 185, 0)', 'padding-left': '10px' }"
                style="height: 20%;width: 100%;margin-bottom: 10px;">
                <ul class="tqdb">
                    <li>
                        <div ref="echarts3" style="height: 100%;"></div>
                        <h3>车辆比</h3>
                    </li>
                    <li>
                        <div ref="echarts4" style="height: 100%;"></div>
                        <h3>流量比</h3>
                    </li>
                    <li>
                        <div ref="echarts5" style="height: 100%;"></div>
                        <h3>新增比</h3>
                    </li>
                </ul>
                
            </box-content04>
            <box-content04 title="实时在线" :titleStyle="{ color: 'rgb(255, 185, 0)', 'padding-left': '10px' }"
                style="height:calc(35% - 10px);width: 100%;margin-bottom: 10px;">
                <div ref="echarts2" style="height: 100%;"></div>
            </box-content04>
            <box-content04 title="新增车辆" :titleStyle="{ color: 'rgb(255, 185, 0)', 'padding-left': '10px' }"
                style="height: calc(45% - 10px);width: 100%;">
                <div ref="echarts8" style="height: 100%;"></div>
            </box-content04>
        </div>

    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as echarts from "echarts"
import { Vue3SeamlessScroll } from "vue3-seamless-scroll"
import BoxContent04 from '@/pages/bigScreen/components/box/BoxContent04.vue'
import options from '@/pages/bigScreen/demo07/options/options2'
import { getData } from '@/pages/bigScreen/demo07/utils/scrollData'

const scrollData = getData(20)
let echarts1 = ref()
let echarts2 = ref()
let echarts3 = ref()
let echarts4 = ref()
let echarts5 = ref()
let echarts6 = ref()
let echarts7 = ref()
let echarts8 = ref()

onMounted(() => {
    let chart1 = echarts.init(echarts1.value);
    chart1.setOption(options.echarts1)

    let chart2 = echarts.init(echarts2.value);
    chart2.setOption(options.echarts2)

    let chart3 = echarts.init(echarts3.value);
    chart3.setOption(options.echarts3)

    let chart4 = echarts.init(echarts4.value);
    chart4.setOption(options.echarts3)

    let chart5 = echarts.init(echarts5.value);
    chart5.setOption(options.echarts3)

    let chart6 = echarts.init(echarts6.value);
    chart6.setOption(options.echarts6)

    let chart7 = echarts.init(echarts7.value);
    chart7.setOption(options.echarts7)

    let chart8 = echarts.init(echarts8.value);
    chart8.setOption(options.echarts8)

    window.addEventListener("resize", function () {
        chart1.resize()
        chart2.resize()
        chart3.resize()
        chart4.resize()
        chart5.resize()
        chart6.resize()
        chart7.resize()
        chart8.resize()
    })
})

</script>

<style lang="less" scoped>
@import url('../style/index.less');

.scroll {
    height: 100%;
    height: 100%;
    margin: 5px auto;
    overflow: hidden;
}

.con_div_main2 {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
}

.con_left {
    width: 30%;
    height: 100%;
    float: left;
}

.con_center {
    width: 40%;
    height: 100%;
    float: left;
}

.con_right {
    width: 30%;
    height: 100%;
    float: right;
}

.table1 th {
    border-bottom: 1px solid #407abd;
    text-align: center;
    font-size: 14px;
    padding: 10px 0;
    color: rgba(255, 255, 255, .8)
}

.table1 td {
    border-bottom: 1px dotted#407abd;
    font-size: 14px;
    text-align: center;
    padding: 10px 0;
    color: rgba(255, 255, 255, 1)
}

.table1 tr:last-child td {
    border: none;
}

.table1 td span {
    font-size: 12px;
    transform: scale(.8);
    display: inline-block;
}

.wrap {
    height: 100%;
    overflow: hidden;
}

.wrap li {}

.wrap li p {
    font-size: 0;
    line-height: 25px;
    height: 100%;
}

.wrap li:nth-child(even) p {
    background: rgba(255, 255, 255, .05)
}

.wrap li p span {
    color: #44d3e4;
    display: inline-block;
    text-align: center;
    font-size: 12px;
}

.wrap li p span:nth-child(1),
.pth span:nth-child(1) {
    width: 10%
}

.wrap li p span:nth-child(2),
.pth span:nth-child(2) {
    width: 25%;
    color: #3d9fd2;
}

.wrap li p span:nth-child(3),
.pth span:nth-child(3) {
    width: 20%
}

.wrap li p span:nth-child(4),
.pth span:nth-child(4) {
    width: 45%
}

.pth {
    font-size: 0;
    padding: 5px 0;
}

.pth span {
    color: #fff !important;
    opacity: .8;
    display: inline-block;
    font-size: 15px;
    text-align: center;
}

.wrap li p span i {
    background: #f18f3c;
    width: 16px;
    height: 16px;
    border-radius: 20px;
    line-height: 16px;
    text-align: center;
    display: inline-block;
    font-style: normal;
    color: #fff;
}

.tqdb {
    height: 100%;
    width: 100%;
    height: calc(100% - 50px);
}

.tqdb li {
    height: 78%;
    float: left;
    width: 33%;
    text-align: center;
    list-style: none;
}

.tqdb li div {
}

.tqdb li h3 {
    font-size: 13px;
    color: #fff;
}
</style>
