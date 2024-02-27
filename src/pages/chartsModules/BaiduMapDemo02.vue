<template>
    <div id="allmap"></div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { loadBMapScript } from '@/pages/chartsModules/utils/mapUtils'

onMounted(() => {
    loadBMapScript('5ieMMexWmzB9jivTq6oCRX9j')
        .then((BMapGL) => {
            // 创建Map实例
            // @ts-ignore
            const map = new window.BMapGL.Map('allmap')
            // 创建点坐标
            // @ts-ignore
            const point = new window.BMapGL.Point(116.404, 39.915)
            // 创建Point点标记
            // @ts-ignore
            const pointMarker = new window.BMapGL.Marker(new window.BMapGL.Point(116.404, 39.915))
            // 地图设置中心点和放大级别
            map.centerAndZoom(point, 10)
            // 地图添加点标记
            map.addOverlay(pointMarker)
            // 鼠标滚轮
            map.enableScrollWheelZoom()
        })
        .catch(() => {
            console.log('地图加载失败')
        })
})

</script>

<style scoped>
#allmap {
    width: 100%;
    height: 100%;
}
</style>
