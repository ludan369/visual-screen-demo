<template>
    <div class="main">
        <header>
            <h1><span>数据可视化页面设计</span></h1>
            <p><span>Data visualization page design</span></p>
        </header>
        <div class="content">
            <div class="top5">
                <div class="top5-title">
                    <span>品牌销售TOP5</span>
                </div>
                <div class="top5-content">
                    <ul>
                        <li>
                            <div class="cicle"></div>
                            <div class="li-content">
                                <span>××品牌</span>
                                <span>15862</span>
                                <span>82%</span>
                                <span><img src="../../../assets/images/icon/up.png"></span>
                            </div>
                        </li>
                        <li>
                            <div class="cicle"></div>
                            <div class="li-content">
                                <span>××品牌</span>
                                <span>15862</span>
                                <span>82%</span>
                                <span><img src="../../../assets/images/icon/up.png"></span>
                            </div>
                        </li>
                        <li>
                            <div class="cicle"></div>
                            <div class="li-content">
                                <span>××品牌</span>
                                <span>15862</span>
                                <span>82%</span>
                                <span><img src="../../../assets/images/icon/up.png"></span>
                            </div>
                        </li>
                        <li>
                            <div class="cicle"></div>
                            <div class="li-content">
                                <span>××品牌</span>
                                <span>15862</span>
                                <span>82%</span>
                                <span><img src="../../../assets/images/icon/up.png"></span>
                            </div>
                        </li>
                        <li>
                            <div class="cicle"></div>
                            <div class="li-content">
                                <span>××品牌</span>
                                <span>15862</span>
                                <span>82%</span>
                                <span><img src="../../../assets/images/icon/down.png"></span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 销售总额 -->
            <div class="total" ref="total">
                <div class="data1">
                    <span>年销售</span>
                    <p>5684710411</p>
                </div>
                <div class="data2">
                    <span>月销售</span>
                    <p>1457104</p>
                </div>
                <div class="data3">
                    <span>周销售</span>
                    <p>564710</p>
                </div>
                <div class="data4">
                    <span>日销售</span>
                    <p>14504</p>
                </div>
                <canvas class="rain" ref="rain"></canvas>
                <canvas class="dashed" ref="canvas"></canvas>
                <div class="sphere">
                    <div class="sphere-bg"></div>
                    <div class="sum">
                        <span>销售总额</span>
                        <p>568971401</p>
                    </div>
                </div>
                <div class="cicle3"></div>
                <div class="cicle4"></div>
                <div class="cicle5"></div>
                <div class="cicle6"></div>
                <div class="cicle7"></div>
                <div class="cicle8" style="margin-left: -5%;">
                    <span>89%</span>
                    <p>同比</p>
                </div>
                <div class="cicle9" style="margin-left: -40%;">
                    <span>89%</span>
                    <p>完成率</p>
                </div>
                <!-- <div class="cicle10">
                    <span>89%</span>
                    <p>售罄率</p>
                </div> -->
                <div class="cicle11" style="margin-left: 30%;">
                    <span>89%</span>
                    <p>折扣率</p>
                </div>
            </div>

            <!-- 会销分析 -->
            <div class="analyse">
                <div class="analyse-title">
                    <span>会销情况分析</span>
                </div>
                <ul>
                    <li>
                        <img src="../../../assets/images/icon/s1.png">
                        <h5>会销目标</h5><br>
                        <span>Marketing Target</span><br>
                        <em>￥4,374,266</em>
                    </li>
                    <li>
                        <img src="../../../assets/images/icon/s3.png">
                        <h5>会销目标</h5><br>
                        <span>Marketing Target</span><br>
                        <em>￥4,374,266</em>
                    </li>
                    <li>
                        <img src="../../../assets/images/icon/s2.png">
                        <h5>会销目标</h5><br>
                        <span>Marketing Target</span><br>
                        <em>￥4,374,266</em>
                    </li>
                </ul>
                <div class="execution">
                    <div class="title">完成情况</div>
                    <div class="cicle1"></div>
                    <div class="cicle2"></div>
                    <div class="waterChart1">
                        <div class="chart-title">会销完成率</div>
                        <div style="height: 100%;width: 80%;" ref="echarts1"></div>
                    </div>
                    <div class="waterChart2">
                        <div class="chart-title">会销占比</div>
                        <div class="chart2" ref="echarts2"></div>
                    </div>
                </div>
            </div>

            <!-- 鞋服配销售分析 -->
            <div class="sale">
                <div class="top5-title">
                    <span>大类销售分析</span>
                </div>
                <ul>
                    <li>
                        <div class="showImg">
                            <img src="../../../assets/images/icon/shoe.png">
                        </div>
                        <div class="data">
                            <span>鞋类</span>
                            <span>52563</span>
                        </div>
                        <div ref="echarts3" style="height: 100%;width: 75%;float: left;margin-left: 5%;"></div>
                    </li>
                    <li>
                        <div class="showImg">
                            <img src="../../../assets/images/icon/clothes.png">
                        </div>
                        <div class="data">
                            <span>服装</span>
                            <span>32563</span>
                        </div>
                        <div ref="echarts4" style="height: 100%;width: 75%;float: left;margin-left: 5%;"></div>
                    </li>
                    <li>
                        <div class="showImg">
                            <img src="../../../assets/images/icon/mz.png">
                        </div>
                        <div class="data">
                            <span>配饰</span>
                            <span>12563</span>
                        </div>
                        <div ref="echarts5" style="height: 100%;width: 75%;float: left;margin-left: 5%;"></div>
                    </li>
                </ul>
            </div>

            <!-- 折线图 -->
            <div class="lineCharts" ref="echarts6">

            </div>
        </div>
        <!-- 底部模块 -->
        <div class="bottom">
            <h5><span>数据状况</span></h5>
        </div>
    </div>
    <Particles id="tsparticles" :options="poptions" />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as echarts from "echarts"
