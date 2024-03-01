import * as echarts from "echarts"
import 'echarts-liquidfill'
import "echarts-gl"

let options = {
    echarts1: echarts1(),
    echarts2: echarts2(),
    echarts3: echarts3(),
    echarts6: echarts6(),
    echarts7: echarts7(),
    echarts8: echarts8(),
}

function echarts1(): { [key: string]: any } {
    return {
        legend: {
            data: ['昨日', '今日'],
            right: '40%',
            textStyle: {
                color: "#fff"
            },
            itemWidth: 10,
            itemHeight: 10,
            itemGap: 35
        },
        grid: {
            left: '5%',
            top: '1%',
            right: '5%',
            bottom: '28%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: ['00',
                '01',
                '02',
                '03',
                '04',
                '05',
                '06',
                '07',
                '08',
                '09',
                '10',
                '11',
                '12',
                '13',
                '14',
                '15',
                '16',
                '17',
                '18',
                '19',
                '20',
                '21',
                '22',
                '23'
            ],
            axisLine: {
                show: true,
                lineStyle: {
                    color: "rgba(255,255,255,.1)",
                    width: 1,
                    type: "solid"
                },
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                interval: 0,
                // rotate:50,
                show: true,
                splitNumber: 15,
                textStyle: {
                    fontFamily: "微软雅黑",
                    color: "rgba(255,255,255,.6)",
                    fontSize: '120%',
                },
            },
        }],
        yAxis: [{
            type: 'value',
            axisLabel: {
                //formatter: '{value} %'
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "rgba(255,255,255,.1	)",
                    width: 1,
                    type: "solid"
                },
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)",
                }
            }
        }],
        series: [{
            name: '昨日',
            type: 'bar',
            data: [20, 22, 25, 36, 35, 21, 19, 26, 27, 26, 28, 30, 38, 44, 48, 59, 64, 69, 68, 72, 80, 70, 49, 32],
            barWidth: '25%', //柱子宽度
            // barGap: 1, //柱子之间间距

            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#3ca1ff'
                    }, {
                        offset: 1,
                        color: '#0a73d5'
                    }]),
                    opacity: 1,
                    barBorderRadius: 50,
                }
            }
        }, {
            name: '今日',
            type: 'bar',
            data: [23, 26, 21, 32, 31, 26, 29, 20, 22, 29, 30, 34, 40, 48, 42, 53, 61, 62, 64, 71, 72, 73, 41, 30], barWidth: '25%',
            // barGap: 1,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#f8b135'
                    }, {
                        offset: 1,
                        color: '#e59100'
                    }]),
                    opacity: 1,
                    barBorderRadius: 50,
                }
            }
        },
        ]
    }
}

function echarts2(): { [key: string]: any } {
    return {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: 'rgb(233,234,237)'
                }
            }
        },
        legend: {
            icon: 'rect',
            data: ['昨日', '今日'],
            align: 'right',
            textStyle: {
                color: "#fff"
            },
            itemWidth: 10,
            itemHeight: 4,
            itemGap: 15
        },
        grid: {
            left: '5%',
            top: '10%',
            right: '5%',
            bottom: '25%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLine: {
                lineStyle: {
                    color: 'rgb(233,234,237)'
                }
            },
            data: ['13:00', '13:05', '13:10', '13:15', '13:20', '13:25', '13:30', '13:35', '13:40', '13:45', '13:50', '13:55']
        }, {

            axisLine: {
                lineStyle: {
                    color: '#57617B'
                }
            },
        }],
        yAxis: [{
            axisLabel: {
                show: false
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.1)'
                }
            }
        }],
        series: [{
            name: '今日',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 2
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(24, 163, 64, 0.3)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(24, 163, 64, 0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: '#f4a240',
                    borderColor: 'rgba(137,189,2,0.27)',
                    borderWidth: 12
                }
            },
            data: [220, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122]
        }, {
            name: '昨日',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 2
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(39, 122,206, 0.3)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(39, 122,206, 0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: '#277ace',
                    borderColor: 'rgba(0,136,212,0.2)',
                    borderWidth: 12
                }
            },
            data: [120, 110, 125, 145, 122, 165, 122, 220, 182, 191, 134, 150]
        }]
    }
}

