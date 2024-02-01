<template>
    <div ref="map" style="height: 800px;padding-top: 80px;"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import China from '@/pages/chartsModules/json/China.json'
import * as echarts from "echarts"

const options = {
    geo: {
      map: 'china',
      roam: false, //是否允许缩放
      zoom: 1.2, //默认显示级别
      itemStyle: {
        normal: {
          borderColor: '#2980b9',
          borderWidth: 1,
          areaColor: '#12235c'
        },
        emphasis: {
          areaColor: 'rgb(236, 112, 74)',
          borderWidth: 0,
          color: 'green'
        }
      },
      label: {
        show: true,
        color: '#ffffff',
        emphasis: {
          color: 'white',
          show: false
        }
      },
    },
    series: [
      {
        zlevel: 2,
        type: 'effectScatter',
        coordinateSystem: 'geo',
        data: [],
        symbolSize: function (val:any) {
          return 15
        },
        showEffectOn: 'render',
        rippleEffect: {
          brushType: 'stroke',
        },
        hoverAnimation: true,
        label: {
          normal: {
            formatter: '{b}',
            position: 'right',
            show: false,
            color: '#fff'
          },
        },
        itemStyle: {
          normal: {
            color: '#1DE9B6',
            shadowBlur: 10,
            shadowColor: '#1DE9B6',
          },
        },
      },
    ]
  }

const map = ref()
onMounted(() => {
    let mapCharts = echarts.init(map.value);
    // @ts-ignore
    echarts.registerMap('china', China)
    mapCharts.setOption(options)
})

</script>

<style scoped></style>
