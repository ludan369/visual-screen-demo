import * as echarts from "echarts"

let options = {
    echarts1: echarts1(),
    echarts2: echarts2(),
    echarts3: echarts3(),
    echarts4: echarts4()
}

function echarts1(): { [key: string]: any } {
    return {
        color: ['#00c2ff', '#f9cf67', '#e92b77'],
        legend: {
            show: true,
            icon: 'circle',//图例形状
            top: 20,
            itemWidth: 14, // 图例标记的图形宽度。[ default: 25 ]
            itemHeight: 14, // 图例标记的图形高度。[ default: 14 ]
            itemGap: 21, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
            textStyle: {
                fontSize: 12,
                color: '#ade3ff'
            },
            data: ['2022', '2023', '2024'],
        },
        radar: [{
            indicator: [{
                text: '重庆市',
                max: 100
            },
            {
                text: '北京市',
                max: 100
            },
            {
                text: '上海市',
                max: 100
            },
            {
                text: '广东省',
                max: 100
            },
            {
                text: '浙江省',
                max: 100
            }
            ],
            textStyle: {
                color: 'red'
            },
            center: ['50%', '50%'],
            radius: 60,
            startAngle: 90,
            splitNumber: 3,
            orient: 'horizontal', // 图例列表的布局朝向,默认'horizontal'为横向,'vertical'为纵向.
            name: {
                formatter: '{value}',
                textStyle: {
                    fontSize: 12, //外圈标签字体大小
                    color: '#5b81cb' //外圈标签字体颜色
                }
            },
            splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示。
                show: true,
                areaStyle: { // 分隔区域的样式设置。
                    color: ['#141c42', '#141c42'], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
                }
            },
            axisLine: { //指向外圈文本的分隔线样式
                lineStyle: {
                    color: '#153269'
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#113865', // 分隔线颜色
                    width: 1, // 分隔线线宽
                }
            }
        },],
        series: [{
            name: '雷达图',
            type: 'radar',
            itemStyle: {
                emphasis: {
                    lineStyle: {
                        width: 4
                    }
                }
            },
            data: [{
                name: '2022',
                value: [85, 65, 55, 90, 82],
                areaStyle: {
                    normal: { // 单项区域填充样式
                        color: {
                            type: 'linear',
                            x: 0, //右
                            y: 0, //下
                            x2: 1, //左
                            y2: 1, //上
                            colorStops: [{
                                offset: 0,
                                color: '#00c2ff'
                            }, {
                                offset: 0.5,
                                color: 'rgba(0,0,0,0)'
                            }, {
                                offset: 1,
                                color: '#00c2ff'
                            }],
                            globalCoord: false
                        },
                        opacity: 1 // 区域透明度
                    }
                },
                symbolSize: 2.5, // 单个数据标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10。
                label: {                    // 单个拐点文本的样式设置
                    normal: {
                        show: true,             // 单个拐点文本的样式设置。[ default: false ]
                        position: 'top',        // 标签的位置。[ default: top ]
                        distance: 2,            // 距离图形元素的距离。当 position 为字符描述值（如 'top'、'insideRight'）时候有效。[ default: 5 ]
                        color: '#6692e2',          // 文字的颜色。如果设置为 'auto'，则为视觉映射得到的颜色，如系列色。[ default: "#fff" ]
                        fontSize: 14,           // 文字的字体大小
                        formatter: function (params: any) {
                            return params.value;
                        }
                    }
                },
                itemStyle: {
                    normal: { //图形悬浮效果
                        borderColor: '#00c2ff',
                        borderWidth: 2.5
                    }
                },
            }, {
                name: '2023',
                value: [50, 20, 45, 30, 75],
                symbolSize: 2.5,
                itemStyle: {
                    normal: {
                        borderColor: '#f9cf67',
                        borderWidth: 2.5,
                    }
                },
                areaStyle: {
                    normal: { // 单项区域填充样式
                        color: {
                            type: 'linear',
                            x: 0, //右
                            y: 0, //下
                            x2: 1, //左
                            y2: 1, //上
                            colorStops: [{
                                offset: 0,
                                color: '#f9cf67'
                            }, {
                                offset: 0.5,
                                color: 'rgba(0,0,0,0)'
                            }, {
                                offset: 1,
                                color: '#f9cf67'
                            }],
                            globalCoord: false
                        },
                        opacity: 1 // 区域透明度
                    }
                },
                // lineStyle: {
                //     normal: {
                //         opacity: 0.5// 图形透明度
                //     }
                // }
            }, {
                name: '2024',
                value: [37, 80, 12, 50, 25],
                symbolSize: 2.5,
                itemStyle: {
                    normal: {
                        borderColor: '#e92b77',
                        borderWidth: 2.5,
                    }
                },
                areaStyle: {
                    normal: { // 单项区域填充样式
                        color: {
                            type: 'linear',
                            x: 0, //右
                            y: 0, //下
                            x2: 1, //左
                            y2: 1, //上
                            colorStops: [{
                                offset: 0,
                                color: '#e92b77'
                            }, {
                                offset: 0.5,
                                color: 'rgba(0,0,0,0)'
                            }, {
                                offset: 1,
                                color: '#e92b77'
                            }],
                            globalCoord: false
                        },
                        opacity: 1 // 区域透明度
                    }
                }
            }]
        },]
    }
}

