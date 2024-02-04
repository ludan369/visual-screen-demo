<template>
    <screen-adapter>
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
                            <div class="top-body">
                                <div class="top-left">
                                    <div class="top-left-title">
                                        <h2>注水量</h2>
                                        <span><b>1756</b>m3/h</span>
                                        <img src="../../../assets/images/icon/pictre.png">
                                    </div>
                                </div>
                                <div class="top-right">
                                    <div class="top-left-title">
                                        <h2>泄水量</h2>
                                        <span><b>3520</b>m3/h</span>
                                        <img src="../../../assets/images/icon/pictre.png">
                                    </div>
                                </div>
                            </div>
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
                            <div class="title-nav">
                                <div class="top5-ul">
                                    <ul>
                                <li>
                                    <span>1</span>
                                    <span>严重</span>
                                    <span>北京市</span>
                                    <span>房山区</span>
                                    <span>重度污染</span>
                                    <span>15公里</span>
                                </li>
                                <li>
                                    <span>2</span>
                                    <span>严重</span>
                                    <span>上海市</span>
                                    <span>闵行区</span>
                                    <span>重度污染</span>
                                    <span>10公里</span>
                                </li>
                                <li>
                                    <span>3</span>
                                    <span>严重</span>
                                    <span>北京市</span>
                                    <span>朝阳区</span>
                                    <span>重度污染</span>
                                    <span>9.3公里</span>
                                </li>
                                <li>
                                    <span>4</span>
                                    <span>中度</span>
                                    <span>广东省</span>
                                    <span>广州市</span>
                                    <span>中度污染</span>
                                    <span>8.6公里</span>
                                </li>
                                <li>
                                    <span>5</span>
                                    <span>中度</span>
                                    <span>浙江省</span>
                                    <span>杭州市</span>
                                    <span>中度污染</span>
                                    <span>6.6公里</span>
                                </li>
                            </ul>
                                </div>
                            </div>
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
    </screen-adapter>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import * as echarts from "echarts"
import options from '@/pages/bigScreen/demo04/options/options'
import BoxContent from '@/pages/bigScreen/components/box/BoxContent.vue'
import ScreenAdapter from '@/components/bigScreen/ScreenAdapter.vue'
import China from '@/pages/chartsModules/json/China.json'

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

    let chart5 = echarts.init(echarts5.value);
    // @ts-ignore
    echarts.registerMap('china', China)
    chart5.setOption(options.echarts5)

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
    height: 30%;
}

.top-body {
    width: 100%;
    height: 100%;
    position: relative;
}

.top-left {
    float: left;
    width: 50%;
}

.top-right {
    float: left;
    width: 50%;
}

.top-left-title {
    width: 100%;
    height: 100%;
    padding-top: 30px;
    padding-left: 10px;
    box-sizing: border-box;
}

.top-left-title h2 {
    color: #bad0e2;
}

.top-left-title span {
    margin-top: 30px;
    display: inline-block;
    color: #2aa4f1;
    font-size: 25px;
}

.top-left-title span b {
    font-size: 40px;
    letter-spacing: 5px;
}

.top-left-title img {
    width: 80%;
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
    height: 30.1%;
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

.title-nav{
    width: 100%;
    height: calc(100% - 30px);
}

.title-nav .top5-ul{
    width: calc(100% - 20px);
    height: calc(100% - 30px);
    padding: 10px;
}
.title-nav .top5-ul ul{
    width: 100%;
    height: 100%;
}
.title-nav .top5-ul ul,li{
    list-style: none;
}
.title-nav .top5-ul ul>li{
    width: 100%;
    height: 20%;
    color: #ffffff;
    line-height: 68px;
    justify-content: center;
}
.title-nav .top5-ul ul li span{
    margin-left: 3%;
    font-size: 14px;
}
.title-nav .top5-ul ul li span:nth-child(1){
    color:  #EB6841;
    font-style: oblique;
    /*width: 10%;*/
    /*#20a8fe
            #EB6841
            #3FB8AF
            #FE4365
            #FC9D9A*/
    display: inline-block;
    text-align: center;
    font-size: 20px;
}

.title-nav .top5-ul ul li span:nth-child(2){
    width: 10%;
    display: inline-block;
    text-align: center;

    height: 30px;
    line-height: 30px;
/*    height: 100%;*/
    /*line-height: 100%;*/
    vertical-align: center;
    border-radius: 5px;
    color: #ffffff;
}
.title-nav .top5-ul ul li:nth-child(1) span:nth-child(2),.title-nav .top5-ul ul li:nth-child(2) span:nth-child(2)
,.title-nav .top5-ul ul li:nth-child(3) span:nth-child(2){
    background: #d89346;
}
.title-nav .top5-ul ul li:nth-child(4) span:nth-child(2)
,.title-nav .top5-ul ul li:nth-child(5) span:nth-child(2){
    background: #1db5ea;
}
.title-nav .top5-ul ul li span:nth-child(3){
    /*width: 15%;*/
    display: inline-block;
    text-align: center;
}
.title-nav .top5-ul ul li span:nth-child(4){
    /*width: 15%;*/
    display: inline-block;
    text-align: center;
}
.title-nav .top5-ul ul li span:nth-child(5){
    /*width: 20%;*/
    display: inline-block;
    text-align: center;
}
.title-nav .top5-ul ul li span:nth-child(6){
    display: inline-block;
    text-align: center;
}
</style>
