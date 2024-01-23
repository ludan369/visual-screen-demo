<template>
    <div class="main">
        <div class="main_con">
            <!-- 上 -->
            <div class="main_top">
                <!-- 上左 -->
                <div class="main_top_left">
                    <div class="main_top_left_top">
                        <img src="../../../assets/images/box/main_top_left.png" />
                        <div class="main_top_left_top_title">公开数据展示</div>
                        <div class="main_top_left_top_con">
                            <div v-for="i in 3" class="main_top_left_top_con_list">
                                <span class="main_top_left_c_l_n ">{{ i }}</span>
                                <p>XX信息</p>
                            </div>
                            <div class="main_top_left_top_con_left">
                                <div class="main_top_left_t_c_l_left">
                                    <span class="main_top_left_c_l_n ">0</span>
                                    <p>村务公开</p>
                                </div>
                                <div class="main_top_left_t_c_l_right">
                                    <span class="main_top_left_c_l_n ">0</span>
                                    <p>居务公开</p>
                                </div>
                            </div>
                            <div class="main_top_left_top_con_right main_top_left_top_con_right2">
                                <div class="main_top_left_t_c_r_left">
                                    <span class="main_top_left_c_l_n">0</span>
                                    <p>占位公开</p>
                                </div>
                                <div class="main_top_left_t_c_r_right">
                                    <span class="main_top_left_c_l_n">0</span>
                                    <p>占位公开</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="main_top_left_top main_top_left_bottom">
                        <img src="../../../assets/images/box/main_top_left.png" />
                        <div class="main_top_left_top_title">XX信息员添加数据展示</div>
                        <div ref="echarts1" class="main_top_left_top_con"></div>
                    </div>
                </div>
                <!-- 上中 -->
                <div class="main_top_middle">
                    <div class="main_top_middle_top_title">
                        <img class="title_bg" src="../../../assets/images/head/title_bg.png">
                        政务服务大数据可视化监管平台
                        <span class="title_web">管理系统</span>
                        <span class="title_admin">web网页</span>
                    </div>
                    <div class="main_top_middle_num_title">案件公开数量</div>
                    <div class="main_top_middle_num">
                        <div v-for="i in 5" class="main_top_middle_num_list">
                            <img src="../../../assets/images/box/center_num.png">
                            <p>{{ i }}</p>
                        </div>
                    </div>
                    <div class="main_top_middle_bottom">
                        <div class="main_top_middle_bottom_echarts">
                            <img class="title_bg" src="../../../assets/images/box/main_top_bottom.png">
                            <div class="main_top_echarts_con">
                                <div class="main_top_echarts_con_title">XX公开数量占比</div>
                                <div ref="echarts2" class="main_top_echarts_pie"></div>
                            </div>
                        </div>
                        <div class="main_top_middle_bottom_echarts main_top_middle_bottom_echarts_right">
                            <img class="title_bg" src="../../../assets/images/box/main_top_bottom.png">
                            <div class="main_top_echarts_con">
                                <div class="main_top_echarts_con_title">XX公开数量占比</div>
                                <div ref="echarts3" class="main_top_echarts_pie"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 上右 -->
                <div class="main_top_left main_top_right">
                    <div class="main_top_left_top">
                        <img src="../../../assets/images/box/main_top_left.png" />
                        <div class="main_top_left_top_title">公开数据展示</div>
                        <div class="main_top_left_top_con">
                            <div class="main_top_left_top_con_left">
                                <span class="daysData">0</span>
                                <p>今日公开</p>
                            </div>
                            <div class="main_top_left_top_con_right">
                                <span class="weekData">0</span>
                                <p>本周公开</p>
                            </div>
                            <div class="main_top_left_top_con_list">
                                <span class="monthData">0</span>
                                <p>本月公开</p>
                            </div>
                            <div class="main_top_left_top_con_list">
                                <span class="someThing">0</span>
                                <p>办事指南</p>
                            </div>
                            <div class="main_top_left_top_con_list">
                                <span class="policyData">0</span>
                                <p>政策解读</p>
                            </div>
                        </div>
                    </div>
                    <div class="main_top_left_top main_top_left_bottom">
                        <img src="../../../assets/images/box/main_top_left.png" />
                        <div class="main_top_left_top_title">XXXX数量类型占比</div>
                        <div ref="echarts4" class="main_top_left_top_con">
                        </div>
                    </div>
                </div>
            </div>

            <!-- 中 -->
            <div class="main_middle">
                <div v-for="i in 5" class="main_middle_list">
                    <img src="../../../assets/images/box/main_middle.png">
                    <div class="main_list_title">XXX镇</div>
                    <span class="main_list_title_num">{{ i }}</span>
                </div>
            </div>

            <!-- 下 -->
            <div class="main_bottom">
                <div class="main_bottom_top">
                    <div class="main_bottom_top_list">
                        <img src="../../../assets/images/box/main_bottopm_top1.png">
                        <div class="main_bottom_t_l_title">XX指南</div>
                        <div class="main_bottom_t_l_con" style="top: -15px">
                            <ul style="list-style: none;">
                                <li v-for="i in 5">
                                    <div class="main_bottom_t_l_main_list">
                                        <div class="main_bottom_t_list_title">xxxxxxxxxxxxx</div>
                                        <div class="main_bottom_t_list_time">2024/1/21 </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="main_bottom_top_list">
                        <img src="../../../assets/images/box/main_bottopm_top1.png">
                        <div class="main_bottom_t_l_title">XX公开占比</div>
                        <div ref="echarts5" class="main_bottom_t_l_chart"></div>
                    </div>
                    <div class="main_bottom_top_list">
                        <img src="../../../assets/images/box/main_bottopm_top1.png">
                        <div class="main_bottom_t_l_title">XX政策</div>
                        <div class="main_bottom_t_l_con" style="top: -15px">
                            <div class="main_bottom_t_l_main2">
                                <ul style="list-style: none;">
                                    <li v-for="i in 5">
                                        <div class="main_bottom_t_l_main_list">
                                            <div class="main_bottom_t_list_title">xxxxxxxxxxxxx</div>
                                            <div class="main_bottom_t_list_time">2024/1/21 </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="main_bottom_bottom">
                    <div class="main_bottom_b_left">
                        <img src="../../../assets/images/box/main_bottom_bottom.png">
                        <div class="main_bottom_b_title">XXXX数量信息</div>
                        <div ref="echarts6" class="main_bottom_b_con"></div>
                    </div>
                    <div class="main_bottom_b_middle1">
                        <img src="../../../assets/images/box/main_bootm_middle.png">
                        <div class="main_bottom_b_title">关注XXXX占比</div>
                        <div ref="echarts7" class="main_bottom_b_con main_bottom_b_con2"></div>
                    </div>
                    <div class="main_bottom_b_middle2">
                        <img src="../../../assets/images/box/main_bootm_middle.png">
                        <div class="main_bottom_b_title">XXXX发布量</div>
                        <div ref="echarts8" class="main_bottom_b_con main_bottom_b_con2"></div>
                    </div>
                    <div class="main_bottom_b_right">
                        <img src="../../../assets/images/box/main_bottom_bottom.png">
                        <div class="main_bottom_b_title">XXXX数量信息</div>
                        <div ref="echarts9" class="main_bottom_b_con main_bottom_b_con2"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Particles id="tsparticles" :options="poptions" />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as echarts from "echarts"