function echarts2(): { [key: string]: any } {
    var salvProName = ["企业总数", "废气企业", "废水企业", "铅污染", "铬污染"];
    var salvProValue = [117, 74, 72, 67, 55];
    var salvProMax = [];//背景按最大值
    for (let i = 0; i < salvProValue.length; i++) {
        salvProMax.push(salvProValue[0])
    }
    return {
        grid: {
            left: '2%',
            right: '2%',
            bottom: '0',
            top: '2%',
            containLabel: true
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'none'
            },
            formatter: function (params: any) {
                return params[0].name + ' : ' + params[0].value
            }
        },
        xAxis: {
            show: false,
            type: 'value'
        },
        yAxis: [{
            type: 'category',
            inverse: true,
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff'
                },
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            data: salvProName
        }, {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
                textStyle: {
                    color: '#ffffff',
                    fontSize: '12'
                },
            },
            data: salvProValue
        }],
        series: [{
            name: '值',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'rgb(57,89,255,1)'
                    }, {
                        offset: 1,
                        color: 'rgb(46,200,207,1)'
                    }]),
                },
            },
            barWidth: 10,
            data: salvProValue
        },
        {
            name: '背景',
            type: 'bar',
            barWidth: 10,
            barGap: '-100%',
            data: salvProMax,
            itemStyle: {
                normal: {
                    color: 'rgba(24,31,68,1)',
                    barBorderRadius: 30,
                }
            },
        },
        ]
    }
}

