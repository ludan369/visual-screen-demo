<template>
    <div class="main">
        <el-card v-for="(i, index) in srcList" class="card">
            <img :src="srcList[index]" class="image" />
            <div style="padding: 14px">
                <span> {{ index < 9 ? 'demo0' + (index + 1) : 'demo' + (index + 1) }} </span>
                        <div class="bottom">
                            <div class="tags">
                                <el-tag type="primary">Tag 1</el-tag>
                                <el-tag style="margin-left: 1px;" type="success">Tag 2</el-tag>
                                <el-tag style="margin-left: 1px;" type="info">Tag 3</el-tag>
                                <el-tag style="margin-left: 1px;" type="warning">Tag 4</el-tag>
                                <el-tag style="margin-left: 1px;" type="danger">Tag 5</el-tag>
                            </div>
                            <el-button @click="clickToPath(index + 1)" text class="button">点击前往</el-button>
                        </div>
            </div>
        </el-card>
        <el-backtop target="main" />
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from "vue-router";

const router = useRouter()
const srcList = reactive([
    './images/preview/demo01.png',
    './images/preview/demo02.png',
    './images/preview/demo03.png',
    './images/preview/demo04.png',
    './images/preview/demo05.png',
    './images/preview/demo06.png',
    './images/preview/demo07.png'
])

function clickToPath(index: number) {
    router.push({
        name: index < 9 ? 'demo0' + index : 'demo' + index
    })
}

</script>

<style scoped>
.main {
    width: 100%;
    height: 100%;
}

.card {
    width: 31%;
    height: 35%;
    margin-top: 1%;
    margin-left: 2%;
    float: left;
}

.tags {
    font-size: 12px;
    color: #999;
}

.bottom {
    margin-top: 13px;
    line-height: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.button {
    padding: 0;
    min-height: auto;
}

.image {
    width: 80%;
    display: block;
}
</style>