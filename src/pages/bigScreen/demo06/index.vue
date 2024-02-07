<template>
    <div class="main">
        <div class="header">
            <h1 class="">双数智慧公卫-传染病督导平台</h1>
            <!-- <div class="nav">
                <ul class="nav_ul clearfix">
                    <li :class="{ 'nav_active': activeClass === 'home' }">
                        <a @click="togglePage('home')">首页</a>
                    </li>
                    <li :class="{ 'nav_active': activeClass === 'trending' }">
                        <a @click="togglePage('trending')">统计趋势分析</a>
                    </li>
                </ul>
            </div> -->
        </div>
        <div class="mainbody">
            <div class="left">
                <div class="left-top">
                    <box-content03 title="当日情况">
                        <ul class="drqk ">
							<li>
								<div class="icon"><img src="../../../assets/images/icon/icona.png"></div>
								<div><span>今日就诊人数</span>
									<p><em>1358</em><i>人</i></p>
								</div>
							</li>
							<li>
								<div class="icon"><img src="../../../assets/images/icon/iconb.png"></div>
								<div><span>今日就诊人数</span>
									<p><em>1983</em><i>人</i></p>
								</div>
							</li>
							<li>
								<div class="icon"><img src="../../../assets/images/icon/iconc.png"></div>
								<div><span>今日就诊人数</span>
									<p><em>930</em><i>人</i></p>
								</div>
							</li>
							<li>
								<div class="icon"><img src="../../../assets/images/icon/icond.png"></div>
								<div><span>今日就诊人数</span>
									<p><em>371</em><i>人</i></p>
								</div>
							</li>
							<li>
								<div class="icon"><img src="../../../assets/images/icon/icone.png"></div>
								<div><span>今日就诊人数</span>
									<p><em>1683</em><i>人</i></p>
								</div>
							</li>
							<li>
								<div class="icon"><img src="../../../assets/images/icon/iconf.png"></div>
								<div><span>今日就诊人数</span>
									<p><em>1091</em><i>人</i></p>
								</div>
							</li>
						</ul>
                    </box-content03>
                </div>
                <div class="left-middle">
                    <box-content03 title="法定传染病监测">
                        <table class="table1" width="100%" border="0" cellspacing="0" cellpadding="0">
                            <tbody>
                                <tr>
                                    <th>发病统计</th>
                                    <th>甲类</th>
                                    <th>乙类</th>
                                    <th>丙类</th>
                                </tr>
                                <tr>
                                    <td>发病数（万）</td>
                                    <td>0.03<span class="text-b">↓0.01%</span></td>
                                    <td>163.00<span class="text-d">↑4.01%</span></td>
                                    <td>163.00<span class="text-d">↑4.01%</span></td>
                                </tr>
                                <tr>
                                    <td>发病率（%）</td>
                                    <td>0.3<span class="text-b">↓0.01%</span></td>
                                    <td>100%<span class="text-d">↑4.01</span></td>
                                    <td>81.92%<span class="text-d">↑4.01</span></td>
                                </tr>
                                <tr>
                                    <td>发病率（%）</td>
                                    <td>0.3<span class="text-b">↓0.01%</span></td>
                                    <td>100%<span class="text-d">↑4.01</span></td>
                                    <td>81.92%<span class="text-d">↑4.01</span></td>
                                </tr>
                                <tr>
                                    <td>发病率（%）</td>
                                    <td>0.3<span class="text-b">↓0.01%</span></td>
                                    <td>100%<span class="text-d">↑4.01</span></td>
                                    <td>81.92%<span class="text-d">↑4.01</span></td>
                                </tr>
                                <tr>
                                    <td>发病率（%）</td>
                                    <td>0.3<span class="text-b">↓0.01%</span></td>
                                    <td>100%<span class="text-d">↑4.01</span></td>
                                    <td>81.92%<span class="text-d">↑4.01</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </box-content03>
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
                    <box-content03 title="就医动态" style="height: 100%;">
                        <div ref="echarts1" style="height: 100%;width: 100%;"></div>
                    </box-content03>
                </div>
                <div class="right-bottom">
                    <box-content03 title="疾病构成" style="height: 100%;">
                        <ul class="jbgc">
							<li>
								<div class="jztxt">
									<div>
										<h3>1236<i>万元</i></h3>
										<span>私人诊所</span>
									</div>
									<div>
										<h3>1236<i>万元</i></h3>
										<span>私人诊所</span>
									</div>
									<div>
										<h3>1236<i>万元</i></h3>
										<span>私人诊所</span>
									</div>
								</div>
							</li>
							<li style="width:90%" ref="echarts2">
                            </li>
						</ul>
                    </box-content03>
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
import options from '@/pages/bigScreen/demo06/options/options'
import China from '@/pages/chartsModules/json/China.json'
import { importMaps } from '@/pages/chartsModules/utils/importMaps'
import { getAdcodeByName } from '@/pages/chartsModules/utils/mapUtils'

let activeClass = ref('home');

function togglePage(componentName: string) {
    activeClass.value = componentName;
}

const echarts1 = ref()
const echarts2 = ref()

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
    let chart1 = echarts.init(echarts1.value, null, { devicePixelRatio: 3 })
    chart1.setOption(options.echarts1)

    let chart2 = echarts.init(echarts2.value, null, { devicePixelRatio: 3 })
    chart2.setOption(options.echarts2)

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
        chart1.resize()
        chart2.resize()
    })
})
</script>

<style lang="less" scoped>
@import url('./style/index.less');
</style>