import 'echarts-liquidfill'
import { options, getOptions } from '@/pages/bigScreen/demo09/options/options'

const echarts1 = ref()
const echarts2 = ref()
const echarts3 = ref()
const echarts4 = ref()
const echarts5 = ref()
const echarts6 = ref()

const canvas = ref()
const total = ref()

function dashed() {
    var ctx = canvas.value.getContext('2d')
    var w = canvas.value.width = total.value.clientWidth
    var h = canvas.value.height = total.value.clientHeight / 3 * 2
    ctx.lineWidth = 3
    ctx.setLineDash([3, 3]);
    ctx.fillStyle = '#93f8fb'
    ctx.shadowOffsetX = 0;
    // 阴影的y偏移
    ctx.shadowOffsetY = 0;
    // 阴影颜色
    ctx.shadowColor = '#93f8fb';
    // 阴影的模糊半径
    ctx.shadowBlur = 15;
    ctx.save()  //缓存初始状态
    // 绘制第一条曲线
    ctx.beginPath()
    var grd = ctx.createLinearGradient(w / 11 * 2, h / 3, w / 5 * 2, h);
    grd.addColorStop(0, "#54e2e6");
    grd.addColorStop(1, "#065261");
    ctx.strokeStyle = grd;
    ctx.moveTo(w / 5 * 2, h)
    ctx.quadraticCurveTo(w / 5, h / 6 * 5, w / 11 * 2, h / 3);
    ctx.stroke();
    // 绘制第一条曲线上的圆光效果
    ctx.beginPath()
    ctx.moveTo(w / 11 * 2, h / 3)
    ctx.arc(w / 11 * 2, h / 3, 5, 0, Math.PI * 2)
    ctx.fill()
    ctx.restore()
    ctx.save()
    // 绘制第二条线
    ctx.beginPath()
    var grd = ctx.createLinearGradient(w / 11 * 3.3, h / 2, w / 3 * 1.1, h / 6 * 5);
    grd.addColorStop(0, "#e08d03");
    grd.addColorStop(1, "#2e6a5c");
    ctx.strokeStyle = grd;
    ctx.moveTo(w / 3 * 1.1, h / 6 * 5)
    ctx.quadraticCurveTo(w / 5 * 1.5, h / 6 * 4.2, w / 11 * 3.3, h / 2);
    ctx.stroke();
    // 绘制第二条曲线上的圆光效果
    ctx.beginPath()
    ctx.moveTo(w / 11 * 3.3, h / 2)
    ctx.arc(w / 11 * 3.3, h / 2, 5, 0, Math.PI * 2)
    ctx.fill()
    ctx.restore()
    ctx.save()
    // 绘制第三条线
    ctx.beginPath()
    var grd = ctx.createLinearGradient(w / 3 * 1.4, h / 5, w / 5 * 2, h / 2);
    grd.addColorStop(0, "#e08d03");
    grd.addColorStop(1, "#2e6a5c");
    ctx.strokeStyle = grd;
    ctx.moveTo(w / 5 * 2, h / 2)
    ctx.quadraticCurveTo(w / 3 * 1.2, h / 4 * 1.4, w / 3 * 1.4, h / 5);
    ctx.stroke();
    // 绘制第三条曲线上的圆光效果
    ctx.beginPath()
    ctx.moveTo(w / 3 * 1.4, h / 5)
    ctx.arc(w / 3 * 1.4, h / 5, 5, 0, Math.PI * 2)
    ctx.fill()
    ctx.restore()
    ctx.save()
    // 绘制第四条线
    ctx.beginPath()
    var grd = ctx.createLinearGradient(w / 5 * 3.1, h / 3 * 1.2, w / 5 * 3.2, h / 2 * 1.5);
    grd.addColorStop(0, "#e08d03");
    grd.addColorStop(1, "#2e6a5c");
    ctx.strokeStyle = grd;
    ctx.moveTo(w / 5 * 3.2, h / 2 * 1.5)
    ctx.quadraticCurveTo(w / 5 * 3.35, h / 2 * 1.2, w / 5 * 3.1, h / 3 * 1.2);
    ctx.stroke();
    // 绘制第四条曲线上的圆光效果
    ctx.beginPath()
    ctx.moveTo(w / 5 * 3.1, h / 3 * 1.2)
    ctx.arc(w / 5 * 3.1, h / 3 * 1.2, 5, 0, Math.PI * 2)
    ctx.fill()
    ctx.restore()
    ctx.save()
    // 绘制第五条线
    ctx.beginPath()
    var grd = ctx.createLinearGradient(w / 5 * 3.3, h / 4, w / 5 * 3.2, h / 2 * 1.9);
    grd.addColorStop(0, "#e08d03");
    grd.addColorStop(1, "#2e6a5c");
    ctx.strokeStyle = grd;
    ctx.moveTo(w / 5 * 3.03, h / 2 * 1.9)
    ctx.quadraticCurveTo(w / 5 * 3.8, h / 2 * 1.2, w / 5 * 3.3, h / 4);
    ctx.stroke();
    // 绘制第五条曲线上的圆光效果
    ctx.beginPath()
    ctx.moveTo(w / 5 * 3.3, h / 4)
    ctx.arc(w / 5 * 3.3, h / 4, 5, 0, Math.PI * 2)
    ctx.fill()
    ctx.restore()
    ctx.save()
    // 绘制第六条线
    ctx.beginPath()
    var grd = ctx.createLinearGradient(w / 5 * 3.8, h / 2 * 1.2, w / 5 * 2.9, h);
    grd.addColorStop(0, "#e08d03");
    grd.addColorStop(1, "#2e6a5c");
    ctx.strokeStyle = grd;
    ctx.moveTo(w / 5 * 2.9, h)
    ctx.quadraticCurveTo(w / 5 * 3.7, h / 2 * 1.6, w / 5 * 3.8, h / 2 * 1.2);
    ctx.stroke();
    // 绘制第六条曲线上的圆光效果
    ctx.beginPath()
    ctx.moveTo(w / 5 * 3.8, h / 2 * 1.2)
    ctx.arc(w / 5 * 3.8, h / 2 * 1.2, 5, 0, Math.PI * 2)
    ctx.fill()
}