import options from '../demo03/options/options'

// 基础信息
let echarts1 = ref()
let echarts2 = ref()
let echarts3 = ref()
let echarts4 = ref()
let echarts5 = ref()
let echarts6 = ref()
let echarts7 = ref()
let echarts8 = ref()
let echarts9 = ref()

onMounted(() => {
    let chart1 = echarts.init(echarts1.value)
    chart1.setOption(options.echarts1)

    let chart2 = echarts.init(echarts2.value)
    chart2.setOption(options.echarts2)

    let chart3 = echarts.init(echarts3.value)
    chart3.setOption(options.echarts2)

    let chart4 = echarts.init(echarts4.value)
    chart4.setOption(options.echarts4)

    let chart5 = echarts.init(echarts5.value)
    chart5.setOption(options.echarts5)

    let chart6 = echarts.init(echarts6.value)
    chart6.setOption(options.echarts6)

    let chart7 = echarts.init(echarts7.value)
    chart7.setOption(options.echarts7)

    let chart8 = echarts.init(echarts8.value)
    chart8.setOption(options.echarts8)

    let chart9 = echarts.init(echarts9.value)
    chart9.setOption(options.echarts6)

    window.addEventListener("resize", function () {
        chart1.resize()
        chart2.resize()
        chart3.resize()
        chart4.resize()
        chart5.resize()
        chart6.resize()
        chart7.resize()
        chart8.resize()
        chart9.resize()
    })
})

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
</script>

