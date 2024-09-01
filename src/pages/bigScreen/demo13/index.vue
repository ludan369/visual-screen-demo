<template>
    <ScreenAdapter>
        <div class="main">
            <HeaderTitle titleColor="#81E7ED" title="新能源汽车数量统计" fontSize="28px"></HeaderTitle>

            <div class="mainbox">
                <div class="left">
                    <BoxContent02 title="各类型新能源汽车上牌数" titleColor="#81E7ED" style="height: 48%;">
                        <div ref="charts1" style="width:100%;height:100%"></div>
                    </BoxContent02>
                    <BoxContent02 title="新能源汽车不同价格的占比" titleColor="#81E7ED" style="height: 48%;margin-top: 4%;">
                        <div ref="charts2" style="width:100%;height:100%"></div>
                    </BoxContent02>
                </div>

                <div class="center">
                    <BoxContent02 title="用户评论" titleColor="#81E7ED" style="height: 48%; width: 49%;float: left;">
                        <div ref="charts4" style="width:100%;height:100%"></div>
                    </BoxContent02>
                    <BoxContent02 title="" titleColor="#81E7ED" style="height: 48%; width: 49%;float: right;">
                        <div class="num_box">
                            <div class="no-hd">
                                <ul>
                                    <li class="counter">307,453</li>
                                </ul>
                            </div>
                            <div class="no-bd">
                                <ul>
                                    <li>新能源汽车销量总数</li>
                                </ul>
                            </div>
                            <div class="no-hd">
                                <ul>
                                    <li class="counter">33,193</li>
                                </ul>
                            </div>
                            <div class="no-bd">
                                <ul>
                                    <li>新能源销量Top1：Model Y</li>
                                </ul>
                            </div>
                        </div>
                    </BoxContent02>
                    <BoxContent02 titleColor="#81E7ED" title="各类别销售(上牌数)趋势" style="width: 100%;height: 48%;margin-top: 2%;float: right;">
                        <div ref="charts3" style="width:100%;height:100%"></div>
                    </BoxContent02>
                </div>

                <div class="right">
                    <BoxContent02 titleColor="#81E7ED" title="新能源汽车销量前10" style="height: 48%;">
                        <div ref="charts5" style="width:100%;height:100%"></div>
                    </BoxContent02>
                    <BoxContent02 titleColor="#81E7ED" title="新能源汽车销量后10" style="height: 48%;margin-top: 4%;">
                        <div ref="charts6" style="width:100%;height:100%"></div>
                    </BoxContent02>
                </div>
            </div>
        </div>
    </ScreenAdapter>
</template>

<script setup lang="ts">
import HeaderTitle from '@/pages/bigScreen/components/head/HeaderTitle.vue'
import BoxContent02 from '@/pages/bigScreen/components/box/BoxContent02.vue'
import * as echarts from "echarts"
import { ref, onMounted } from 'vue'
import ScreenAdapter from '@/components/bigScreen/ScreenAdapter.vue'
import { options } from '@/pages/bigScreen/demo13/options/options'

let charts1 = ref()
let charts2 = ref()
let charts3 = ref()
let charts4 = ref()
let charts5 = ref()
let charts6 = ref()

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

    window.addEventListener("resize", function () {
        echarts1.resize()
        echarts2.resize()
        echarts3.resize()
        echarts4.resize()
        echarts5.resize()
        echarts6.resize()
    })
})
</script>

<style scoped>
@import url('./style/index.less');
</style>
