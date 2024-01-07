import * as echarts from "echarts"

let options = {
    echarts1: echarts1(),
    echarts2: echarts2(),
    echarts3: echarts3(),
    echarts4: echarts4(),
    echarts5: echarts5(),
    echarts6: echarts6(),
    echarts7: echarts7(),
}

function echarts1(): { [key: string]: any } {
    return {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: '#dddc6b'
                }
            }
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLabel: {
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: 14,
                },
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.1)'
                }

            },

            data: ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00']

        }, {

            axisPointer: { show: false },
            axisLine: { show: false },
            position: 'bottom',
            offset: 20,



        }],

        yAxis: [{
            type: 'value',
            axisTick: { show: false },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.1)'
                }
            },
            axisLabel: {
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: 14,
                },
            },

            splitLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.1)',

                }
            }
        }],
        series: [
            {
                name: '标题名称',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 10,
                showSymbol: true,
                lineStyle: {

                    normal: {
                        color: 'rgba(228, 228, 126, 1)',
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(228, 228, 126, .8)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(228, 228, 126, 0.1)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#dddc6b',
                        borderColor: 'rgba(221, 220, 107, .1)',
                        borderWidth: 12
                    }
                },
                data: [600, 200, 600, 200, 400, 200, 400, 300, 400, 300, 400, 300, 200, 400, 200]

            }

        ]

    }
}

function echarts2(): { [key: string]: any } {
    return {
        tooltip: {
            trigger: 'axis',
            axisPointer: { type: 'shadow' },

        },
        legend: {
            x: 'center',
            y: '0',
            icon: 'circle',
            itemGap: 8,
            textStyle: { color: 'rgba(255,255,255,.5)' },
            itemWidth: 10,
            itemHeight: 10,
        },
        xAxis: {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisLine: { show: false },

            axisLabel: {
                textStyle: {
                    color: 'rgba(255,255,255,.6)',
                    fontSize: 14
                }
            },
        },

        yAxis: {
            type: 'value',
            splitNumber: 4,
            axisLine: { show: false },
            axisTick: { show: false },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255,255,255,0.05)'
                }
            },
            axisLabel: {
                textStyle: {
                    color: 'rgba(255,255,255,.6)',
                    fontSize: 14
                },
            },
        },
        series: [{
            name: '字段1',
            type: 'bar',
            barWidth: '15%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#8bd46e'
                    }, {
                        offset: 1,
                        color: '#03b48e'
                    }]),
                    barBorderRadius: 11,
                }

            },
            data: [123, 154, 234, 321, 120, 390, 634, 123, 154, 234, 321, 108]

        },
        {
            name: '字段2',
            type: 'bar',
            barWidth: '15%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#3893e5'
                    }, {
                        offset: 1,
                        color: '#248ff7'
                    }]),
                    barBorderRadius: 11,
                }
            },
            data: [63, 194, 234, 321, 278, 110, 534, 63, 194, 234, 321, 278]

        },
        {
            name: '字段3',
            type: 'bar',
            barWidth: '15%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#43cadd'
                    }, {
                        offset: 1,
                        color: '#0097c9'
                    }]),
                    barBorderRadius: 11,
                }
            },
            data: [23, 354, 334, 221, 178, 190, 234, 354, 334, 221, 178, 190]

        }

        ]
    }
}

function echarts3(): { [key: string]: any } {
    let txt = 81
    return {
        title: {
            text: txt + '%',
            x: 'center',
            y: 'center',
            textStyle: {
                fontWeight: 'normal',
                color: '#fff',
                fontSize: '18'
            }
        },
        color: 'rgba(255,255,255,.3)',

        series: [{
            name: 'Line 1',
            type: 'pie',
            clockWise: true,
            radius: ['65%', '80%'],
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            },
            hoverAnimation: false,
            data: [{
                value: txt,
                name: '已使用',
                itemStyle: {
                    normal: {
                        color: '#eaff00',
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                }
            }, {
                name: '未使用',
                value: 100 - txt
            }]
        }]
    }
}

function echarts4(): { [key: string]: any } {
    let txt = 35
    return {
        title: {
            text: txt + '%',
            x: 'center',
            y: 'center',
            textStyle: {
                fontWeight: 'normal',
                color: '#fff',
                fontSize: '18'
            }
        },
        color: 'rgba(255,255,255,.3)',

        series: [{
            name: 'Line 1',
            type: 'pie',
            clockWise: true,
            radius: ['65%', '80%'],
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            },
            hoverAnimation: false,
            data: [{
                value: txt,
                name: '已使用',
                itemStyle: {
                    normal: {
                        color: '#ea4d4d',
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                }
            }, {
                name: '未使用',
                value: 100 - txt
            }]
        }]
    }
}

