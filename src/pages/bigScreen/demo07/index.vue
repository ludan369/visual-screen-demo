<template>
    <div class="main">
        <div class="header">
            <div class="nav left">
                <ul>
                    <li :class="{ 'nav_active': activeClass === 'home' }">
                        <a @click="togglePage('home')">首页</a>
                    </li>
                    <li :class="{ 'nav_active': activeClass === 'menu1' }">
                        <a @click="togglePage('menu1')">菜单一</a>
                    </li>
                    <li :class="{ 'nav_active': activeClass === 'menu2' }">
                        <a @click="togglePage('menu2')">菜单二</a>
                    </li>
                </ul>
            </div>
            <div class="header_center left">
                <h2><strong>xx区智慧旅游综合服务平台</strong></h2>
                <p class="color_font"><small>Comprehensive service platform for smart tourism</small></p>
            </div>
        </div>

        <div class="con_div">
            <div class="con_div_text">
                <div class="con_div_content">
                    <div class="con_div_content_01 left">
                        <img src="../../../assets/images/icon/info_1.png" class="left text01_img" />
                        <div class="left text01_div">
                            <p>车辆总数(辆)</p>
                            <p>12356</p>
                        </div>
                    </div>
                    <div class="con_div_content_02 right">
                        <img src="../../../assets/images/icon/info_2.png" class="left text01_img" />
                        <div class="left text01_div">
                            <p>车辆使用数(辆)</p>
                            <p>12356</p>
                        </div>
                    </div>
                </div>
                <div class="con_div_content">
                    <div class="con_div_content_01 left">
                        <img src="../../../assets/images/icon/info_4.png" class="left text01_img" />
                        <div class="left text01_div">
                            <p>行驶里程总数(km)</p>
                            <p class="sky">12356</p>
                        </div>
                    </div>
                    <div class="con_div_content_02 right">
                        <img src="../../../assets/images/icon/info_5.png" class="left text01_img" />
                        <div class="left text01_div">
                            <p>行驶里程平均数(km)</p>
                            <p class="sky">12356</p>
                        </div>
                    </div>
                </div>
                <div class="con_div_content">
                    <div class="con_div_content_01 left">
                        <img src="../../../assets/images/icon/info_6.png" class="left text01_img" />
                        <div class="left text01_div">
                            <p>行驶时长总数(s)</p>
                            <p class="org">12356</p>
                        </div>
                    </div>
                    <div class="con_div_content_02 right">
                        <img src="../../../assets/images/icon/info_7.png" class="left text01_img" />
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
                        <div class="div_any_title"><img src="../../../assets/images/icon/title_1.png">车辆类型统计 </div>
                    </div>
                    <div class="div_any_child div_height">
                        <div class="div_any_title"><img src="../../../assets/images/icon/title_2.png">车辆状态统计 </div>

                    </div>
                </div>
                <div class="div_any02 left">
                    <div class="div_any_child div_height_map">
                        <div class="div_any_title any_title_width"><img src="../../../assets/images/icon/title_3.png">车辆行驶地图 </div>
                    </div>
                </div>
                <div class="div_any01 right">
                    <div class="div_any_child div_height">
                        <div class="div_any_title"><img src="../../../assets/images/icon/title_4.png">车辆行驶统计 </div>
                    </div>
                    <div class="div_any_child div_height">
                        <div class="div_any_title"><img src="../../../assets/images/icon/title_5.png">车辆报警统计 </div>

                    </div>
                </div>
            </div>

            <div class="con_div_bottom">
                
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
let activeClass = ref('home');

function togglePage(componentName: string) {
    activeClass.value = componentName;
}

</script>

<style lang="less" scoped>
@import url('./style/index.less');
</style>
