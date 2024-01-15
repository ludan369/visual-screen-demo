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

                </div>
                <!-- 上右 -->
                <div class="main_top_left main_top_right">

                </div>
            </div>

            <!-- 中 -->
            <div class="main_middle">

            </div>

            <!-- 下 -->
            <div class="main_bottom">

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
</style>
