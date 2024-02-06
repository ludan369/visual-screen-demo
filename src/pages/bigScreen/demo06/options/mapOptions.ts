/**
 * @param mapData 鼠标悬浮的数据
 * @param mapName 地图注册的名字，echarts.registerMap('name', map)中的name
 * @param mapLightData 地图高亮的数据
 * @param mapConfig 地图的自定义配置，可以配置zoom,top等各个地图的不同适配
 */
export function mapOptions(mapData: any, mapName: string, mapLightData: any, mapConfig: { [key: string]: any }): { [key: string]: any } {
    return {
        tooltip: {
            triggerOn: 'mousemove',
            formatter: function (params: any) {
                // let regionName = params.name
                // let regionData = mapData[regionName]
                // if (regionData) {
                //     return `${regionName}<br>门/急诊人数: ${regionData.outp_count}<br>住院人数: ${regionData.inp_count}`
                // }
                // return regionName
                return params
            }
        },
        geo: {
            map: mapName,
            roam: false, //是否允许缩放
            zoom: mapConfig.zoom,
            top: mapConfig.top,
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
                nameProperty: 'adcoadcodede',
                zlevel: 2,
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: mapLightData,
                symbolSize: function (val: any) {
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
}