function echarts5(): { [key: string]: any } {
    let txt = 25
    return {
        title: {
            text: txt + '%',
            x: 'center',
            y: 'center',
            textStyle: {
                fontWeight: 'normal',
                color: '#fff',
                fontSize: '18'
            }
        },
        color: 'rgba(255,255,255,.3)',

        series: [{
            name: 'Line 1',
            type: 'pie',
            clockWise: true,
            radius: ['65%', '80%'],
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            },
            hoverAnimation: false,
            data: [{
                value: txt,
                name: '已使用',
                itemStyle: {
                    normal: {
                        color: '#395ee6',
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                }
            }, {
                name: '未使用',
                value: 100 - txt
            }
            ]
        }]
    }
}

function echarts6(): { [key: string]: any } {
    return {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: '#dddc6b'
                }
            }
        },
        legend: {
            data: ['字段1', '字段2'],
            right: 'center',
            top: 0,
            textStyle: {
                color: "#fff"
            },
            itemWidth: 12,
            itemHeight: 10,
            // itemGap: 35
        },

        xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLabel: {
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: 14,
                },
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.1)'
                }

            },

            data: ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00']

        }, {

            axisPointer: { show: false },
            axisLine: { show: false },
            position: 'bottom',
            offset: 20,



        }],

        yAxis: [{
            type: 'value',
            axisTick: { show: false },
            // splitNumber: 6,
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.1)'
                }
            },
            axisLabel: {
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: 14,
                },
            },

            splitLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.1)'
                }
            }
        }],
        series: [
            {
                name: '字段1',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {

                    normal: {
                        color: 'rgba(228, 228, 126, 1)',
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(228, 228, 126, .8)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(228, 228, 126, 0.1)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#dddc6b',
                        borderColor: 'rgba(221, 220, 107, .1)',
                        borderWidth: 12
                    }
                },
                data: [600, 200, 600, 200, 400, 200, 400, 300, 400, 300, 400, 300, 200, 400, 200]
            }, {
                name: '字段2',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {

                    normal: {
                        color: 'rgba(255, 128, 128, 1)',
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(255, 128, 128,.8)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(255, 128, 128, .1)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#dddc6b',
                        borderColor: 'rgba(221, 220, 107, .1)',
                        borderWidth: 12
                    }
                },
                data: [300, 100, 300, 400, 300, 400, 300, 600, 200, 400, 200, 400, 100, 300, 400]

            },

        ]

    }
}

function echarts7(): { [key: string]: any } {
    return {

        tooltip: {
            trigger: 'axis'
        },
        radar: [{
            indicator: [{
                text: '盈利能力',
                max: 100
            }, {
                text: '发展水平',
                max: 100
            }, {
                text: '融资能力',
                max: 100
            }, {
                text: '技术能力',
                max: 100
            }, {
                text: '企业规模',
                max: 100
            }],
            textStyle: {
                color: 'red'
            },
            center: ['50%', '50%'],
            radius: '70%',
            startAngle: 90,
            splitNumber: 4,
            shape: 'circle',

            name: {
                padding: -5,
                formatter: '{value}',
                textStyle: {
                    fontSize: 14,
                    color: 'rgba(255,255,255,.6)'
                }
            },
            splitArea: {
                areaStyle: {
                    color: 'rgba(255,255,255,.05)'
                }
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.05)'
                }
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.05)'
                }
            }
        },],
        series: [{
            name: '雷达图',
            type: 'radar',
            tooltip: {
                trigger: 'item'
            },
            data: [{
                name: '园区平均值',
                value: [90, 80, 20, 10, 30],
                lineStyle: {
                    normal: {
                        color: '#03b48e',
                        width: 2,
                    }
                },
                areaStyle: {
                    normal: {
                        color: '#03b48e',
                        opacity: .4
                    }
                },
                symbolSize: 0,

            }, {
                name: '当前园区',
                value: [30, 20, 75, 80, 70],
                symbolSize: 0,
                lineStyle: {
                    normal: {
                        color: '#3893e5',
                        width: 2,
                    }
                },
                areaStyle: {
                    normal: {
                        color: 'rgba(19, 173, 255, 0.5)'
                    }
                }
            }]
        },]
    }
}

export default options