const poptions = {
    "particles": {
        "number": {
            "value": 10,
            "density": {
                "enable": true,
                "value_area": 1200
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 2,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            }
        },
        "opacity": {
            "value": .8,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 5,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true,
    "config_demo": {
        "hide_card": false,
        "background_color": "#b61924",
        "background_image": "",
        "background_position": "50% 50%",
        "background_repeat": "no-repeat",
        "background_size": "cover"
    }
}

onMounted(() => {
    dashed()

    let chart1 = echarts.init(echarts1.value, null, { devicePixelRatio: 1 })
    chart1.setOption(options.echarts1)

    let chart2 = echarts.init(echarts2.value, null, { devicePixelRatio: 1 })
    chart2.setOption(options.echarts1)

    let chart3 = echarts.init(echarts3.value, null, { devicePixelRatio: 2 })
    chart3.setOption(getOptions(52563, '完成率', 65000, '#09c4ca'))

    let chart4 = echarts.init(echarts4.value, null, { devicePixelRatio: 2 })
    chart4.setOption(getOptions(32563, '完成率', 45000, '#09c4ca'))

    let chart5 = echarts.init(echarts5.value, null, { devicePixelRatio: 2 })
    chart5.setOption(getOptions(12563, '完成率', 35000, '#09c4ca'))

    let chart6 = echarts.init(echarts6.value, null, { devicePixelRatio: 2 })
    chart6.setOption(options.echarts6)

    window.addEventListener("resize", function () {
        chart1.resize()
        chart2.resize()
        chart3.resize()
        chart4.resize()
        chart5.resize()
    })
})
</script>

<style lang="less" scoped>

@import url('./style/index.less');
</style>