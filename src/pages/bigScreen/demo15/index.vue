<template>
    <ScreenAdapter>
        <div class="main_box">
            <div class="header">
                <div class="lefth">
                    <div class="date">2024-05-21 09:59:20</div>
                    <div class="week">星期五</div>
                </div>
                <div class="centerh">XX全域智慧旅游智慧中心</div>
                <div class="righth">
                    <p>xxxxxxx</p>
                </div>
            </div>

            <div class="content">
                <div class="left">
                    <div class="inner_left">
                        <div class="item weather">
                            <div class="head_block">
                                <p class="level">气象环境：<span class="air_level"></span>
                                </p>
                                <p class="time">
                                    <span class="updata_time"></span>更新
                                    <img class="refresh" src="@/assets/images/icon/refresh.png">
                                </p>
                            </div>
                            <div class="middle_block">
                                <div class="tem_wrap">
                                    <span class="tem">22</span>
                                    <sup>°</sup>
                                    <sub class="wea">晴朗</sub>
                                </div>
                                <div class="win_wrap">风向<span class="win">东</span>
                                </div>
                                <div class="meter">风速 <span class="win_meter">20</span>
                                </div>
                            </div>
                            <div class="foot_block">
                                <div class="foot_item">
                                    <p class="title">湿度</p>
                                    <p class="humidity">适宜</p>
                                    <p>湿润</p>
                                </div>
                                <div class="foot_item">
                                    <p class="title">PM2.5</p>
                                    <p class="air_pm25">80</p>
                                    <p class="air_level">20</p>
                                </div>
                                <div class="foot_item">
                                    <p class="title">负氧离子</p>
                                    <p>3109/cm<sup>3</sup>
                                    </p>
                                    <p>1级</p>
                                </div>
                                <div class="foot_item">
                                    <p class="title">噪声</p>
                                    <p>56.6dB</p>
                                    <p>较安静</p>
                                </div>
                            </div>
                        </div>

                        <div class="item tourists_flow chartWrap">
                            <div class="module_title">实时游客流量<span>单位：人</span>
                            </div>
                            <div class="inner_wrap chart_wrap" ref="touristsFlowChartId"
                                style="-webkit-tap-highlight-color: transparent; user-select: none; position: relative;height: 100%;width: 100%;">
                               
                            </div>
                        </div>

                        <div class="item car_flow chartWrap">
                            <div class="module_title">实时车流量</div>
                            <div class="inner_wrap chart_wrap" ref="carFlowChartId"
                                style="-webkit-tap-highlight-color: transparent; user-select: none; position: relative;">
                            
                            </div>
                        </div>
                    </div>
                    <div class="inner_right"></div>
                </div>
                <div class="center"></div>
                <div class="right"></div>
            </div>
        </div>
    </ScreenAdapter>
</template>

<script setup lang="ts">
import * as echarts from "echarts"
import { ref, onMounted } from 'vue'
import ScreenAdapter from '@/components/bigScreen/ScreenAdapter.vue'
import { options, touristsFlowChart } from '@/pages/bigScreen/demo15/options/options'
import { touristsFlowChartArr} from '@/pages/bigScreen/demo15/options/data.js'

let touristsFlowChartId = ref()
let carFlowChartId = ref()

onMounted(() => {
    let echarts1 = echarts.init(touristsFlowChartId.value, null, { devicePixelRatio: 3 })
    echarts1.setOption(touristsFlowChart(touristsFlowChartArr))

    window.addEventListener("resize", function () {
        echarts1.resize()
    })
})

</script>

<style scoped>
@import url('./style/index.less');
</style>