<style lang="less" scoped>
#tsparticles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -100; 
  background-color: #1D2B56;
}
.main {
    width: 100%;
    height: 100%;
    font-size: 12px;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    
}

.main_con {
    position: absolute;
    width: 97%;
    height: 95%;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    // background: white;
}

.main_top {
    width: 100%;
    height: 37%;
}

.main_top_left {
    float: left;
    width: 17.3%;
    height: 100%;
    // background: gold;
}

.main_top_left_top {
    position: relative;
    width: 100%;
    height: 46%;
    // background: green;
}

.main_top_left_top img {
    position: absolute;
    width: 100%;
    height: 100%;
}

.main_top_left_top_title {
    text-align: center;
    color: #0EFCFF;
    font-size: .75vw;
    padding-top: .2vw;
}

.main_top_left_bottom {
    margin-top: 4%;
}

.main_top_middle {
    float: left;
    width: 63%;
    height: 100%;
    margin-left: 1.2%;
    // background: gold;
}

.main_top_right {
    float: right;
    // background: gold;
}

.main_middle {
    height: 7.1%;
    width: 100%;
    // background: goldenrod;
}

.main_bottom {
    height: 55.9%;
    width: 100%;
    // background: yellowgreen;
}

.main_top_middle_top_title {
    position: relative;
    width: 100%;
    text-align: center;
    font-size: 1.7vw;
    font-weight: bold;
    color: #0EFCFF;
    height: 14%;
}

.main_top_middle_top_title .title_bg {
    position: absolute;
    left: 7%;
    top: -20%;
    width: 86%;
    height: 140%;
}

.main_top_echarts_con {
    width: 92%;
    height: 82%;
    margin: 2% auto;
    /* background: white; */
}

.main_top_echarts_con_title {
    font-size: .8vw;
    color: #0EFCFF;
}

.main_top_echarts_pie {
    width: 100%;
    height: 90%;
}

.title_web {
    position: absolute;
    right: -.8%;
    top: 0;
    padding: .5% 2%;
    font-size: .7vw;
    color: #0EFCFF;
    border: 1px solid #0EFCFF;
    -webkit-transform-origin-x: 0;
    transform: scale(0.9);
    -webkit-transform: scale(0.9);
}

.title_admin {
    position: absolute;
    left: 0;
    top: 0;
    padding: .5% 2%;
    font-size: .7vw;
    color: #0EFCFF;
    border: 1px solid #0EFCFF;
    -webkit-transform-origin-x: 0;
    transform: scale(0.9);
    -webkit-transform: scale(0.9);
}

.main_top_middle_num_title {
    float: left;
    color: #0EFCFF;
    font-size: 1.5vw;
    margin-left: 13%;
    line-height: 4.5vw;
    width: 18%;
    margin-top: .5vw;
}

.main_top_middle_num {
    float: left;
    width: 55%;
    height: 23%;
    margin: .7% auto;
    margin-top: 1.5%;
    // background: green;
}

.main_top_middle_num_list {
    position: relative;
    float: left;
    height: 100%;
    width: 12%;
    margin-left: 2.6%;
    font-size: 2vw;
    font-weight: bold;
    color: #0EFCFF;
    line-height: 240%;
}

.main_top_middle_num_list p {
    text-align: center;
}

