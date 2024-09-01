<template>
    <div class="boxall">
        <div :class="[ props.title ? 'alltitle' : 'hidden' ]" :style="{ color: props.titleColor }">{{ props.title }}</div>
        <div :class="[ props.title ? 'allnav' : 'allnavNoHeader' ]"> 
            <slot ></slot>
        </div>
        <div class="boxfoot"></div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    title: String,
    titleColor: {
        type: String,
        default: '#fff'
    }
});
</script>

<style scoped>
.boxall {
    border: 1px solid rgba(25, 186, 139, .17);
    background: rgba(255, 255, 255, .04);
    background-size: 100% auto;
    position: relative;
}

.boxall:before,
.boxall:after {
    position: absolute;
    width: 10px;
    height: 10px;
    content: "";
    border-top: 2px solid #02a6b5;
    top: 0;
}

.boxall:before,
.boxfoot:before {
    border-left: 2px solid #02a6b5;
    left: 0;
}

.boxall:after,
.boxfoot:after {
    border-right: 2px solid #02a6b5;
    right: 0;
}

.boxfoot {
    position: absolute;
    bottom: 0;
    width: 100%;
    left: 0;
}

.boxfoot:before,
.boxfoot:after {
    position: absolute;
    width: 10px;
    height: 10px;
    content: "";
    border-bottom: 2px solid #02a6b5;
    bottom: 0;
}

.alltitle {
    font-size: 18px;
    color: #fff;
    text-align: center;
    line-height: 30px;
}
.hidden {
    display: none;
}
.allnav {
    height: calc(100% - 30px);
}

.allnavNoHeader {
    height: 100%;
}
</style>
