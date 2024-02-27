<template>
    <div class="con_div_main2">

        <div class="con_left">
            <box-content04 title="今日实时流量数据" :titleStyle="{ color: 'rgb(255, 185, 0)', 'padding-left': '10px' }"
                style="height: 25%;width: 100%;margin-bottom: 10px;">
                <div ref="echarts1" style="height: 100%;"></div>
            </box-content04>
            <box-content04 title="当日收入" :titleStyle="{ color: 'rgb(255, 185, 0)', 'padding-left': '10px' }"
                style="height:calc(35% - 10px);width: 100%;margin-bottom: 10px;">

            </box-content04>
            <box-content04 style="height: calc(40% - 10px);width: 100%;">
                <table class="table1" width="100%" border="0" cellspacing="0" cellpadding="0">
                    <thead>
                        <tr>
                            <th>字段1</th>
                            <th>字段2</th>
                            <th>字段3</th>
                            <th>字段4</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in scrollData" :key="index">
                            <td>{{ item.col1 }}</td>
                            <td>{{ item.col2 }}</td>
                            <td>{{ item.col3 }}</td>
                            <td>{{ item.col4 }}</td>
                        </tr>
                    </tbody>
                </table>
            </box-content04>
        </div>
        <div class="con_center">

        </div>
        <div class="con_right">
            <box-content04 title="转化率" :titleStyle="{ color: 'rgb(255, 185, 0)', 'padding-left': '10px' }"
                style="height: 20%;width: 100%;margin-bottom: 10px;">

            </box-content04>
            <box-content04 title="实时在线" :titleStyle="{ color: 'rgb(255, 185, 0)', 'padding-left': '10px' }"
                style="height:calc(35% - 10px);width: 100%;margin-bottom: 10px;">

            </box-content04>
            <box-content04 title="新增车辆" :titleStyle="{ color: 'rgb(255, 185, 0)', 'padding-left': '10px' }"
                style="height: calc(45% - 10px);width: 100%;">

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
import { getData } from '@/pages/bigScreen/demo07/utils/scrollData.ts'

let echarts1 = ref()
const scrollData = getData(6)

onMounted(() => {
    let chart1 = echarts.init(echarts1.value);
    chart1.setOption(options.echarts1)

    window.addEventListener("resize", function () {
        chart1.resize()
    })
})

</script>

<style lang="less" scoped>
@import url('../style/index.less');

.scroll {
    height: 100%;
    height: 100%;
    margin: 100px auto;
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
</style>
