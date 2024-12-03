<template>
    <screen-adapter :width="1920" :height="1080">
        <div class="main">
            <header-title title="数据可视化系统数据分析通用模版"></header-title>
            <div class="mainbox">
                <ul>
                    <li>
                        <box-content title="排行信息" style="height:  calc(58% - 15px);margin-bottom: 15px;">
                            <!-- 50 = box的头部标题的40px+padding的10px -->
                            <div ref="echarts1" style="height: calc(100% - 50px);padding: 10px 10px 0px 10px"></div>
                        </box-content>
                        <box-content title="信息一览" style="height:  42%;">
                            <div ref="echarts2" style="height: calc(100% - 50px);padding: 10px 10px 0px 10px"> </div>
                        </box-content>
                    </li>
                    <li>
                        <box-content style="height:  calc(20% - 15px);margin-bottom: 15px;">
                            <ul class="row">
                                <li style="width: 50%;">
                                    <div class="num">
                                        <p>业绩总览</p>
                                        <h1><span>30500</span>万</h1>
                                    </div>
                                </li>
                                <li style="width: 50%;">
                                    <ul class="row">
                                        <li style="width:33.33333%;">
                                            <div class="pieTitle">
                                                标题1
                                            </div>
                                            <div ref="echarts3" class="piebox"></div>
                                        </li>
                                        <li style="width:33.33333%;">
                                            <div class="pieTitle">
                                                标题2
                                            </div>
                                            <div ref="echarts4" class="piebox"></div>
                                        </li>
                                        <li style="width:33.33333%;">
                                            <div class="pieTitle">
                                                标题3
                                            </div>
                                            <div ref="echarts5" class="piebox"></div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </box-content>
                        <box-content title="这是一个标题" style="height:  calc(38% - 15px);margin-bottom: 15px;">
                            <div ref="echarts6" style="height: calc(100% - 50px);padding: 10px 10px 0px 10px">
                            </div>
                        </box-content>
                        <box-content title="这是一个标题" style="height:  42%;">
                            <div ref="echarts7" style="height: calc(100% - 50px);padding: 10px 10px 0px 10px">
                            </div>
                        </box-content>
                    </li>
                    <li>
                        <box-content title="这是一个标题" style="height: calc(33.33% - 15px);margin-bottom: 15px;">
                            <div ref="echarts8" style="height: calc(100% - 50px);padding: 10px 10px 0px 10px">
                            </div>
                        </box-content>
                        <box-content title="这是一个标题" style="height: calc(33.33% - 15px);margin-bottom: 15px;">
                            <table border="0" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>字段1</th>
                                        <th>字段2</th>
                                        <th>字段3</th>
                                        <th>字段4</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(item, index) in tableData" :key="index">
                                        <td :title="item.col1">{{ item.col1 }}</td>
                                        <td :title="item.col2">{{ item.col2 }}</td>
                                        <td :title="item.col3">{{ item.col3 }}</td>
                                        <td :title="item.col4">{{ item.col4 }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </box-content>
                        <box-content title="这是一个标题" style="height: 33.33%;">
                            <div ref="echarts9" style="height: calc(100% - 50px);padding: 10px 10px 0px 10px">
                            </div>
                        </box-content>
                    </li>
                </ul>
            </div>
        </div>
    </screen-adapter>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue'
import * as echarts from "echarts"
import { options, echarts1Options, echarts2Options } from '@/pages/bigScreen/demo01/options/options'
import ScreenAdapter from '@/components/bigScreen/ScreenAdapter.vue'
import HeaderTitle from '@/pages/bigScreen/components/head/HeaderTitle.vue'
import BoxContent from '@/pages/bigScreen/components/box/BoxContent.vue'
import { echarts1Data, echarts2Data } from '@/pages/bigScreen/demo01/options/data.js'
import axios from '@/axios'

let tableData = reactive([
    { col1: '数据', col2: '数据', col3: '数据', col4: '数据' },
    { col1: '数据', col2: '数据', col3: '数据', col4: '数据' },
    { col1: '数据', col2: '数据', col3: '数据', col4: '数据' },
    { col1: '数据', col2: '数据', col3: '数据', col4: '数据' },
    { col1: '数据', col2: '数据', col3: '数据', col4: '数据' },
    { col1: '数据', col2: '数据', col3: '数据', col4: '数据' }
])

let echarts1 = ref()
let echarts2 = ref()
let echarts3 = ref()
let echarts4 = ref()
let echarts5 = ref()
let echarts6 = ref()
let echarts7 = ref()
let echarts8 = ref()
let echarts9 = ref()

onMounted(() => {
    let chart1 = echarts.init(echarts1.value);
    chart1.setOption(echarts1Options(echarts1Data))

    let chart2 = echarts.init(echarts2.value);
    chart2.setOption(echarts2Options(echarts2Data))

    let chart3 = echarts.init(echarts3.value);
    chart3.setOption(options.echarts3)

    let chart4 = echarts.init(echarts4.value);
    chart4.setOption(options.echarts4)

    let chart5 = echarts.init(echarts5.value);
    chart5.setOption(options.echarts5)

    let chart6 = echarts.init(echarts6.value);
    chart6.setOption(options.echarts6)

    let chart7 = echarts.init(echarts7.value);
    chart7.setOption(options.echarts7)

    let chart8 = echarts.init(echarts8.value);
    chart8.setOption(options.echarts8)

    let chart9 = echarts.init(echarts9.value);
    chart9.setOption(options.echarts9)

    window.addEventListener("resize", function () {
        chart1.resize()
        chart2.resize()
        chart3.resize()
        chart4.resize()
        chart5.resize()
        chart6.resize()
        chart7.resize()
        chart8.resize()
        chart9.resize()
    })
})
</script>

<style scoped>
.main {
    background: #000d4a url(@/assets/images/bg/bg01.jpg) center center;
    background-size: cover;
    color: #fff;
    width: 1920px;
    height: 1080px;
    font-family: "微软雅黑";
}

.mainbox {
    height: calc(100% - 110px);
    padding: 15px;
}

.mainbox>ul {
    height: 100%;
    list-style: none;
}

.mainbox>ul>li {
    float: left;
    height: 100%;
    width: 30%;
}

.mainbox>ul>li:nth-child(2) {
    padding-right: 15px;
    padding-left: 15px;
    width: calc(40% - 30px);
}

.row {
    height: 100%;
    list-style: none;
}

.row>li {
    float: left;
    height: 100%;
}

.num {
    padding-top: 30px;
    padding-left: 20px;
}

.num p {
    font-size: 25px;
}

.num h1 {
    height: calc(100%);
    display: flex;
    align-items: center;
    color: #fef000;
    font-weight: normal;
    letter-spacing: 2px;
    font-size: 45px;
    justify-content: center;
}

.num h1 span {
    font-size: 60px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}

.pieTitle {
    padding-top: 30px;
    align-items: center;
}

.piebox {
    height: calc(100% - 80px);
}

table {
    width: 100%;
    text-align: center;
    padding: 15px;
}

table th {
    font-size: 15px;
    background: rgba(0, 0, 0, .1);
}

table td {
    font-size: 15px;
    color: rgba(255, 255, 255, .6);
}

table th,
table td {
    border-bottom: 1px solid rgba(255, 255, 255, .1);
    padding: 6px 0;
}
</style>
