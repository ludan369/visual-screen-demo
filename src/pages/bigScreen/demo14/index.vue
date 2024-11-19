<template>
    <ScreenAdapter>
        <div class="main">
            <div class="head clearfix">
                <h1 class="pulll_left">xxxxx数据监控平台</h1>
                <div class="menu menu2 pulll_left">
                    <ul>
                        <li v-for="index in 6" :key="index">
                            <a>标题样式</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="mainbox">
                <li style="width: 20%">
                    <Box title="板块标题1" height="200px" width="100%">
                        <table class="table1" width="95%" border="0" cellspacing="0" cellpadding="0">
                            <tbody>
                                <tr>
                                    <th>业务类型</th>
                                    <th>计划完成</th>
                                    <th>实际完成</th>
                                    <th>增长率</th>
                                </tr>
                            </tbody>
                        </table>
                        <vue3-seamless-scroll :list="module1Data" class="scroll" :step="0.3">
                            <table class="table1" width="95%" border="0" cellspacing="0" cellpadding="0">
                                <tbody>
                                    <tr v-for="(item, index) in module1Data" :key="index">
                                        <td>{{ item.td1 }}</td>
                                        <td><span class="text-w">{{ item.td2 }}</span></td>
                                        <td><span class="text-b">{{ item.td3 }}</span></td>
                                        <td>
                                            <div class="text-d">{{ item.td4 }}</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </vue3-seamless-scroll>
                    </Box>

                    <Box title="板块标题2" height="250px" width="100%">
                        <div class="" style="height: 190px" ref="charts1" />
                        <div class="leidanav">
                            <ul class="clearfix">
                                <li><span>文本1</span>
                                    <p>43</p>
                                </li>
                                <li><span>文本2</span>
                                    <p>100</p>
                                </li>
                                <li><span>文本3</span>
                                    <p>28</p>
                                </li>
                                <li><span>文本4</span>
                                    <p>3</p>
                                </li>
                                <li><span>文本5</span>
                                    <p>150</p>
                                </li>
                            </ul>
                        </div>
                    </Box>
                </li>
                <li style="width: 56%">
                    <Box height="540px" width="100%" :customStyle="{ position: 'relative' }">
                        <div class="mapnav">
                            <ul>
                                <li>
                                    <div><span>数据1</span>
                                        <p>40%</p>
                                    </div>
                                </li>
                                <li>
                                    <div><span>数据2</span>
                                        <p>12%</p>
                                    </div>
                                </li>
                                <li>
                                    <div><span>数据3</span>
                                        <p>80</p>
                                    </div>
                                </li>
                                <li>
                                    <div><span>数据4</span>
                                        <p>124</p>
                                    </div>
                                </li>
                                <li>
                                    <div><span>数据5</span>
                                        <p>10%</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="mapnav2">
                            <div class="box">
                                <div ref="charts2" style="height: 130px;">
                                </div>
                                <div class="leidanav leidanav3" style="margin-bottom: 12px;">
                                    <ul class="clearfix">
                                        <li><span>业务笔数</span>
                                            <p>128</p>
                                        </li>
                                        <li><span>业务收益</span>
                                            <p>100</p>
                                        </li>
                                        <li><span>业务笔数</span>
                                            <p>28</p>
                                        </li>
                                        <li><span>业务收益</span>
                                            <p>28</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div ref="mapEcharts" class="map"></div>

                    </Box>
                </li>
                <li style="width: 20%">
                    <Box title="板块标题1" height="200px" width="100%">
                        <div ref="charts3" style="height: 200px;" />
                    </Box>
                    <Box title="板块标题1" height="250px" width="100%">
                        <div style="height: 200px; float: left; width: 40%; padding: 0 5px;">
                            <div class="tit02 text-b">热门话题榜</div>
                            <div class="huati">
                                <ul>
                                    <li>1.数据分析 <span class="text-s">↑2167</span></li>
                                    <li>2.云存储 <span class="text-s">↑2167</span></li>
                                    <li>3.视觉分析 <span class="text-d">↓2167</span></li>
                                    <li>4.海量词库 <span class="text-d">↓2167</span></li>
                                    <li>5.云词典 <span class="text-d">↓2167</span></li>
                                </ul>
                            </div>
                        </div>
                        <div ref="charts4" style="width:55%;height:100%;float: right"></div>

                    </Box>
                </li>
            </div>

            <div class="mainbox">
                <li style="width: 25%">
                    <Box height="251px" width="100%">
                        <div style="float: left; width: 50%; height: 170px" ref="charts5"></div>
                        <div style="float: left; width: 50%; height: 170px" ref="charts6"></div>
                    </Box>
                </li>
                <li style="width: 25%">
                    <Box height="251px" width="100%">
                        <div style="height: 220px;width: 90%;" ref="charts7"></div>
                    </Box>
                </li>
                <li style="width: 25%">
                    <Box height="251px" width="100%">
                        <div class="" style="height:100%;display: flex; align-items: center;">
                            <div style="float: left; width: 50%; height: 100%" class="wancheng">
                                <div><span>已完成人数</span>
                                    <h3>1835<i>人</i></h3>
                                </div>
                                <div class="yuan">
                                    <span>19%</span>
                                </div>
                            </div>
                            <div style="float: left; width: 60%; height: 100%" ref="charts8"></div>
                        </div>
                    </Box>
                </li>
                <li style="width: 25%">
                    <Box height="251px" width="100%">
                        <div style="float: left; width: 50%; height: 200px" ref="charts9"></div>
						<div style="float: left; width: 50%; height: 200px" ref="charts10"></div>
                    </Box>
                </li>
            </div>
        </div>
    </ScreenAdapter>Box>