function echarts3(): { [key: string]: any } {
    return {
        series: [
            {
                name: '预估量',
                type: 'liquidFill',
                radius: '100%',
                center: ['50%', '50%'],
                backgroundStyle: {
                    color: 'transparent',
                },
                data: [0.5, 0.5],
                amplitude: 20, //水波振幅
                label: {
                    //标签设置
                    position: ['50%', '50%'],
                    formatter: '50%', //显示文本,
                    textStyle: {
                        fontSize: '23px', //文本字号,
                        color: '#fff'
                    },
                },
                outline: {
                    borderDistance: 3,
                    itemStyle: {
                        borderWidth: 2,
                        borderColor: {
                            type: 'linear',
                            x: 1,
                            y: 0,
                            x2: 0,
                            y2: 0,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: '#007DFF',
                                },
                                {
                                    offset: 0.6,
                                    color: 'rgba(45, 67, 114, 1)',
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(45, 67, 114, 1)',
                                },
                            ],
                            globalCoord: false,
                        },
                    },
                },
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                        {
                            offset: 1,
                            color: 'rgba(31, 222, 225, 1)',
                        },
                        {
                            offset: 0.85,
                            color: '#007DFF80',
                        },
                        {
                            offset: 0.35,
                            color: '#004a99',
                        },
                        {
                            offset: 0,
                            color: 'rgba(31, 222, 225, 1)',
                        },
                    ]),
                },
            },
        ],
    }
}

function echarts6(): { [key: string]: any } {
    var Years = ['2022年', '2023年'];
    var months = ['10月', '11月', '12月'];
    var chartData = [[0, 0, 1103.19], [0, 1, 5129.02], [0, 2, 3636.33], [1, 0, 2128.68], [1, 1, 2662.12], [1, 2, 1876.18]];
    return {
        "toolbox": {
            "show": true,
            "padding": 5,
            "orient": "vertical",
            "feature": {
                "mark": {
                    "show": false
                },
                "saveAsImage": {
                    "show": true
                }
            }
        },
        "title": {
            "padding": 15,
            "text": "项目收入数据分析(万元)",
            "subtext": "统计年份：2022,2023     月份：10,11,12",
            "x": "center",
            "textStyle": {
                "fontSize": 14,
                "fontWeight": "bolder",
                "color": "rgb(255, 185, 0)"
            }
        },
        "tooltip": {
            "show": true,
            "formatter": function (params: any) {
                var xIndex = params.value[0];
                var yIndex = params.value[1];
                var tip = params.seriesName + ': ' + params.value[2] + '万元';
                return Years[yIndex] + '<br />' + months[xIndex] + '<br />' + tip
            }
        },
        "visualMap": {
            "max": 5129.02,
            "min": 1103.19,
            "inRange": {
                "color": [
                    "#313695",
                    "#4575b4",
                    "#74add1",
                    "#abd9e9",
                    "#e0f3f8",
                    "#ffffbf",
                    "#fee090",
                    "#fdae61",
                    "#f46d43",
                    "#d73027",
                    "#a50026"
                ]
            }
        },
        "xAxis3D": {
            "type": "category",
            "data": months,
            "name": ""
        },
        "yAxis3D": {
            "type": "category",
            "data": Years,
            "name": ""
        },
        "zAxis3D": {
            "type": "value",
            "name": ""
        },
        "grid3D": {
            "boxWidth": 80,
            "boxDepth": 50,
            "axisTick": {
                "show": false
            },
            "axisLine": {
                "lineStyle": {
                    "color": "#ccc",
                    "width": 1
                }
            },
            "axisLabel": {
                "textStyle": {
                    "color": "#000",
                    "fontSize": 12
                }
            },
            "viewControl": {
                "alpha": 30,
                "beta": 30
            }
        },
        "series": [
            {
                "type": "bar3D",
                "name": "车流量",
                "data": chartData.map(function (item) {
                    return {
                        value: [item[1], item[0], item[2]]
                    };
                }),
                "shading": "lambert",
                "label": {
                    "show": true,
                    "distance": 1,
                    "textStyle": {
                        "color": "#fff",
                        "fontSize": 14,
                        "borderWidth": 0,
                        "borderColor": "none",
                        "backgroundColor": "rgba(255,255,255,0)"
                    }
                },
                "emphasis": {
                    "label": {
                        "fontSize": 14,
                        "color": "#900"
                    },
                    "itemStyle": {
                        "color": "RGB(50,118,98,1)"
                    }
                }
            }
        ]
    }
}