function echarts3(): { [key: string]: any } {
    var dataStyle = {
        normal: {
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            shadowBlur: 0,
            shadowColor: '#203665'
        }
    }
    return {
        series: [{
            name: '第一个圆环',
            type: 'pie',
            clockWise: false,
            radius: [45, 50],
            itemStyle: dataStyle,
            hoverAnimation: false,
            center: ['15%', '45%'],
            data: [{
                value: 25,
                label: {
                    normal: {
                        rich: {
                            a: {
                                color: '#3a7ad5',
                                align: 'center',
                                fontSize: 14,
                                fontWeight: "bold"
                            },
                            b: {
                                color: '#fff',
                                align: 'center',
                                fontSize: 12
                            }
                        },
                        formatter: function (params) {
                            return "{b|饮用水质}\n\n" + "{a|" + params.value + "个}" + "\n\n{b|增长2%}";
                        },
                        position: 'center',
                        show: true,
                        textStyle: {
                            fontSize: '12',
                            fontWeight: 'normal',
                            color: '#fff'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#2c6cc4',
                        shadowColor: '#2c6cc4',
                        shadowBlur: 0
                    }
                }
            }, {
                value: 75,
                name: 'invisible',
                itemStyle: {
                    normal: {
                        color: '#24375c'
                    },
                    emphasis: {
                        color: '#24375c'
                    }
                }
            }]
        }, {
            name: '第二个圆环',
            type: 'pie',
            clockWise: false,
            radius: [45, 50],
            itemStyle: dataStyle,
            hoverAnimation: false,
            center: ['50%', '45%'],
            data: [{
                value: 50,
                label: {
                    normal: {
                        rich: {
                            a: {
                                color: '#d03e93',
                                align: 'center',
                                fontSize: 14,
                                fontWeight: "bold"
                            },
                            b: {
                                color: '#fff',
                                align: 'center',
                                fontSize: 12
                            }
                        },
                        formatter: function (params) {
                            return "{b|生活用水}\n\n" + "{a|" + params.value + "个}" + "\n\n{b|增长2%}";
                        },
                        position: 'center',
                        show: true,
                        textStyle: {
                            fontSize: '12',
                            fontWeight: 'normal',
                            color: '#fff'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#ef45ac',
                        shadowColor: '#ef45ac',
                        shadowBlur: 0
                    }
                }
            }, {
                value: 50,
                name: 'invisible',
                itemStyle: {
                    normal: {
                        color: '#412a4e'
                    },
                    emphasis: {
                        color: '#412a4e'
                    }
                }
            }]
        }, {
            name: '第三个圆环',
            type: 'pie',
            clockWise: false,
            radius: [45, 50],
            itemStyle: dataStyle,
            hoverAnimation: false,
            center: ['85%', '45%'],
            data: [{
                value: 75,
                label: {
                    normal: {
                        rich: {
                            a: {
                                color: '#603dd0',
                                align: 'center',
                                fontSize: 14,
                                fontWeight: "bold"
                            },
                            b: {
                                color: '#fff',
                                align: 'center',
                                fontSize: 12
                            }
                        },
                        formatter: function (params) {
                            return "{b|自来水}\n\n" + "{a|" + params.value + "个}" + "\n\n{b|增长2%}";
                        },
                        position: 'center',
                        show: true,
                        textStyle: {
                            fontSize: '12',
                            fontWeight: 'normal',
                            color: '#fff'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#613fd1',
                        shadowColor: '#613fd1',
                        shadowBlur: 0
                    }
                }
            }, {
                value: 25,
                name: 'invisible',
                itemStyle: {
                    normal: {
                        color: '#453284'
                    },
                    emphasis: {
                        color: '#453284'
                    }
                }
            }]
        }]
    }
}

function echarts4(): { [key: string]: any } {
    let dataText = [{
        name: '上游流速',
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
        name: '下游流速',
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
        name: '平均流速',
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
                name: '上游流速',
                value: [127, 224, 250, 278, 227, 355]
            }, {
                name: '下游流速',
                value: [27, 124, 70, 178, 127, 157]
            }, {
                name: '平均流速',
                value: [127, 74, 120, 99, 130, 50]
            }]
        }
    }
    let dataArr = []

    dataObj.data.value.map(item => {
        let datachild = []
        let newArr = {
            name: item.name,
            type: 'line',
            smooth: true,
            symbolSize: 8,
            data: item.value,
            barWidth: '30%',
            itemStyle: {
                normal: {
                    color: item.name === '上游流速' ? '#f0c725' : item.name === '下游流速' ? '#0BE3FF' : '#16f892'
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
                fontSize: '14',
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
                "fontSize": 14
            }
        },
        grid: {
            left: '5%',     // 增加左边距
            right: '5%',    // 增加右边距
            top: '25%',      // 可以适当调整顶部边距
            bottom: '15%',   // 增加底部边距以留出更多空间
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
                fontSize: '14'
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
                fontSize: '14'
            },
            splitLine: {
                show: false
            }
        }],
        series: dataArr
    }
}

export default options