.main_top_middle_num_list:nth-child(1) {
    margin-left: 0;
}

.main_top_middle_num_list img {
    position: absolute;
    width: 100%;
    height: 100%;
}

.main_top_middle_bottom {
    float: left;
    width: 100%;
    height: 49.8%;
    margin-top: .5%;
    // background: green;
}

.main_top_middle_bottom_echarts {
    position: relative;
    float: left;
    width: 49%;
    height: 100%;
    // background: rebeccapurple;
}

.main_top_middle_bottom_echarts img {
    position: absolute;
    width: 100%;
    height: 100%;
}

.main_top_middle_bottom_echarts_right {
    float: right;
}

.main_middle_list img {
    position: absolute;
    width: 100%;
    height: 100%;
}

.main_middle_list {
    position: relative;
    float: left;
    width: 18.5%;
    height: 100%;
    // background: blue;
    margin-left: 1.875%;
    box-shadow: 1px 2px 10px 1px rgba(14, 252, 255, 0.53), inset 5px 4px 100px 1px rgba(14, 252, 255, 0.34);
}

.main_middle_list:nth-child(1) {
    margin-left: 0;
}

.main_middle_list span {
    display: inline-block;
    width: 100%;
    font-size: 1.4vw;
    font-weight: bold;
    color: white;
    text-align: center;
    letter-spacing: .2vw;
    margin-top: -.5vw;
}

.main_list_title {
    font-size: .75vw;
    color: #0EFCFF;
    text-indent: .8vw;
    padding-top: .5vw;
}

.main_bottom_top {
    float: left;
    width: 100%;
    height: 36.5%;
    margin-top: 1.5%;
    // background: green
}

.main_bottom_bottom {
    float: left;
    width: 100%;
    height: 54%;
    margin-top: 1%;
    // background: blueviolet
}

.main_bottom_top_list {
    position: relative;
    float: left;
    width: 32%;
    height: 100%;
    margin-left: 2%;
    // background: yellow;
}

.main_bottom_top_list:nth-child(1) {
    margin-left: 0;
}

.main_bottom_top_list img {
    position: absolute;
    width: 100%;
    height: 100%;
}

.main_bottom_t_l_title {
    z-index: 80;
    position: relative;
    width: 100%;
    padding-top: 1.6vw;
    font-size: .8vw;
    color: white;
    text-indent: 3.2vw;
}

.main_bottom_t_l_chart {
    z-index: 77;
    position: relative;
    width: 90%;
    height: 84%;
    margin: auto;
    margin-top: -5%;
}

.main_bottom_t_l_con {
    z-index: 77;
    position: relative;
    width: 92%;
    height: 60%;
    margin: auto;
    margin-top: 3%;
    /* overflow: hidden; */
}

.main_bottom_t_l_main,
.main_bottom_t_l_main2 {
    width: 100%;
    /* height: 100%; */
}

.main_bottom_t_l_main_list {
    font-size: .7vw;
    line-height: 1.6vw;
    height: 1.6vw;
    color: white;
}

