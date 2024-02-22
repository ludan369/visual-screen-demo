<template>
    <div class="con_div_main">
        <div class="con_div_text">
            <div class="con_div_content">
                <div class="con_div_content_01 left">
                    <img src="@/assets/images/icon/info_1.png" class="left text01_img" />
                    <div class="left text01_div">
                        <p>车辆总数(辆)</p>
                        <p>12356</p>
                    </div>
                </div>
                <div class="con_div_content_02 right">
                    <img src="@/assets/images/icon/info_2.png" class="left text01_img" />
                    <div class="left text01_div">
                        <p>车辆使用数(辆)</p>
                        <p>12356</p>
                    </div>
                </div>
            </div>
            <div class="con_div_content">
                <div class="con_div_content_01 left">
                    <img src="@/assets/images/icon/info_4.png" class="left text01_img" />
                    <div class="left text01_div">
                        <p>行驶里程总数(km)</p>
                        <p class="sky">12356</p>
                    </div>
                </div>
                <div class="con_div_content_02 right">
                    <img src="@/assets/images/icon/info_5.png" class="left text01_img" />
                    <div class="left text01_div">
                        <p>行驶里程平均数(km)</p>
                        <p class="sky">12356</p>
                    </div>
                </div>
            </div>
            <div class="con_div_content">
                <div class="con_div_content_01 left">
                    <img src="@/assets/images/icon/info_6.png" class="left text01_img" />
                    <div class="left text01_div">
                        <p>行驶时长总数(s)</p>
                        <p class="org">12356</p>
                    </div>
                </div>
                <div class="con_div_content_02 right">
                    <img src="@/assets/images/icon/info_7.png" class="left text01_img" />
                    <div class="left text01_div">
                        <p>行驶ihfj平均数(s)</p>
                        <p class="org">12356</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="con_div_middle">
            <div class="div_any01 left">
                <div class="div_any_child div_height">
                    <div class="div_any_title"><img src="@/assets/images/icon/title_1.png">车辆类型统计 </div>
                    <p ref="echarts1" style="height: 100%;width: 100%;"></p>
                </div>
                <div class="div_any_child div_height">
                    <div class="div_any_title"><img src="@/assets/images/icon/title_2.png">车辆状态统计 </div>
                    <p ref="echarts2" style="height: 100%;width: 100%;"></p>
                </div>
            </div>
            <div class="div_any02 left">
                <div class="div_any_child div_height_map">
                    <div class="div_any_title any_title_width"><img src="@/assets/images/icon/title_3.png">车辆行驶地图
                    </div>
                </div>
            </div>
            <div class="div_any01 right">
                <div class="div_any_child div_height">
                    <div class="div_any_title"><img src="@/assets/images/icon/title_4.png">车辆行驶统计 </div>
                    <p ref="echarts3" style="height: 100%;width: 100%;"></p>
                </div>
                <div class="div_any_child div_height">
                    <div class="div_any_title"><img src="@/assets/images/icon/title_5.png">车辆报警统计 </div>
                    <p ref="echarts4" style="height: 100%;width: 100%;"></p>
                </div>
            </div>
        </div>

        <div class="con_div_bottom">
            <div class="div_any03 left">
                <div class="div_any_child div_height2">
                    <div class="div_any_title"><img src="@/assets/images/icon/title_4.png">行驶里程排名前5位</div>
                    <div class="table_p">
                    <table>
               <thead><tr>
                   <th>排名</th>
                   <th>车牌号</th>
                   <th>里程数（km）</th>
               </tr>
               </thead>
                <tbody>
                <tr><td>1</td><td>京A12345</td><td>134.2</td></tr>
                <tr><td>1</td><td>京A12345</td><td>134.2</td></tr>
                <tr><td>1</td><td>京A12345</td><td>134.2</td></tr>
                <tr><td>1</td><td>京A12345</td><td>134.2</td></tr>
                <tr><td>1</td><td>京A12345</td><td>134.2</td></tr>
                </tbody>
            </table>
                </div>
                </div>
            </div>
            <div class="div_any03 left" style="margin-left: 1%;">
                <div class="div_any_child div_height2">
                    <div class="div_any_title"><img src="@/assets/images/icon/title_4.png">行驶次数车辆前5位</div>
                    <div class="table_p">
                    <table>
               <thead><tr>
                   <th>排名</th>
                   <th>车牌号</th>
                   <th>里程数（km）</th>
               </tr>
               </thead>
                <tbody>
                <tr><td>1</td><td>京A12345</td><td>134.2</td></tr>
                <tr><td>1</td><td>京A12345</td><td>134.2</td></tr>
                <tr><td>1</td><td>京A12345</td><td>134.2</td></tr>
                <tr><td>1</td><td>京A12345</td><td>134.2</td></tr>
                <tr><td>1</td><td>京A12345</td><td>134.2</td></tr>
                </tbody>
            </table>
                </div>
                </div>
            </div>
            <div class="div_any03 left" style="margin-left: 2%;">
                <div class="div_any_child div_height2">
                    <div class="div_any_title"><img src="@/assets/images/icon/title_4.png">行驶最高时速前5位</div>
                    <div class="table_p">
                    <table>
               <thead><tr>
                   <th>排名</th>
                   <th>车牌号</th>
                   <th>里程数（km）</th>
               </tr>
               </thead>
                <tbody>
                <tr><td>1</td><td>京A12345</td><td>134.2</td></tr>
                <tr><td>1</td><td>京A12345</td><td>134.2</td></tr>
                <tr><td>1</td><td>京A12345</td><td>134.2</td></tr>
                <tr><td>1</td><td>京A12345</td><td>134.2</td></tr>
                <tr><td>1</td><td>京A12345</td><td>134.2</td></tr>
                </tbody>
            </table>
                </div>
                </div>
            </div>
            <div class="div_any03 right">
                <div class="div_any_child div_height2">
                    <div class="div_any_title"><img src="@/assets/images/icon/title_4.png">行驶时长排名前5位</div>
                    <div class="table_p">
                    <table>
               <thead><tr>
                   <th>排名</th>
                   <th>车牌号</th>
                   <th>里程数（km）</th>
               </tr>
               </thead>
                <tbody>
                <tr><td>1</td><td>京A12345</td><td>134.2</td></tr>
                <tr><td>1</td><td>京A12345</td><td>134.2</td></tr>
                <tr><td>1</td><td>京A12345</td><td>134.2</td></tr>
                <tr><td>1</td><td>京A12345</td><td>134.2</td></tr>
                <tr><td>1</td><td>京A12345</td><td>134.2</td></tr>
                </tbody>
            </table>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref,onMounted} from 'vue'
import ScreenAdapter from '@/components/bigScreen/ScreenAdapter.vue'
import * as echarts from "echarts"
import options from '@/pages/bigScreen/demo07/options/options'

const echarts1 = ref()
const echarts2 = ref()
const echarts3 = ref()
const echarts4 = ref()

onMounted(() => {
    let chart1 = echarts.init(echarts1.value, null, { devicePixelRatio: 2 })
    chart1.setOption(options.echarts1)

    let chart2 = echarts.init(echarts2.value, null, { devicePixelRatio: 2 })
    chart2.setOption(options.echarts2)

    let chart3 = echarts.init(echarts3.value, null, { devicePixelRatio: 2 })
    chart3.setOption(options.echarts3)

    let chart4 = echarts.init(echarts4.value, null, { devicePixelRatio: 2 })
    chart4.setOption(options.echarts4)

    window.addEventListener("resize", function () {
        chart1.resize()
        chart2.resize()
        chart3.resize()
        chart4.resize()
    })
})

</script>

<style lang="less" scoped>
@import url('../style/index.less');
</style>
