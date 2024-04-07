<template>
    <!-- 底层背景动画-开始 -->
    <div id="animations">
        <div class="animation animation1">
            <div class="animate1"></div>
            <div class="animate2"></div>
            <div class="animate3"></div>
        </div>
        <div class="animation animation2">
            <div class="animate1"></div>
            <div class="animate2"></div>
            <div class="animate3"></div>
        </div>
        <div class="animation animation3 fanzhuan">
            <div class="animate1"></div>
            <div class="animate2"></div>
            <div class="animate3"></div>
        </div>
        <div class="animation animation4">
            <div class="animate1"></div>
            <div class="animate2"></div>
            <div class="animate3"></div>
        </div>
        <div class="animation animation5 fanzhuan">
            <div class="animate1"></div>
            <div class="animate2"></div>
            <div class="animate3"></div>
        </div>
        <div class="animation animation6">
            <div class="animate1"></div>
            <div class="animate2"></div>
            <div class="animate3"></div>
        </div>
        <div class="animation animation7 fanzhuan">
            <div class="animate1"></div>
            <div class="animate2"></div>
            <div class="animate3"></div>
        </div>
        <div class="animation animation8">
            <div class="animate1"></div>
            <div class="animate2"></div>
            <div class="animate3"></div>
        </div>
        <div class="animation animation9 fanzhuan">
            <div class="animate1"></div>
            <div class="animate2"></div>
            <div class="animate3"></div>
        </div>
        <div class="animation animation10">
            <div class="animate1"></div>
            <div class="animate2"></div>
            <div class="animate3"></div>
        </div>
    </div>
    <!-- 底层背景动画-结束 -->
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
/*背景动画-开始*/
#animations {
    position: absolute;
    width: 3840px;
    height: 2160px;
    overflow: hidden;
}

.animation {
    position: absolute;
}

.animation1 {
    left: 1%;
    top: 1%;
    transform: scale(1);
}

.animation2 {
    left: 0.5%;
    bottom: 13%;
    transform: scale(0.5);
}

.animation3 {
    left: 20%;
    top: 60%;
    transform: scale(1);
}

.animation4 {
    left: 30%;
    top: 15%;
    transform: scale(.9);
}

.animation5 {
    left: 45%;
    top: 2%;
    transform: scale(0.3);
}

.animation6 {
    left: 60%;
    top: -2%;
    transform: scale(.8);
}

.animation7 {
    left: 70%;
    top: 40%;
    transform: scale(1);
}

.animation8 {
    right: 12%;
    top: 8%;
    transform: scale(1.1);
}

.animation9 {
    left: 90%;
    bottom: 12%;
    transform: scale(1);
}

.animation10 {
    left: 50%;
    top: 80%;
    transform: scale(1.5);
}

.animation10 div {
    animation-direction: reverse;
}

.animation div {
    position: absolute;
    top: 0;
    left: 0;
    width: 618px;
    height: 618px;
    border-radius: 50%;
    animation: move linear infinite;
    opacity: .3;
    filter: alpha(opacity=30);
}

.animation .animate1 {
    background: url("@/assets/images/icon/1.png") no-repeat;
    background-size: 100%;
    animation-duration: 30s;
}

.animation .animate2 {
    background: url("@/assets/images/ico/2.png") no-repeat;
    background-size: 100%;
    animation-duration: 20s;
    animation-direction: reverse;
}

.animation .animate3 {
    background: url("@/assets/images/ico/3.png") no-repeat;
    background-size: 100%;
    animation-duration: 15s;
}

.fanzhuan .animate1 {
    animation-direction: reverse;
    animation-duration: 25s;
}

.fanzhuan .animate2 {
    animation-direction: normal;
    animation-duration: 15s;
}

.fanzhuan .animate3 {
    animation-direction: reverse;
    animation-duration: 10s;
}

@keyframes move {
    0% {
        transform: rotate(0deg)
    }

    100% {
        transform: rotate(360deg)
    }
}

/*背景动画-结束*/
</style>
