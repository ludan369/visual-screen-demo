<template>
    <div class="main">
        <div class="header">
            <div class="nav">
                <ul class="nav_ul clearfix">
                    <li :class="{ 'nav_active': activeClass === 'home' }">
                        <a @click="togglePage('home')">首页</a>
                    </li>
                    <li :class="{ 'nav_active': activeClass === 'trending' }">
                        <a @click="togglePage('trending')">统计趋势分析</a>
                    </li>
                </ul>
            </div>
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
import { ref, reactive, onMounted } from 'vue'
import * as echarts from "echarts"
import BoxContent03 from "@/pages/bigScreen/components/box/BoxContent03.vue"
import { mapOptions } from '@/pages/bigScreen/demo06/options/mapOptions'
import China from '@/pages/chartsModules/json/China.json'
import { importMaps } from '@/pages/chartsModules/utils/importMaps'
import { getAdcodeByName } from '@/pages/chartsModules/utils/mapUtils'

let activeClass = ref('home');

function togglePage(componentName:string) {
    activeClass.value = componentName;
}

let adcodeData = reactive({
    // 当前地图
    currentAdcode: '',
    // 当前父级地图
    preAdcode: '',
    // 地图层级，初始1-中国
    level: 1
})

let mapLevelOneLightData = [{
    name: '贵州',
    value: [106.713478, 25.578343]
}, {
    name: '四川',
    value: [101.065333, 30.659462]
}]

let mapLevelTwoLightData = [{
    name: '贵阳市',
    value: [106.713478, 26.578343]
}, {
    name: '黔南州',
    value: [107.517156, 26.258219]
}]

const map = ref()

let timeFnData = reactive({
    timeFn: 0 as NodeJS.Timeout | 0
})

async function registerMapsAndSetupChart(adcode: string) {
    const maps = await importMaps(adcode);
    for (const [key, value] of Object.entries(maps)) {
        echarts.registerMap(key, value);
    }
}

onMounted(() => {
    let mapChart = echarts.init(map.value, null, { devicePixelRatio: 3 });
    // @ts-ignore
    // 中国地图注册
    echarts.registerMap('china', China)
    mapChart.setOption(mapOptions({}, 'china', mapLevelOneLightData, { top: '24%', zoom: 1.5 }))
    adcodeData.currentAdcode = 'china'
    // 贵州省地图注册
    registerMapsAndSetupChart("520000")


    // 地图单击事件
    mapChart.on('click', (params: any) => {
        clearTimeout(timeFnData.timeFn)
        timeFnData.timeFn = setTimeout(() => {
            let adcode = getAdcodeByName(params.name)
            if (adcode) {
                mapChart.setOption(mapOptions({}, adcode, [], { top: '10%', zoom: 1.0 }))
                // 处理父级地图
                if (adcodeData.level == 1) {
                    adcodeData.preAdcode = 'china'
                    adcodeData.currentAdcode = adcode
                } else if (adcodeData.level == 2 || adcodeData.level == 3) {
                    adcodeData.preAdcode = adcodeData.currentAdcode
                    adcodeData.currentAdcode = adcode
                }
                adcodeData.level += 1
            }
        }, 250)
    })

    // 地图双击事件
    mapChart.on('dblclick', (params: any) => {
        clearTimeout(timeFnData.timeFn)
        if (adcodeData.level === 2) {
            adcodeData.currentAdcode = 'china'
            adcodeData.preAdcode = ''
            mapChart.setOption(mapOptions({}, 'china', mapLevelOneLightData, { top: '24%', zoom: 1.5 }))
            adcodeData.level -= 1
        } else if (adcodeData.level === 3) {
            mapChart.setOption(mapOptions({}, adcodeData.preAdcode, [], { top: '10%', zoom: 1.0 }))
            adcodeData.level -= 1
        }
    })

    window.addEventListener("resize", function () {
        mapChart.resize()
    })
})
</script>

<style lang="less" scoped>
@import url('./style/index.less');
</style>