.main_bottom_t_list_title {
    float: left;
    width: 70%;
    height: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.main_bottom_t_list_time {
    float: left;
    width: 30%;
    height: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: right;
}

.main_bottom_t_l_main2 .main_bottom_t_l_main_list {
    font-size: .7vw;
    line-height: 1.6vw;
    height: 1.6vw;
    color: white;
}

.main_bottom_b_left,
.main_bottom_b_right {
    position: relative;
    float: left;
    width: 17.3%;
    height: 100%;
    // background: yellow;
}

.main_bottom_b_left img {
    position: absolute;
    width: 100%;
    height: 100%;
}

.main_bottom_b_right {
    margin-left: 1.8%;
}

.main_bottom_b_right img {
    position: absolute;
    width: 100%;
    height: 100%;
}

.main_bottom_b_title {
    font-size: .8vw;
    text-align: center;
    color: #0EFCFF;
    padding-top: .3vw;
}

.main_bottom_b_con {
    width: 90%;
    height: 75%;
    margin: auto;
    margin-top: 8%;
}

.main_bottom_b_con2 {
    height: 70%;
}

.main_bottom_b_middle1,
.main_bottom_b_middle2 {
    position: relative;
    float: left;
    width: 30%;
    height: 100%;
    margin-left: 1.8%;
    // background: yellow;
}

.main_bottom_b_middle1 img {
    position: absolute;
    width: 100%;
    height: 100%;
}

.main_bottom_b_middle2 img {
    position: absolute;
    width: 100%;
    height: 100%;
}

.main_top_right .main_top_left_top_con_left {
    float: left;
    height: 48%;
    width: 49%;
    background: #37D2D4;

}

.main_top_right .main_top_left_top_con_right {
    float: right;
    height: 48%;
    width: 49%;
    background: #19CA88;
}

.main_top_right .main_top_left_top_con_list {
    float: left;
    height: 48%;
    width: 32%;
    margin-left: 2%;
    margin-top: 1.5%;
}

.main_top_right .main_top_left_top_con_list:nth-child(3) {
    background: #858FF8;
    margin-left: 0;
}

.main_top_right .main_top_left_top_con_list:nth-child(4) {
    background: #2E8CFF;
}

.main_top_right .main_top_left_top_con_list:nth-child(5) {
    background: #FD9133;
}

.main_top_left_top_con {
    width: 92%;
    height: 71%;
    margin: auto;
    margin-top: 3%;
    color: white;
    margin-left: 4%;
    text-indent: .5vw;
    font-size: .7vw;
    letter-spacing: .15vw;
}

.main_top_left_top_con span {
    display: inline-block;
    margin-top: .4vw;
    text-indent: 0vw;
}

.main_top_left_top_con_list {
    float: left;
    height: 48%;
    width: 32%;
    text-align: center;
    margin-left: 2%;
}

.main_top_left_top_con_list .main_top_left_c_l_n {
    /* -webkit-transform-origin-x: 0; */
    transform: scale(0.8);
    -webkit-transform: scale(0.8);
}

.main_top_left_top_con_list p {
    /* -webkit-transform-origin-x: 0; */
    transform: scale(0.8);
    -webkit-transform: scale(0.8);
}

.main_top_left_top_con_list:nth-child(1) {
    background: #37D2D4;
    margin-left: 0;
}

.main_top_left_top_con_list:nth-child(2) {
    background: #19CA88;
}

.main_top_left_top_con_list:nth-child(3) {
    background: #858FF8;
}

.main_top_left_top_con_left {
    float: left;
    height: 48%;
    width: 49%;
    text-align: center;
    margin-top: 1.5%;
}

.main_top_left_top_con_left .main_top_left_c_l_n {
    /* -webkit-transform-origin-x: 0; */
    transform: scale(0.8);
    -webkit-transform: scale(0.8);
}

.main_top_left_top_con_left p {
    /* -webkit-transform-origin-x: 0; */
    transform: scale(0.8);
    -webkit-transform: scale(0.8);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.main_top_left_t_c_l_left,
.main_top_left_t_c_l_right,
.main_top_left_t_c_r_right,
.main_top_left_t_c_r_left {
    float: left;
    width: 48%;
    height: 100%;
    text-align: center;
    background: #FD9133;
    font-size: .7vw;
}

.main_top_left_t_c_l_right,
.main_top_left_t_c_r_right {
    background: #F6D10E;
    margin-left: 4%;
}

.main_top_left_t_c_r_right {
    background: #F6580E;
}

.main_top_left_t_c_r_left {
    background: #2E8CFF;
}

.main_top_left_top_con_right {
    float: right;
    height: 48%;
    width: 49%;
    text-align: center;
    margin-top: 1.5%;
}

.main_top_left_top_con_right .main_top_left_c_l_n {
    /* -webkit-transform-origin-x: 0; */
    transform: scale(0.8);
    -webkit-transform: scale(0.8);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.main_top_left_top_con_right p {
    /* -webkit-transform-origin-x: 0; */
    transform: scale(0.8);
    -webkit-transform: scale(0.8);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.main_top_left_top_con_right2 p {
    margin-top: -7%;
}
</style>
