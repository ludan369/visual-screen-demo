<template>
    <div class="main">
        <div class="main_con">
            <!-- 上 -->
            <div class="main_top">
                <!-- 上左 -->
                <div class="main_top_left">
                    <div class="main_top_left_top">
                    </div>
                    <div class="main_top_left_top main_top_left_bottom"></div>
                </div>
                <!-- 上中 -->
                <div class="main_top_middle">
                    <div class="main_top_middle_top_title">
                    </div>
                    <div class="main_top_middle_num_title">案件公开数量</div>
                    <div class="main_top_middle_num"></div>
                    <div class="main_top_middle_bottom">
                        <div class="main_top_middle_bottom_echarts">

                        </div>
                        <div class="main_top_middle_bottom_echarts main_top_middle_bottom_echarts_right">

                        </div>
                    </div>
                </div>
                <!-- 上右 -->
                <div class="main_top_left main_top_right">
                    <div class="main_top_left_top">
                    </div>
                    <div class="main_top_left_top main_top_left_bottom"></div>
                </div>
            </div>

            <!-- 中 -->
            <div class="main_middle">
                <div v-for="i in 5" class="main_middle_list">
                </div>
            </div>

            <!-- 下 -->
            <div class="main_bottom">
                <div class="main_bottom_top">
                    <div v-for="i in 3" class="main_bottom_top_list"></div>
                </div>
                <div class="main_bottom_bottom">
                    <div class="main_bottom_b_left"></div>
                    <div class="main_bottom_b_middle1"></div>
                    <div class="main_bottom_b_middle2"></div>
                    <div class="main_bottom_b_right"></div>
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
    background: white;
}

.main_top {
    width: 100%;
    height: 37%;
}

.main_top_left {
    float: left;
    width: 17.3%;
    height: 100%;
    background: gold;
}

.main_top_left_top {
    position: relative;
    width: 100%;
    height: 46%;
    background: green;
}

.main_top_left_bottom {
    margin-top: 4%;
}

.main_top_middle {
    float: left;
    width: 63%;
    height: 100%;
    margin-left: 1.2%;
    background: gold;
}

.main_top_right {
    float: right;
    background: gold;
}

.main_middle {
    height: 7.1%;
    width: 100%;
    background: goldenrod;
}

.main_bottom {
    height: 55.9%;
    width: 100%;
    background: yellowgreen;
}

.main_top_middle_top_title {
    position: relative;
    width: 100%;
    text-align: center;
    font-size: 1.7vw;
    font-weight: bold;
    color: #0EFCFF;
    height: 14%;
    background: green;
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
    background: green;
}

.main_top_middle_bottom {
    float: left;
    width: 100%;
    height: 49.8%;
    margin-top: .5%;
    background: green;
}

.main_top_middle_bottom_echarts {
    position: relative;
    float: left;
    width: 49%;
    height: 100%;
    background: rebeccapurple;
}

.main_top_middle_bottom_echarts_right {
    float: right;
}

.main_middle_list {
    position: relative;
    float: left;
    width: 18.5%;
    height: 100%;
    background: blue;
    margin-left: 1.875%;
    // box-shadow: 1px 2px 10px 1px rgba(14, 252, 255, 0.53), inset 5px 4px 100px 1px rgba(14, 252, 255, 0.34);
}

.main_middle_list:nth-child(1) {
    margin-left: 0;
}

.main_bottom_top {
    float: left;
    width: 100%;
    height: 36.5%;
    margin-top: 1.5%;
    background: green
}

.main_bottom_bottom {
    float: left;
    width: 100%;
    height: 54%;
    margin-top: 1%;
    background: blueviolet
}

.main_bottom_top_list {
    position: relative;
    float: left;
    width: 32%;
    height: 100%;
    margin-left: 2%;
    background: yellow;
}

.main_bottom_top_list:nth-child(1) {
    margin-left: 0;
}

.main_bottom_b_left,
.main_bottom_b_right {
    position: relative;
    float: left;
    width: 17.3%;
    height: 100%;
    background: yellow;
}

.main_bottom_b_left img {
    position: absolute;
    width: 100%;
    height: 100%;
}

.main_bottom_b_middle1,
.main_bottom_b_middle2 {
    position: relative;
    float: left;
    width: 30%;
    height: 100%;
    margin-left: 1.8%;
    background: yellow;
}

.main_bottom_b_right {
    margin-left: 1.8%;
}
</style>
