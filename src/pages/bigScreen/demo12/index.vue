<template>
    <ScreenAdapter>
        <div id="main">
            <header id="header">
                <div class="header">
                    <h1 class=""><a style="color: white">车辆综合管控平台</a></h1>
                </div>
            </header>

            <section id="data_content">
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

                <div class="data_content">
                    <!--左边-->
                    <div class="data_left fl">
                        <div class="left_top">
                            <!--/*左边第一部分*/-->
                            <div class="info public">
                                <div class="min-title">
                                    <span>车辆总数</span>
                                </div>
                                <div id="char4" style="width:100%;height: 100%;"></div>
                                <div class="boxfoot"></div>
                            </div>
                            <!--左边第二部分-->
                            <div class="top_bottom public">
                                <div class="min-title">
                                    <span>车辆类型</span>
                                </div>
                                <div id="echarts_1" style="width:100%;height: 100%;"></div>
                                <div class="boxfoot"></div>
                            </div>
                            <!--左边第三部分-->
                            <div class="left_bottom public">
                                <div class="min-title">
                                    <span>车辆状态</span>
                                </div>
                                <div id="chart_2" style="width:100%;height: 100%;"></div>
                                <div class="boxfoot"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </ScreenAdapter>
</template>

<script setup lang="ts">
import ScreenAdapter from '@/components/bigScreen/ScreenAdapter.vue'

</script>

<style scoped>
@import url('./style/index.less');
</style>
