<template>
    <div class="main">
        <div class="header">
            <h1>压力容器监管大屏</h1>
        </div>

        <div class="data_content">
            <div class="data_main">
                <div class="main_left">
                    <box style="position: relative;height: 45%;width: 100%;margin-top: 5%;" :title-img-src="t_1" title="检验报告数据量前5名特检单位统计">
                        <div ref="echarts1" style="width:100%;height: 100%;"></div>
                    </box>
                    <box style="position: relative;height: 42%;width: 100%;margin-top: 8%;" :title-img-src="t_2" title="各检验单位的检验结论统计">
                        <div ref="echarts2" style="width:100%;height: 100%;"></div>
                    </box>
                </div>

                <div class="main_center">

                </div>

                <div class="main_right">

                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as echarts from "echarts"
import box from './components/box.vue'
import options from '@/pages/bigScreen/demo10/options/options'
import t_1 from '@/pages/bigScreen/demo10/assets/t_1.png'
import t_2 from '@/pages/bigScreen/demo10/assets/t_2.png'

const echarts1 = ref()
const echarts2 = ref()

onMounted(() => {
    let chart1 = echarts.init(echarts1.value, null, { devicePixelRatio: 2 })
    chart1.setOption(options.echarts1)

    let chart2 = echarts.init(echarts2.value, null, { devicePixelRatio: 2 })
    chart2.setOption(options.echarts2)

    window.addEventListener("resize", function () {
        chart1.resize()
        chart2.resize()
    })
})
</script>

<style lang="less" scoped>
@import url('./style/index.less');
</style>
