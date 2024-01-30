<template>
    <screen-adapter :width="1920" :height="1080">
        <div class="main">
            <!-- 头部标题 -->
            <header-title title="大数据可视化系统数据分析通用模版"></header-title>
            <div class="mainbox">
                <ul class="clearstyle">
                    <li>
                        <box-content style="height: 15%;">
                            <ul class="row row1">
                                <li class="col-4">
                                    <div class="bar1">
                                        <img src="../../../assets/images/icon/icon1.png">
                                        <h3><span>字段名称</span>200个</h3>
                                    </div>
                                </li>
                                <li class="col-4">
                                    <div class="bar1">
                                        <img src="../../../assets/images/icon/icon2.png">
                                        <h3><span>字段名称</span>1200个</h3>
                                    </div>
                                </li>
                                <li class="col-4">
                                    <div class="bar1">
                                        <img src="../../../assets/images/icon/icon3.png">
                                        <h3><span>字段名称</span>150家</h3>
                                    </div>
                                </li>
                            </ul>
                        </box-content>
                        <box-content title="这是一个标题" style="height:calc(43% - 20px);margin-top: 20px;">
                            <div ref="echarts8" style="height: 340px;"></div>
                        </box-content>
                        <box-content title="这是一个标题" style="height:calc(42% - 40px);margin-top: 20px;">
                            <div ref="echarts1" style="height: 340px;"></div>
                        </box-content>
                    </li>
                    <li>
                        <box-content style="height: 20%;">
                            <ul class="clearstyle rowpie">
                                <li style="width: 50%;">
                                    <div class="num">
                                        <p>业绩总览</p>
                                        <h1><span>30500</span>万</h1>
                                    </div>
                                </li>
                                <li style="width: 50%;">
                                    <ul class="clearstyle rowpie">
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
                        <box-content title="这是一个标题" style="height:calc(38% - 20px);margin-top: 20px;">
                            <div ref="echarts2" style="height: 100%;"></div>
                        </box-content>
                        <box-content title="这是一个标题" style="height:calc(42% - 40px);margin-top: 20px;">
                            <div ref="echarts6" style="height: 100%;"></div>
                        </box-content>
                    </li>
                    <li>
                        <box-content style="height: 15%;">
                            <ul class="row row1">
                                <li class="col-4">
                                    <div class="bar1">
                                        <img src="../../../assets/images/icon/icon4.png">
                                        <h3><span>字段名称</span>251项</h3>
                                    </div>
                                </li>
                                <li class="col-4">
                                    <div class="bar1">
                                        <img src="../../../assets/images/icon/icon5.png">
                                        <h3><span>字段名称</span>34家</h3>
                                    </div>
                                </li>
                                <li class="col-4">
                                    <div class="bar1">
                                        <img src="../../../assets/images/icon/icon6.png">
                                        <h3><span>字段名称</span>150项</h3>
                                    </div>
                                </li>
                            </ul>
                        </box-content>
                        <box-content title="这是一个标题" style="height:calc(43% - 20px);margin-top: 20px;">
                            <div ref="echarts7" style="height: 100%;"></div>
                        </box-content>
                        <box-content title="排行榜" style="height:calc(42% - 40px);margin-top: 20px;">
                            <bar01 v-for="(i,index) in 5" :index="i" :num="500" title="标题标题"></bar01>
                        </box-content>
                    </li>
                </ul>
            </div>
        </div>
    </screen-adapter>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as echarts from "echarts"
import options from '../demo02/options/options'
import ScreenAdapter from '@/components/bigScreen/ScreenAdapter.vue'
import HeaderTitle from '@/pages/bigScreen/components/head/HeaderTitle.vue'
import BoxContent from '@/pages/bigScreen/components/box/BoxContent.vue'
import Bar01 from '@/pages/bigScreen/components/bar/Bar01.vue'

let echarts1 = ref()
let echarts2 = ref()
let echarts3 = ref()
let echarts4 = ref()
let echarts5 = ref()
let echarts6 = ref()
let echarts7 = ref()
let echarts8 = ref()

onMounted(() => {
    let chart1 = echarts.init(echarts1.value)
    chart1.setOption(options.echarts1)

    let chart2 = echarts.init(echarts2.value)
    chart2.setOption(options.echarts2)

    let chart3 = echarts.init(echarts3.value)
    chart3.setOption(options.echarts3)

    let chart4 = echarts.init(echarts4.value)
    chart4.setOption(options.echarts4)

    let chart5 = echarts.init(echarts5.value)
    chart5.setOption(options.echarts5)

    let chart6 = echarts.init(echarts6.value)
    chart6.setOption(options.echarts6)

    let chart7 = echarts.init(echarts7.value)
    chart7.setOption(options.echarts7)

    let chart8 = echarts.init(echarts8.value)
    chart8.setOption(options.echarts8)
})
</script>

<style lang="less" scoped>
.clearstyle {
    list-style: none;
}

.main {
    background: #000d4a url(@/assets/images/bg/bg02.jpg) center center;
    background-size: cover;
    color: #fff;
    width: 1920px;
    height: 1080px;
    background-size: cover;
    font-family: "微软雅黑";
}

.mainbox {
    height: calc(100% - 80px);
    width: 100%;
    display: flex;
    /* 使用 Flexbox 布局 */
    justify-content: space-between;
    /* 在元素之间添加空间 */
}

.mainbox>ul {
    height: 100%;
    width: 100%;
    display: flex;
    /* 使用 Flexbox 布局 */
    padding: 0;
    /* 移除默认的内边距 */
    list-style: none;
    /* 移除默认的列表样式 */
    margin: 10px 10px;
    /* 在列表的上下左右两侧添加 10px 的外边距 */
}

.mainbox>ul>li {
    height: 100%;
    width: calc(33.33% - 20px);
    /* 减少宽度以适应间距 */
    box-sizing: border-box;
    /* 边框和内边距包含在宽度内 */
    margin: 0 10px;
    /* 在每个 li 元素的左右两侧添加 10px 的外边距 */
}

.row {
    display: flex;
    list-style: none;
    height: 100%;
    justify-content: space-between;
}

.row>li {
    height: 100%;
    margin: 10px 20px;
}

.col-4 {
    width: 33.33333%;
}

.row1 .bar1 {
    height: 60%;
    background: url(@/assets/images/box/bg01.png) no-repeat;
}

.bar1 {
    display: flex;
    justify-content: center;
    align-items: center;
}

.bar1 img {
    max-width: 100%;
    /* 限制图片的最大宽度 */
    max-height: 100%;
    /* 限制图片的最大高度 */
    object-fit: contain;
    /* 保持图片的原始比例 */
    margin-right: 13px;
}

.bar1 span {
    color: #fff;
    font-size: 14px;
    display: block;
    font-weight: normal;
}

.bar1 h3 {
    color: #fef000;
    font-size: 18px
}

.rowpie {
    height: 80%;
}

.rowpie>li {
    float: left;
    height: 100%;
}

.num {
    margin-right: 0px;
}

.num p {
    padding: 15px 0px 10px 25px;
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
    font-size: 20px;
    padding: 20px 0px 10px 0px;
}

.piebox {
    height: 70%;
    position: relative;
}
</style>
