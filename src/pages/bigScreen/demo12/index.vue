<template>
    <ScreenAdapter>
        <div id="main">
            <header id="header">
                <div class="header">
                    <h1 class=""><a style="color: white">车辆综合管控平台</a></h1>
                </div>
            </header>

            <div id="data_content">
                <div class="data_info">
                    <div class="info_1 fl">
                        <div class="text_1">
                            <div class="fl">
                                <img src="@/assets/images/icon/info_1.png">
                                <div class="fl count">
                                    <p>车辆总数(辆)</p>
                                    <p class="conuts">46625</p>
                                </div>
                            </div>
                            <div class="fl">
                                <img src="@/assets/images/icon/info_2.png">
                                <div class="fl count">
                                    <p>车辆总数(辆)</p>
                                    <p class="conuts">46625</p>
                                </div>
                            </div>
                            <div class="fl">
                                <img src="@/assets/images/icon/info_3.png">
                                <div class="fl count">
                                    <p>车辆总数(辆)</p>
                                    <p class="conuts">46625</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="info_2 fl">
                        <div class="text_2">
                            <div class="fl">
                                <img src="@/assets/images/icon/info_4.png">
                                <div class="fl count">
                                    <p>车辆总数(辆)</p>
                                    <p class="conuts">46625</p>
                                </div>
                            </div>
                            <div class="fl">
                                <img src="@/assets/images/icon/info_5.png">
                                <div class="fl count">
                                    <p>车辆总数(辆)</p>
                                    <p class="conuts">46625</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="info_3 fr">
                        <div class="text_2">
                            <div class="fl">
                                <img src="@/assets/images/icon/info_6.png">
                                <div class="fl count">
                                    <p>车辆总数(辆)</p>
                                    <p class="conuts">46625</p>
                                </div>
                            </div>
                            <div class="fl">
                                <img src="@/assets/images/icon/info_7.png">
                                <div class="fl count">
                                    <p>车辆总数(辆)</p>
                                    <p class="conuts">46625</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="data_middle">
                <div class="data_left fl">
                    <div class="left_top">
                        <!--/*左边第一部分*/-->
                        <div class="info public">
                            <div class="min-title">
                                <span>车辆总数</span>
                            </div>
                            <div ref="char4" style="width:100%;height: 100%;"></div>
                            <div class="boxfoot"></div>
                        </div>
                        <!--左边第二部分-->
                        <div class="top_bottom public">
                            <div class="min-title">
                                <span>车辆类型</span>
                            </div>
                            <div ref="echarts_1" style="width:100%;height: 100%;"></div>
                            <div class="boxfoot"></div>
                        </div>
                        <!--左边第三部分-->
                        <div class="left_bottom public">
                            <div class="min-title">
                                <span>车辆状态</span>
                            </div>
                            <div ref="chart_2" style="width:100%;height: 100%;"></div>
                            <div class="boxfoot"></div>
                        </div>
                    </div>
                </div>

                <!--中间-->
                <div class="data_c fl">
                    <div class="data_c_1">
                        <div id="contPar" class="contPar">
                            <div id="page1" style="z-index:1">
                                <div class="title0">车辆综合管控平台</div>
                                <div class="title1">旅游、交通、危险品、校车、大数据</div>
                                <div id="drag-container" style="z-index: 5">
                                    <div id="spin-container">
                                        <img style="height: 100px;width:100px" src="../../../assets/images/icon/page1_0.png">
                                        <img class="" src="../../../assets/images/icon/page1_1.png">
                                        <img class="" src="../../../assets/images/icon/page1_2.png">
                                        <img class="" src="../../../assets/images/icon/page1_1.png">
                                        <img class="" src="../../../assets/images/icon/page1_2.png">
                                    </div>
                                    <div id="ground"></div>
                                </div>
                                <img class="img3 png" src="../../../assets/images/icon/newdz.png">

                            </div>
                        </div>
                    </div>

                    <div class="data_c_2 public">
                        <div ref="echart4" style="width: 100%;height: 100%;padding-top: 10px;"></div>
                        <div class="boxfoot"></div>
                    </div>
                </div>

                <!--右边-->
                <div class="data_right fr">
                    <div class="right_top">
                        <!--/*右边第一部分*/-->
                        <div class="right_info public">
                            <div class="min-title">
                                <span>收费站收费数量</span>
                            </div>
                            <div class="echart wenzi">
                                <div class="gun">
                                    <span>小型车</span>
                                    <span>中型车</span>
                                    <span>大型车</span>
                                </div>
                                <div id="FontScroll" class="myscroll">
                                    <ul>
                                        <li>
                                            <div class="fontInner clearfix">
                                                <span>253万</span>
                                                <span>65万</span>
                                                <span>182万</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="fontInner clearfix">
                                                <span>253万</span>
                                                <span>65万</span>
                                                <span>182万</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="fontInner clearfix">
                                                <span>253万</span>
                                                <span>65万</span>
                                                <span>182万</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="fontInner clearfix">
                                                <span>253万</span>
                                                <span>65万</span>
                                                <span>182万</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="fontInner clearfix">
                                                <span>253万</span>
                                                <span>65万</span>
                                                <span>182万</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="fontInner clearfix">
                                                <span>253万</span>
                                                <span>65万</span>
                                                <span>182万</span>
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                            </div>

                            <div class="boxfoot"></div>
                        </div>
                        <!--右边第二部分-->
                        <div class="right_content public">
                            <div class="min-title">
                                <span>抓拍车辆</span>
                            </div>
                            <div ref="chart_3" style="width:100%;height: 100%;"></div>
                            <div class="boxfoot"></div>
                        </div>
                        <!--右边第三部分-->
                        <div class="right_bottom public">
                            <div class="min-title">
                                <span>车辆类型</span>
                            </div>
                            <div ref="echarts_2" style="width:100%;height: 100%;padding-top: 10px;"></div>
                            <div class="boxfoot"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </ScreenAdapter>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive, watch, nextTick, onUnmounted } from 'vue'
import ScreenAdapter from '@/components/bigScreen/ScreenAdapter.vue'
import { options } from '@/pages/bigScreen/demo12/options/options'
import * as echarts from "echarts"

let char4 = ref()
let echarts_1 = ref()
let chart_2 = ref()
let echart4 = ref()
let chart_3 = ref()
let echarts_2 = ref()

onMounted(() => {
    // echarts--start
    let echarts1 = echarts.init(char4.value, null, { devicePixelRatio: 1 })
    echarts1.setOption(options.echarts1)

    let echarts2 = echarts.init(echarts_1.value, null, { devicePixelRatio: 1 })
    echarts2.setOption(options.echarts2)

    let echarts3 = echarts.init(chart_2.value, null, { devicePixelRatio: 1 })
    echarts3.setOption(options.echarts3)

    let echarts4 = echarts.init(echart4.value, null, { devicePixelRatio: 1 })
    echarts4.setOption(options.echarts4)

    let echarts5 = echarts.init(chart_3.value, null, { devicePixelRatio: 1 })
    echarts5.setOption(options.echarts5)

    let echarts6 = echarts.init(echarts_2.value, null, { devicePixelRatio: 1 })
    echarts6.setOption(options.echarts6)

    window.addEventListener("resize", function () {
        echarts1.resize()
        echarts2.resize()
        echarts3.resize()
        echarts4.resize()
        echarts5.resize()
        echarts6.resize()
    })
    // echarts--end
})

</script>

<style scoped>
@import url('./style/index.less');
</style>
