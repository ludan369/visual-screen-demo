<template>
    <div class="main">
        <header>
            <h1><span>数据可视化页面设计</span></h1>
            <p><span>Data visualization page design</span></p>
        </header>
        <div class="content">
            <div class="top5">
                <div class="top5-title">
                    <span>品牌销售TOP5</span>
                </div>
                <div class="top5-content">
                    <ul>
                        <li>
                            <div class="cicle"></div>
                            <div class="li-content">
                                <span>××品牌</span>
                                <span>15862</span>
                                <span>82%</span>
                                <span><img src="../../../assets/images/icon/up.png"></span>
                            </div>
                        </li>
                        <li>
                            <div class="cicle"></div>
                            <div class="li-content">
                                <span>××品牌</span>
                                <span>15862</span>
                                <span>82%</span>
                                <span><img src="../../../assets/images/icon/up.png"></span>
                            </div>
                        </li>
                        <li>
                            <div class="cicle"></div>
                            <div class="li-content">
                                <span>××品牌</span>
                                <span>15862</span>
                                <span>82%</span>
                                <span><img src="../../../assets/images/icon/up.png"></span>
                            </div>
                        </li>
                        <li>
                            <div class="cicle"></div>
                            <div class="li-content">
                                <span>××品牌</span>
                                <span>15862</span>
                                <span>82%</span>
                                <span><img src="../../../assets/images/icon/up.png"></span>
                            </div>
                        </li>
                        <li>
                            <div class="cicle"></div>
                            <div class="li-content">
                                <span>××品牌</span>
                                <span>15862</span>
                                <span>82%</span>
                                <span><img src="../../../assets/images/icon/down.png"></span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 销售总额 -->
            <div class="total">
                <div class="data1">
                    <span>年销售</span>
                    <p>5684710411</p>
                </div>
                <div class="data2">
                    <span>月销售</span>
                    <p>1457104</p>
                </div>
                <div class="data3">
                    <span>周销售</span>
                    <p>564710</p>
                </div>
                <div class="data4">
                    <span>日销售</span>
                    <p>14504</p>
                </div>
                <canvas class="rain"></canvas>
                <canvas class="dashed"></canvas>
                <div class="sphere">
                    <div class="sphere-bg"></div>
                    <div class="sum">
                        <span>销售总额</span>
                        <p>568971401</p>
                    </div>
                </div>
                <div class="cicle3"></div>
                <div class="cicle4"></div>
                <div class="cicle5"></div>
                <div class="cicle6"></div>
                <div class="cicle7"></div>
                <div class="cicle8">
                    <span>89%</span>
                    <p>同比</p>
                </div>
                <div class="cicle9">
                    <span>89%</span>
                    <p>完成率</p>
                </div>
                <div class="cicle10">
                    <span>89%</span>
                    <p>售罄率</p>
                </div>
                <div class="cicle11">
                    <span>89%</span>
                    <p>折扣率</p>
                </div>
            </div>

            <!-- 会销分析 -->
        <div class="analyse">
            <div class="analyse-title">
                <span>会销情况分析</span>
            </div>
            <ul>
                <li>
                    <img src="../../../assets/images/icon/s1.png" >
                    <h5>会销目标</h5><br>
                    <span>Marketing Target</span><br>
                    <em>￥4,374,266</em>
                </li>
                <li>
                    <img src="../../../assets/images/icon/s3.png" >
                    <h5>会销目标</h5><br>
                    <span>Marketing Target</span><br>
                    <em>￥4,374,266</em>
                </li>
                <li>
                    <img src="../../../assets/images/icon/s2.png" >
                    <h5>会销目标</h5><br>
                    <span>Marketing Target</span><br>
                    <em>￥4,374,266</em>
                </li>
            </ul>
            <div class="execution">
                <div class="title">完成情况</div>
                <div class="cicle1"></div>
                <div class="cicle2"></div>
                <div class="waterChart1">
                    <div class="chart-title">会销完成率</div>
                    <div style="height: 100%;width: 80%;" ref="echarts1"></div>
                </div>
                <div class="waterChart2">
                    <div class="chart-title">会销占比</div>
                    <div class="chart2" ref="echarts2"></div>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref,onMounted} from 'vue'
import * as echarts from "echarts"
import 'echarts-liquidfill'
import options from '@/pages/bigScreen/demo09/options/options'

const echarts1 = ref()
const echarts2 = ref()

onMounted(() => {
    let chart1 = echarts.init(echarts1.value, null, { devicePixelRatio: 1 })
    chart1.setOption(options.echarts1)

    let chart2 = echarts.init(echarts2.value, null, { devicePixelRatio: 2 })
    chart2.setOption(options.echarts1)
})
</script>

<style lang="less" scoped>
@import url('./style/index.less');
</style>