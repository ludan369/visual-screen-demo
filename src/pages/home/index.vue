<template>
    <div class="main">
        <el-card v-for="(item, index) in bigScreenChildren" class="card">
            <img :src="bigScreenChildren[index].meta.desc.imgSrc" class="image" />
            <div style="padding: 14px">
                <span> {{ index as number < 10 ? 'demo0' + (index as number + 1) : 'demo' + (index as number + 1) }} </span>
                        <div class="bottom">
                            <div class="tags">
                                <el-tag v-for="(tag, i) in bigScreenChildren[index].meta.desc.tags" :key="i"
                                    style="margin-left: 1px;">{{ tag }}</el-tag>
                            </div>
                            <el-button @click="clickToPath(index as number + 1)" text class="button">点击前往</el-button>
                        </div>
            </div>
        </el-card>
        <el-backtop target="main" />
    </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router"

const router = useRouter()
let routes = router.getRoutes()
const bigScreenRoutes = routes.filter(route => route.name === 'bigScreen')
const bigScreenChildren:{ [key: string]: any } = bigScreenRoutes[0].children

function clickToPath(index: number) {
    router.push({
        name: index < 10 ? 'demo0' + index : 'demo' + index
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