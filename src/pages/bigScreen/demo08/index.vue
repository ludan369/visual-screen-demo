<template>
    <screen-adapter>
        <div class="main">
            <div class="nav">XXXXX产业大数据监控室</div>
            <div class="nav_btn">
                <div class="btn_left">
                    <a href="#">
                        <div class="btn_list listActive">主页</div>
                    </a>
                    <a href="#">
                        <div class="btn_list">土地流转</div>
                    </a>
                    <a href="#">
                        <div class="btn_list">空天地</div>
                    </a>
                    <a href="#">
                        <div class="btn_list">生长监测</div>
                    </a>
                </div>
                <div class="btn_right">
                    <a href="#">
                        <div class="btn_list">生产加工</div>
                    </a>
                    <a href="#">
                        <div class="btn_list">仓储管理</div>
                    </a>
                    <a href="#">
                        <div class="btn_list">流通销售</div>
                    </a>
                    <a href="#">
                        <div class="btn_list">数据中心</div>
                    </a>
                </div>
            </div>

            <div class="content">
                <div class="left">
                    <div class="left-top">
                        <div class="left-top-left">
                            <div class="boxTitle">茶叶病虫害预警</div>
                            <img src="../../../assets/images/box/left.png" class="first_border" alt="">
                            <div class="pic">
                                <img src="../../../assets/images/icon/demo_pic.png" class="first_top1" alt="">
                                <img src="../../../assets/images/icon/data_pic.png" class="first_top2" alt="">
                            </div>
                            <div class="picText">
                                <span>样本图片</span>
                                <span class="text_second">茶叶病虫害大数据库</span>
                            </div>
                            <div class="voice_animation">
                                <canvas class="canvas" ref="canvas">Your browser can not support canvas</canvas>
                            </div>
                            <div class="progress">
                                <span class="disease">茶饼病</span>
                                <span class="similar">相似度:85%</span>
                                <img src="../../../assets/images/icon/progress.gif" alt="">
                            </div>
                            <div class="about_illness">
                                <div class="symptom">
                                    <div class="symptom_title">病症症状</div>
                                    <div class="symptom_content">
                                        xxxxxxxxx病症症状,xxxxxxxxx病症症状，xxxxxxxxx病症症状xxxxxxxxx病症症状xxxxxxxxx病症症状
                                    </div>
                                </div>
                                <div class="prevent">
                                    <div class="prevent_title">防治方法</div>
                                    <div class="prevent_content">
                                        xxxxxxxxx病症症状xxxxxxxxx病症症状xxxxxxxxx病症症状xxxxxxxxx病症症状xxxxxxxxx病症症状
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="left-top-right">
                            <div class="maps">
                                <img class="land_level" src="../../../assets/images/icon/landLevel.png" alt="">
                                <img class="wifi_gif" src="../../../assets/images/icon/wifi.gif">
                                <img class="sun_pic" src="../../../assets/images/icon/sun.png" alt="">
                                <img class="wrj_pic" src="../../../assets/images/icon/wrj.png" alt="">
                                <img class="wind_gif" src="../../../assets/images/icon/wind_shape.gif" alt="">
                                <img class="plant_pic display_box" src="../../../assets/images/icon/plant.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="left-bottom">
                        <img src="../../../assets/images/icon/down2.png" class="first_border" alt="">
                        <div class="leftBottom">
                            <div class="land_data">
                                <p>10cm 温度30湿度67</p>
                                <p>20cm 温度30湿度67</p>
                                <p>30cm 温度30湿度67</p>
                            </div>
                        </div>
                        <div class="right_box">
                            <div class="grow_data">
                                <img src="../../../assets/images/icon/tree_pic.png" alt="">
                                <p>生长周期：8周</p>
                                <p>黏土</p>
                                <p>10cm茶土：22.88</p>
                                <span>未来5天降水量：0mm</span>
                                <i></i>
                                <div class="specialistSuggest">
                                    <div>专家建议：</div>
                                    <div>xxxxxxxxxxxxxxxxxxxxxx</div>
                                </div>
                                <div class="fertilizationSuggest">
                                    <div>该生长周期施肥建议：</div>
                                    <div>氮肥含量：1.3-1.5kg</div>
                                    <div>钾肥含量：1.5-1.7kg</div>
                                </div>
                            </div>
                            <div class="weather_data">
                                <div class="weather_text text_one">
                                    <span>温度：19℃</span>
                                    <span>湿度：52%</span>
                                    <span>风向：东南风</span>
                                    <span>风速：2m/s</span>
                                </div>
                                <div class="weather_text text_two">
                                    <span>降雨量：0mm</span>
                                    <span>蒸发量：0.326mm/h</span>
                                    <span>气压：0.326MPa</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="right">
                    <div class="right-top">
                        <img src="../../../assets/images/icon/right.png" class="hardware" alt="">
                        <div class="csbaseBox1">
                            <div class="boxTitle">硬件设备展示</div>
                            <ul class="boxLis">
                                <li @click="togglePage('first')" :class="{ 'active': activeClass === 'first' }">农业无人机
                                </li>
                                <li @click="togglePage('second')" :class="{ 'active': activeClass === 'second' }">田间控制器
                                </li>
                                <li @click="togglePage('third')" :class="{ 'active': activeClass === 'third' }">监控摄像头
                                </li>
                                <li @click="togglePage('fourth')" :class="{ 'active': activeClass === 'fourth' }">土壤检测仪
                                </li>
                            </ul>
                            <div class="equipment_pic">
                                <img :class="[activeClass === 'first' ? '' : 'hidden']"
                                    src="../../../assets/images/icon/uva.png" alt="">
                                <img :class="[activeClass === 'second' ? '' : 'hidden']"
                                    src="../../../assets/images/icon/control.png" alt="">
                                <img :class="[activeClass === 'third' ? '' : 'hidden']"
                                    src="../../../assets/images/icon/camera.png" alt="">
                                <img :class="[activeClass === 'fourth' ? '' : 'hidden']"
                                    src="../../../assets/images/icon/detector.png" alt="">
                            </div>
                            <div class="liSpan">介绍</div>
                            <div class="liP">
                            XXXXXXXXXXXXXXXXX</div>
                        </div>
                    </div>
                    <div class="right-center">
                    </div>
                    <div class="right-bottom">

                    </div>
                </div>
            </div>
        </div>
    </screen-adapter>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ScreenAdapter from '@/components/bigScreen/ScreenAdapter.vue';

