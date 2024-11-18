import * as echarts from "echarts"

export let options = {
    echarts1: echarts1(),
    mapEcharts1: mMapEcharts1(),
}

function echarts1(): { [key: string]: any } {
    let data = [{
        title: '**省'
    },
    ['本周'],
    [{
        name: '文本1',
        max: 150
    }, {
        name: '文本2',
        max: 150
    }, {
        name: '文本3',
        max: 150
    }, {
        name: '文本4',
        max: 150
    }, {
        name: '文本5',
        max: 150
    }],
    [43, 100, 28, 3, 150],
    ]
    return {
        color: ['#9DD060', '#35C96E', '#4DCEF8'],
        tooltip: {},
        radar: {
            center: ['50%', '50%'],
            radius: ["25%", "70%"],

            name: {
                textStyle: {
                    color: '#72ACD1'
                }
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.0',
                    width: 2
                }
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0.2)',
                    width: 1,
                    type: 'dotted'
                },
            },
            splitArea: {
                areaStyle: {
                    color: ['rgba(255,255,255,.1)', 'rgba(255,255,255,0)']
                }
            },
            indicator: data[2]
        },
        series: [{
            name: '',
            type: 'radar',
            data: [{
                areaStyle: {
                    normal: {
                        opacity: 0.3,
                    }
                },
                value: data[3],
                // @ts-ignore
                name: data[1][0]
            },
            {
                areaStyle: {
                    normal: {
                        opacity: 0.3,
                    }
                },
                value: data[4],
                // @ts-ignore
                name: data[1][1]
            },
            {
                areaStyle: {
                    normal: {
                        opacity: 0.3,
                    }
                },
                value: data[5],
                // @ts-ignore
                name: data[1][2]
            }
            ]
        }]
    }
}

function mMapEcharts1(): { [key: string]: any } {
    return {
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
}