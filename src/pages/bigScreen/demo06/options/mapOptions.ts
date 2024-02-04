export function mapOptions(mapData:any, mapName:string, mapLightData:any): { [key: string]: any } {
    return {
        tooltip: {
            triggerOn: 'mousemove',
            formatter: function (params:any) {
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
            zoom: 1.5, //默认显示级别
            top: '24%',
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
                show: false,
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
                data: mapLightData,
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
}