let activeClass = ref('first')
function togglePage(liName: string) {
    activeClass.value = liName
}

let canvas = ref()

var doublePI = Math.PI * 2;
var ctx: any;

//画布的高度的一半
var halfCanvasHeight = 100;
//水平边距
var horizontalMargin = 150;

//衰减系数(越大, 边缘衰减的就越多, 震动宽度相应也越窄)
var attenuationCoefficient = 2;
//半波长个数-1
var halfWaveCount = 20;
//振幅是画布高度的一般的百分比[0,1]
var amplitudePercentage = 0.3;
//每帧增加的弧度[0,2PI](作用于sin曲线, 正值相当于原点右移, 曲线左移)
var radianStep = 0.4;

//当前弧度的偏移
var radianOffset = 0;
//画布宽度
var canvasWidth: any;

//设K=attenuationCoefficient, 计算信号衰减 (4K/(4K+x^4))^2K<=1 (x belong [-K,K])
function calcAttenuation(x: any) {
    return Math.pow(4 * attenuationCoefficient / (4 * attenuationCoefficient + Math.pow(x, 4)), 2 * attenuationCoefficient);
}

function init() {
    ctx = canvas.value.getContext("2d");
    window.addEventListener("resize", onResize);

    canvas.value.height = halfCanvasHeight * 2;
    onResize();
    loop();
}

//heightPercentage为振幅的显示比例
function drawAcousticWave(heightPercentage: any, alpha: any, lineWidth?: any) {
    ctx.strokeStyle = "white";
    ctx.globalAlpha = alpha;
    ctx.lineWidth = lineWidth || 1;
    ctx.beginPath();
    ctx.moveTo(0, halfCanvasHeight);
    var x, y;
    for (var i = -attenuationCoefficient; i <= attenuationCoefficient; i += 0.01) {
        //i是当前位置相对于整个长度的比率( x=width*(i+K)/(2*K))
        x = canvasWidth * (i + attenuationCoefficient) / (2 * attenuationCoefficient);
        //加offset相当于把sin曲线向右平移
        y = halfCanvasHeight + halfCanvasHeight * amplitudePercentage * calcAttenuation(i) * heightPercentage * Math.sin(halfWaveCount * i + radianOffset);
        ctx.lineTo(x, y);
    }
    ctx.stroke();
}

function onResize() {
    //元素的大小不能加单位, 单位默认就是像素, 而style中的长度要加单位
    canvasWidth = canvas.value.width = window.innerWidth - horizontalMargin;
}

function loop() {
    radianOffset = (radianOffset + radianStep) % doublePI;
    ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);
    drawAcousticWave(1, 1, 2);
    for (var i = 2; i < 4; i++) {
        var reciprocal = 1 / i;
        drawAcousticWave(reciprocal, reciprocal / 4);
        drawAcousticWave(-reciprocal, reciprocal / 4);
    }
    requestAnimationFrame(loop);
}

onMounted(() => {
    init()
})
</script>

<style lang="less" scoped>
@import url('./style/index.less');
</style>