function echarts7(): { [key: string]: any } {
    return {
        legend: {
            top: "0%",
            left: '50%',
            itemWidth: 20,
            itemHeight: 8,
            itemStyle: {
                color: "#18A4FF"
            },
            textStyle: {
                "color": "#c0c3cd",
                fontSize: 13,
                "padding": [2, 0, 0, 0]
            }
        },
        grid: {
            bottom: '32%',
        },
        xAxis: {
            axisLine: {
                show: false,
            },
            axisLabel: {
                interval: 0,
                textStyle: {
                    color: 'rgba(233,234,237)' //坐标轴字颜色
                },
                margin: 15
            },
            axisTick: {
                show: false //隐藏X轴刻度
            },
            splitLine: {     //网格线
                "show": false
            },
            data: ["2018-11", "2018-12", "2019-01", "2019-02", "2019-03", "2019-04"],
            type: "category"
        },
        yAxis: [
            {
                name: '贸易额（百万元）',
                nameTextStyle: {
                    color: '#2E3033',
                    fontSize: 14,
                },
                axisLine: {
                    show: false, //隐藏X轴轴线

                },
                axisTick: {
                    show: false //隐藏X轴刻度
                },
                axisLabel: {
                    show: true
                },
                splitLine: {     //网格线
                    "show": false
                }
            },
            {
                name: '同比（%）',
                nameTextStyle: {
                    color: '#2E3033',
                    fontSize: 14,
                },
                axisLine: {
                    show: false, //隐藏X轴轴线

                },
                axisTick: {
                    show: false //隐藏X轴刻度
                },
                axisLabel: {
                    show: true
                },
                splitLine: {     //网格线
                    "show": false
                }
            },
        ],
        series: [

            {
                name: '市场份额',
                data: [200, 85, 112, 275, 305, 415],
                "type": "bar",
                yAxisIndex: 0,
                "barMaxWidth": "auto",
                // "barWidth": 7,
                "barWidth": 17,
                "itemStyle": {
                    barBorderRadius: [7, 7, 0, 0], // 圆角（左上、右上、右下、左下）
                    "color": {
                        "x": 0,
                        "y": 0,
                        "x2": 0,
                        "y2": 1,
                        "type": "linear",
                        "global": false,
                        "colorStops": [{
                            "offset": 0,
                            "color": "#0667B2"
                        }, {
                            "offset": 1,
                            "color": "#31DEFF"
                        }]
                    }
                },
                "label": {
                    "show": false,
                }
            },
            {
                name: '市场排名',
                type: 'line',
                yAxisIndex: 1,
                symbol: 'circle',
                smooth: true,
                symbolSize: 7,
                itemStyle: {
                    color: '#ffffff',
                    borderColor: '#E7863E',
                    borderWidth: 1
                },
                lineStyle: {
                    width: 2,
                    color: "#E7863E",
                },
                label: {
                    show: false,
                },
                data: [80, 162, 91, 134, 144, 130]
            },
        ],
    }
}

function echarts8(): { [key: string]: any } {
    let xAxisData = ["地区1", "地区2", "地区3", "地区4", "地区5"]
    let seriesData = [100, 200, 300, 400, 300]
    let colorArr = [["#12D5AF"], ["#0BC19D", "rgba(13,8,16,0)"], ["#68EFD4", "rgba(14,185,151,0)"]]
    
    return {
        backgroundColor: '#0c2d55',
        grid: {
            left: '5%',
            top: '10%',
            right: '5%',
            bottom: '18%',
            containLabel: true
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'none'
            },
            formatter: function (params: any) {
                return params[0].name + ': ' + params[0].value;
            }
        },
        xAxis: {
            data: xAxisData,
            axisTick: { show: false },
            axisLine: { show: false },
            axisLabel: {
                interval: 0,
                fontSize: 15,
                color: "rgba(233,234,237)",
                fontFamily: 'siyuan',
                margin: 10,
                fontWeight: 'bold'
            },
        },
        yAxis: {
            splitLine: { show: false },
            axisTick: { show: false },
            axisLine: { show: false },
            axisLabel: { show: false }
        },
        color: ['#e54035'],
        series: [{
            name: 'hill',
            type: 'pictorialBar',
            barCategoryGap: '-130%',
            symbolClip: true,
            symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            // color: '#F7C233'
                            color: colorArr[1][0]
                        },
                        {
                            offset: 1,
                            // color: 'rgba(217,215,153,0.35)'
                            color: colorArr[1][1]
                        }
                        ],
                        global: false //  缺省为  false
                    }
                },
                emphasis: {
                    opacity: 1
                },
            },
            label: {
                show: true,
                position: 'top',
                offset: [0, 0],
                formatter: '{c}',
                fontSize: 15,
                color: "rgba(233,234,237)",
                fontFamily: 'siyuan',
                fontWeight: 'bold'
            },
            emphasis: {
                itemStyle: {
                    opacity: 1
                }
            },
            // data: [123, 60, 25, 18, 12,],
            data: seriesData,
            z: 10
        }]
    }
}
export default options