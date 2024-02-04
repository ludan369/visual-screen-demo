<template>
    <div class="main">
        <div class="header">

        </div>
        <div class="mainbody">
            <div class="left">
                <div class="left-top">
                    <box-content03 title="当日情况"></box-content03>
                </div>
                <div class="left-middle">
                    <box-content03 title="法定传染病监测"></box-content03>
                </div>
                <div class="left-bottom">
                    <box-content03 title="医疗服务"></box-content03>
                </div>
            </div>

            <div class="center">
                <div class="center-top">
                    <div class="map1"><img src="../../../assets/images/map/lbx.png"></div>
                    <div class="map2"><img src="../../../assets/images/map/jt.png"></div>
                    <div class="map3"><img src="../../../assets/images/map/map.png"></div>
                    <div class="map4" ref="map"></div>
                </div>
                <div class="center-bottom">
                    <box-content03 title="监测机构"></box-content03>
                </div>
            </div>

            <div class="right">
                <div class="right-top">
                    <box-content03 title="同期对比"></box-content03>
                </div>
                <div class="right-middle">
                    <box-content03 title="就医动态"></box-content03>
                </div>
                <div class="right-bottom">
                    <box-content03 title="疾病构成"></box-content03>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref,onMounted} from 'vue'
import * as echarts from "echarts"
import BoxContent03 from "@/pages/bigScreen/components/box/BoxContent03.vue"
import {mapOptions} from '@/pages/bigScreen/demo06/options/mapOptions'
import China from '@/pages/chartsModules/json/China.json'

const map = ref()

onMounted(() =>{
    let mapChart = echarts.init(map.value, null, { devicePixelRatio: 2 });
    // @ts-ignore
    echarts.registerMap('china', China)
    mapChart.setOption(mapOptions({},'china',[]))

    window.addEventListener("resize", function () {
        mapChart.resize()
    })
})

</script>

<style lang="less" scoped>
@import url('./style/index.less');
</style>
