<template>
    <div class="content-body">
        <div class="header">
            <div class="header-left">
                <span>水质情况实时监测预警系统</span>
            </div>
            <div class="header-time">
                <span>{{ nowTimeData }}</span>
            </div>
        </div>

        <div class="content">
            <div class="left">
                <div class="left-top">
                    <box-content title="重点水质量检测区" style="height: 100%;">
                    </box-content>
                </div>
                <div class="left-middle">
                    <box-content title="水质量分布情况" style="height: 100%;">
                        <div ref="echarts1" style="height: 100%;"></div>
                    </box-content>
                </div>
                <div class="left-bottom">
                    <box-content title="企业污染排放情况" style="height: 100%;">
                        <div ref="echarts2" style="height: calc(100% - 15px)"></div>
                    </box-content>
                </div>
            </div>
            <div class="center">
                <div ref="echarts5" style="height: 100%;"></div>
            </div>
            <div class="right">
                <div class="right-top">
                    <box-content title="水质污染TOP5" style="height: 100%;">
                    </box-content>
                </div>
                <div class="right-middle">
                    <box-content title="水质类别占比" style="height: 100%;">
                        <div ref="echarts3" style="height: 100%;"></div>
                    </box-content>
                </div>
                <div class="right-bottom">
                    <box-content title="企业污染排放情况" style="height: 100%;">
                        <div ref="echarts4" style="height: 100%;"></div>
                    </box-content>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import * as echarts from "echarts"
import options from '@/pages/bigScreen/demo04/options/options'
import BoxContent from '@/pages/bigScreen/components/box/BoxContent.vue'

let nowTimeData = ref("")

function getTime() {
    let myDate = new Date();
    let myYear = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
    let myMonth = myDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
    let myToday = myDate.getDate(); //获取当前日(1-31)
    let myDay = myDate.getDay(); //获取当前星期X(0-6,0代表星期天)
    let myHour = myDate.getHours(); //获取当前小时数(0-23)
    let myMinute = myDate.getMinutes(); //获取当前分钟数(0-59)
    let mySecond = myDate.getSeconds(); //获取当前秒数(0-59)
    let week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    let nowTimeStr = myYear + '年' + fillZero(myMonth) + '月' + fillZero(myToday) + '日' + '  ' + fillZero(myHour) + ':' + fillZero(myMinute) + ':' + fillZero(mySecond) + '  ' + week[myDay] + '  ';
    nowTimeData.value = nowTimeStr
}

function fillZero(str: number) {
    var realNum;
    if (str < 10) {
        realNum = '0' + str;
    } else {
        realNum = str;
    }
    return realNum;
}

let echarts1 = ref()
let echarts2 = ref()
let echarts3 = ref()
let echarts4 = ref()
let echarts5 = ref()

onMounted(() => {
    setInterval(getTime, 1000)

    let chart1 = echarts.init(echarts1.value);
    chart1.setOption(options.echarts1)

    let chart2 = echarts.init(echarts2.value);
    chart2.setOption(options.echarts2)

    let chart3 = echarts.init(echarts3.value);
    chart3.setOption(options.echarts3)

    let chart4 = echarts.init(echarts4.value);
    chart4.setOption(options.echarts4)

    // let chart5 = echarts.init(echarts5.value);
    // chart5.setOption(options.echarts5)

    window.addEventListener("resize", function () {
        chart1.resize()
        chart2.resize()
        chart3.resize()
        chart4.resize()
    })
})

</script>

<style lang="less" scoped>
.content-body {
    width: 100%;
    height: 100%;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #1D2B56;
    overflow: hidden;
}

.header {
    height: 70px;
    width: 100%;
    /*    border: 1px solid red;*/
}

.header .header-left {
    width: 50%;
    float: left;
    line-height: 70px;
}

.header .header-left span {
    color: #ffffff;
    font-weight: bold;
    font-size: 26px;
    letter-spacing: 2px;
    padding: 0 20px;
}

.header .header-time {
    width: 48%;
    line-height: 70px;
    float: right;
    text-align: right;
    padding-right: 20px;
}

.header .header-time span {
    color: #ffffff;
}

.content {
    position: absolute;
    width: 98%;
    height: calc(98% - 70px);
    left: 0;
    right: 0;
    top: 70;
    margin: auto;
}

.left {
    width: 23%;
    height: 100%;
    float: left;
}

.left-top {
    width: 100%;
    height:30%;
}

.left-middle {
    width: 100%;
    height: 37%;
    padding-top: 3%;
}

.left-bottom {
    width: 100%;
    height: 30.1%;
    padding-top: 3%;
}

.center {
    width: 54%;
    height: 100%;
    float: left;
}

.right {
    width: 23%;
    height: 100%;
    float: right;
}

.right-top {
    width: 100%;
    height:30.1%;
}

.right-middle {
    width: 100%;
    height: 30%;
    padding-top: 3%;
}

.right-bottom {
    width: 100%;
    height: 37%;
    padding-top: 3%;
}
</style>
