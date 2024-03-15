<template>
    <screen-adapter>
        <div class="main">
            <div class="header">
                <h1>压力容器监管大屏</h1>
            </div>

            <div class="data_content">
                <div class="data_main">
                    <div class="main_left">
                        <box style="position: relative;height: 45%;width: 100%;margin-top: 5%;" :title-img-src="t_1"
                            title="检验报告数据量前5名特检单位统计">
                            <div ref="echarts1" style="width:100%;height: 100%;"></div>
                        </box>
                        <box style="position: relative;height: 42%;width: 100%;margin-top: 8%;" :title-img-src="t_2"
                            title="各检验单位的检验结论统计">
                            <div ref="echarts2" style="width:100%;height: 100%;"></div>
                        </box>
                    </div>

                    <div class="main_center">
                        <div ref="mapCharts" style="width:100%;height: 100%;"></div>
                    </div>

                    <div class="main_right">
                        <box style="position: relative;height: 45%;width: 100%;margin-top: 5%;" :title-img-src="t_3"
                            title="总体检验结论统计">
                            <div ref="echarts3" style="width:100%;height: 100%;"></div>
                        </box>
                        <box style="position: relative;height: 42%;width: 100%;margin-top: 8%;" :title-img-src="t_4"
                            title="各容器种类的检验结论统计">
                            <div ref="echarts4" style="width:100%;height: 100%;"></div>
                        </box>
                    </div>
                </div>

                <div class="data_bottom">
                    <box style="position: relative;height: 100%;width: 23%;float: left;" :title-img-src="t_5"
                            title="制造单位与检验结论情况分析">
                            <div ref="echarts5" style="width:100%;height: 100%;"></div>
                    </box>
                    <box style="position: relative;height: 100%;width: 23%;float: left;margin-left: 2%;" :title-img-src="t_5"
                            title="检验类别的检验结论热力分布">
                            <div ref="echarts6" style="width:100%;height: 100%;"></div>
                    </box>
                    <box style="position: relative;height: 100%;width: 24%;float: left;margin-left: 2%;" :title-img-src="t_5"
                            title="设备新增、报废统计">
                            <div ref="echarts7" style="width:100%;height: 100%;"></div>
                    </box>
                    <box style="position: relative;height: 100%;width: 24%;float: left;margin-left: 2%;" :title-img-src="t_5"
                            title="制造日期、检验日期趋势分析">
                            <div ref="echarts8" style="width:100%;height: 100%;"></div>
                    </box>
                </div>
            </div>
        </div>
    </screen-adapter>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as echarts from "echarts"
import box from './components/box.vue'
import options from '@/pages/bigScreen/demo10/options/options'
import ScreenAdapter from '@/components/bigScreen/ScreenAdapter.vue'
import t_1 from '@/pages/bigScreen/demo10/assets/t_1.png'
import t_2 from '@/pages/bigScreen/demo10/assets/t_2.png'
import t_3 from '@/pages/bigScreen/demo10/assets/t_3.png'
import t_4 from '@/pages/bigScreen/demo10/assets/t_4.png'
import t_5 from '@/pages/bigScreen/demo10/assets/t_5.png'
import GZ from '@/pages/chartsModules/json/520000/520000.json'

const echarts1 = ref()
const echarts2 = ref()
const echarts3 = ref()
const echarts4 = ref()
const mapCharts = ref()

const echarts5 = ref()
const echarts6 = ref()
const echarts7 = ref()
const echarts8 = ref()

onMounted(() => {
    let chart1 = echarts.init(echarts1.value, null, { devicePixelRatio: 2 })
    chart1.setOption(options.echarts1)

    let chart2 = echarts.init(echarts2.value, null, { devicePixelRatio: 2 })
    chart2.setOption(options.echarts2)

    let chart3 = echarts.init(echarts3.value, null, { devicePixelRatio: 2 })
    chart3.setOption(options.echarts3)

    let chart4 = echarts.init(echarts4.value, null, { devicePixelRatio: 2 })
    chart4.setOption(options.echarts4)

    let chart5 = echarts.init(echarts5.value, null, { devicePixelRatio: 2 })
    chart5.setOption(options.echarts5)

    let chart6 = echarts.init(echarts6.value, null, { devicePixelRatio: 2 })
    chart6.setOption(options.echarts6)

    let chart7 = echarts.init(echarts7.value, null, { devicePixelRatio: 2 })
    chart7.setOption(options.echarts7)

    let chart8 = echarts.init(echarts8.value, null, { devicePixelRatio: 2 })
    chart8.setOption(options.echarts8)

    let mapChart = echarts.init(mapCharts.value, null, { devicePixelRatio: 2 })
    // @ts-ignore
    // 地图注册
    echarts.registerMap('GZ', GZ)
    mapChart.setOption(options.mapCharts)

    window.addEventListener("resize", function () {
        chart1.resize()
        chart2.resize()
        chart3.resize()
        chart4.resize()
        chart7.resize()
        mapChart.resize()
    })
})
</script>

<style lang="less" scoped>
@import url('./style/index.less');
</style>