</template>

<script setup lang="ts">
import * as echarts from "echarts"
import { ref, onMounted } from 'vue'
import ScreenAdapter from '@/components/bigScreen/ScreenAdapter.vue'
import Box from '@/pages/bigScreen/demo14/components/Box.vue'
import { module1Data } from '@/pages/bigScreen/demo14/options/data.js'
import { Vue3SeamlessScroll } from "vue3-seamless-scroll"
import { options } from '@/pages/bigScreen/demo14/options/options'
import China from '@/pages/chartsModules/json/China.json'


let charts1 = ref()
let charts2 = ref()
let charts3 = ref()
let charts4 = ref()
let charts5 = ref()
let charts6 = ref()
let charts7 = ref()
let charts8 = ref()
let charts9 = ref()
let charts10 = ref()
let mapEcharts = ref()

onMounted(() => {
    let echarts1 = echarts.init(charts1.value, null, { devicePixelRatio: 1 })
    echarts1.setOption(options.echarts1)

    let echarts2 = echarts.init(charts2.value, null, { devicePixelRatio: 1 })
    echarts2.setOption(options.echarts2)

    let echarts3 = echarts.init(charts3.value, null, { devicePixelRatio: 1 })
    echarts3.setOption(options.echarts3)

    let echarts4 = echarts.init(charts4.value, null, { devicePixelRatio: 1 })
    echarts4.setOption(options.echarts4)

    let echarts5 = echarts.init(charts5.value, null, { devicePixelRatio: 1 })
    echarts5.setOption(options.echarts5)

    let echarts6 = echarts.init(charts6.value, null, { devicePixelRatio: 1 })
    echarts6.setOption(options.echarts6)

    let echarts7 = echarts.init(charts7.value, null, { devicePixelRatio: 1 })
    echarts7.setOption(options.echarts7)

    let echarts8 = echarts.init(charts8.value, null, { devicePixelRatio: 1 })
    echarts8.setOption(options.echarts8)

    let echarts9 = echarts.init(charts9.value, null, { devicePixelRatio: 1 })
    echarts9.setOption(options.echarts9)

    let echarts10 = echarts.init(charts10.value, null, { devicePixelRatio: 1 })
    echarts10.setOption(options.echarts10)

    let mapCharts = echarts.init(mapEcharts.value);
    // @ts-ignore
    echarts.registerMap('china', China)
    mapCharts.setOption(options.mapEcharts1)

    window.addEventListener("resize", function () {
        echarts1.resize()
        mapCharts.resize()
    })
})

</script>

<style scoped>
@import url('./style/index.less');

.scroll {
    height: 90%;
    width: 100%;
    overflow: hidden;
}

.scroll .item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3px 0;
}
</style>
