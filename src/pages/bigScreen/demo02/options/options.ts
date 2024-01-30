import * as echarts from "echarts"

let options = {
    echarts1: echarts1(),
    echarts2: echarts2(),
    echarts3: echarts3(),
    echarts4: echarts4(),
    echarts5: echarts5(),
    echarts6: echarts6(),
    echarts7: echarts7(),
    echarts8: echarts8()
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
                    fontSize: 18,
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
                    fontSize: 18,
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
                    fontSize: 18
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
                    fontSize: 18
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
                    fontSize: 18,
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
                    fontSize: 18,
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
                    fontSize: 18,
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

function echarts8(): { [key: string]: any } {
    let dataText = [{
        name: '第一季度',
        type: 'line',
        smooth: true,
        symbolSize: 8,
        data: [127, 224, 120, 278, 227, 237],
        barWidth: '30%',
        itemStyle: {
            normal: {
                color: '#f0c725'
            }
        }
    }, {
        name: '第二季度',
        type: 'line',
        smooth: true,
        symbolSize: 8,
        data: [27, 124, 70, 178, 127, 157],
        barWidth: '30%',
        itemStyle: {
            normal: {
                color: '#16f892'
            }
        }
    },
    {
        name: '第三季度',
        type: 'line',
        smooth: true,
        symbolSize: 8,
        data: [127, 74, 120, 99, 130, 355],
        barWidth: '30%',
        itemStyle: {
            normal: {
                color: '#0BE3FF'
            }
        }
    }
    ]
    let dataObj = {
        year: ['2015', '2016', '2017', '2018', '2019', '2020'],
        data: {
            value: [{
                name: '第一季度',
                value: [127, 224, 250, 278, 227, 355]
            }, {
                name: '第二季度',
                value: [27, 124, 70, 178, 127, 157]
            }, {
                name: '第三季度',
                value: [127, 74, 120, 99, 130, 50]
            }]
        }
    }
    let dataArr:any = []
    dataObj.data.value.map(item => {
        let newArr = {
            name: item.name,
            type: 'line',
            smooth: true,
            symbolSize: 8,
            data: item.value,
            barWidth: '30%',
            itemStyle: {
                normal: {
                    color: item.name === '第一季度' ? '#f0c725' : item.name === '第二季度' ? '#0BE3FF' : '#16f892'
                }
            }
        }

        dataArr.push(newArr)
    })
    return {
        color: ['#f0c725', '#16f892'],
        title: {
            left: 'center',
            text: '',
            textStyle: {
                color: '#FFFFFF',
                fontSize: '18',
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            x: 'center',
            top: '15',
            textStyle: {
                color: '#c1cadf',
                "fontSize": 18
            }
        },
        grid: {
            left: '2%',     // 增加左边距
            right: '5%',    // 增加右边距
            top: '25%',      // 可以适当调整顶部边距
            bottom: '1%',   // 增加底部边距以留出更多空间
            containLabel: true
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            x: 'right',
            y: 'center'
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: dataObj.year,
            axisLine: {
                lineStyle: {
                    color: 'rgba(240,199,37,0.5)'
                }
            },
            axisLabel: {
                interval: 0,
                color: '#c1cadf',
                fontSize: '18'
            }
        }],
        yAxis: [{
            type: 'value',
            name: '(m3)',
            nameTextStyle: {
                color: '#c1cadf',
                align: 'right',
                lineHeight: 10
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(240,199,37,0.5)'
                }
            },
            axisLabel: {
                interval: 0,
                color: '#c1cadf',
                fontSize: '18'
            },
            splitLine: {
                show: false
            }
        }],
        series: dataArr
    }
}
export default options