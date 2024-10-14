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
                <li style="width: 22%">
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
            </div>
        </div>
    </ScreenAdapter>
</template>

<script setup lang="ts">
import * as echarts from "echarts"
import { ref, onMounted } from 'vue'
import ScreenAdapter from '@/components/bigScreen/ScreenAdapter.vue'
import Box from '@/pages/bigScreen/demo14/components/Box.vue'
import { module1Data } from '@/pages/bigScreen/demo14/options/data.js'
import { Vue3SeamlessScroll } from "vue3-seamless-scroll"
import { options } from '@/pages/bigScreen/demo14/options/options'


let charts1 = ref()

onMounted(() => {
    let echarts1 = echarts.init(charts1.value, null, { devicePixelRatio: 1 })
    echarts1.setOption(options.echarts1)

    window.addEventListener("resize", function () {
        echarts1.resize()
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
