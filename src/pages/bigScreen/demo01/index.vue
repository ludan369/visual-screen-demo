<template>
    <screen-adapter :width="1920" :height="1080">
        <div class="main">
            <!-- 头部标题 -->
            <header-title title="大数据可视化系统数据分析通用模版"></header-title>
            <div class="mainbox">
                <ul class="clearstyle">
                    <!-- 左边 -->
                    <li>
                        <box-content title="排行信息" style="height: calc(58% - 15px)">
                            <div ref="echarts1"
                                style="height: 500px;padding-left: 20px;padding-right: 20px;padding-top: 15px;">
                            </div>
                        </box-content>
                        <box-content title="信息一览" style="height: calc(42% - 6px)">
                            <div ref="echarts2"
                                style="height: 360px;padding-left: 20px;padding-right: 20px;padding-top: 15px;padding-bottom: 15px;">
                            </div>
                        </box-content>
                    </li>
                    <!-- 中间 -->
                    <li>
                        <box-content style="height: calc(20% - 15px)">
                            <ul class="clearstyle row">
                                <li style="width: 50%;">
                                    <div class="num">
                                        <p>业绩总览</p>
                                        <h1><span>30500</span>万</h1>
                                    </div>
                                </li>
                                <li style="width: 50%;">
                                    <ul class="clearstyle row">
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
                        <box-content title="趋势展示" style="height: calc(38% - 6px)">
                            <div ref="echarts6"
                                style="height: 300px;padding-left: 20px;padding-right: 20px;padding-top: 15px;padding-bottom: 15px;">
                            </div>
                        </box-content>
                        <box-content title="标题名称" style="height: calc(42% - 6px)">
                            <div ref="echarts7"
                                style="height: 320px;padding-left: 20px;padding-right: 20px;padding-top: 15px;padding-bottom: 15px;">
                            </div>
                        </box-content>
                    </li>
                    <!-- 右边 -->
                    <li>
                        <box-content title="标题名称" style="height: calc(33.33333% - 6px)">
                            <div ref="echarts8"
                                style="height: 250px;padding-left: 20px;padding-right: 20px;padding-top: 15px;">
                            </div>
                        </box-content>
                        <box-content title="数据表展示" style="height: calc(33.33333% - 6px)">
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
                        <box-content title="标题名称" style="height: calc(33.33333%  - 15px)">
                            <div ref="echarts9"
                                style="height: 250px;padding-left: 20px;padding-right: 20px;padding-top: 15px;">
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
import options from '@/pages/bigScreen/demo01/options/options'
import ScreenAdapter from '@/components/bigScreen/ScreenAdapter.vue'
import HeaderTitle from '@/pages/bigScreen/demo01/components/HeaderTitle.vue'
import BoxContent from '@/pages/bigScreen/demo01/components/BoxContent.vue'

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
    chart1.setOption(options.echarts1)

    let chart2 = echarts.init(echarts2.value);
    chart2.setOption(options.echarts2)

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

<style lang="less" scoped>
.clearstyle {
    list-style: none;
}

.main {
    background: #000d4a url(@/assets/images/bg/bg01.jpg) center center;
    background-size: cover;
    color: #fff;
    width: 1920px;
    height: 1080px;
    font-family: "微软雅黑";
}

.mainbox {
    padding: 0 6px 0 6px;
    height: calc(100% - 80px);
    width: 100%;
}

.mainbox>ul {
    height: 100%;
    width: 100%;
}

.mainbox>ul>li {
    float: left;
    padding: 6px 3px 0px 3px;
    height: 100%;
    width: calc(30% - 15px);
}

.mainbox>ul>li:nth-child(2) {
    width: 40%;
}

.row {
    height: 100%;
}

.row>li {
    float: left;
    height: 100%;
}

.num {
    margin-right: 0px;
}

.num p {
    padding: 20px 0px 10px 30px;
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
    text-align: center;
    color: white;
    font-size: 15px;
    padding: 25px 0px 10px 0px;
}

.piebox {
    height: calc(100% - 80px);
    position: relative;
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
