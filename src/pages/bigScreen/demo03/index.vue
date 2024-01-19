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
                        </div>
                    </div>
                    <div class="main_top_left_top main_top_left_bottom">
                        <img src="../../../assets/images/box/main_top_left.png" />
                        <div class="main_top_left_top_title">XX信息员添加数据展示</div>
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
                                <div id="threeTasksId" class="main_top_echarts_pie"></div>
                            </div>
                        </div>
                        <div class="main_top_middle_bottom_echarts main_top_middle_bottom_echarts_right">
                            <img class="title_bg" src="../../../assets/images/box/main_top_bottom.png">
                            <div class="main_top_echarts_con">
                                <div class="main_top_echarts_con_title">XX公开数量占比</div>
                                <div id="publicityId" class="main_top_echarts_pie"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 上右 -->
                <div class="main_top_left main_top_right">
                    <div class="main_top_left_top">
                        <img src="../../../assets/images/box/main_top_left.png" />
                        <div class="main_top_left_top_title">公开数据展示</div>
                    </div>
                    <div class="main_top_left_top main_top_left_bottom">
                        <img src="../../../assets/images/box/main_top_left.png" />
                        <div class="main_top_left_top_title">XXXX数量类型占比</div>
                    </div>
                </div>
            </div>

            <!-- 中 -->
            <div class="main_middle">
                <div v-for="i in 5" class="main_middle_list">
                    <img src="../../../assets/images/box/main_middle.png">
                    <div class="main_list_title">XXX镇</div>
                    <span class="main_list_title_num">0</span>
                </div>
            </div>

            <!-- 下 -->
            <div class="main_bottom">
                <div class="main_bottom_top">
                    <div v-for="i in 3" class="main_bottom_top_list">
                        <img src="../../../assets/images/box/main_bottopm_top1.png">
                        <div class="main_bottom_t_l_title">XX指南</div>
                    </div>
                </div>
                <div class="main_bottom_bottom">
                    <div class="main_bottom_b_left">
                        <img src="../../../assets/images/box/main_bottom_bottom.png">
                        <div class="main_bottom_b_title">XXXX数量信息</div>
                        <div id="coverageId" class="main_bottom_b_con"></div>
                    </div>
                    <div class="main_bottom_b_middle1">
                        <img src="../../../assets/images/box/main_bootm_middle.png">
                        <div class="main_bottom_b_title">关注XXXX占比</div>
                        <div id="contentId" class="main_bottom_b_con main_bottom_b_con2"></div>
                    </div>
                    <div class="main_bottom_b_middle2">
                        <img src="../../../assets/images/box/main_bootm_middle.png">
                        <div class="main_bottom_b_title">XXXX发布量</div>
                        <div id="publicNumId" class="main_bottom_b_con main_bottom_b_con2"></div>
                    </div>
                    <div class="main_bottom_b_right">
                        <img src="../../../assets/images/box/main_bottom_bottom.png">
                        <div class="main_bottom_b_title">XXXX数量信息</div>
                        <div id="coverageId" class="main_bottom_b_con main_bottom_b_con2"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
.main {
    width: 100%;
    height: 100%;
    font-size: 12px;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #1D2B56;
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
    // box-shadow: 1px 2px 10px 1px rgba(14, 252, 255, 0.53), inset 5px 4px 100px 1px rgba(14, 252, 255, 0.34);
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

.main_top_left_top_con {
    width: 92%;
    height: 71%;
    margin: auto;
    margin-top: 3%;
    color: white;
    /* margin-left: 4%; */
    /* text-indent: .5vw; */
    font-size: .7vw;
    /* letter-spacing: .15vw; */
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
</style>
