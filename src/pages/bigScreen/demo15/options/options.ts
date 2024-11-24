import * as echarts from "echarts"

export let options = {

}

interface TouristFlow {
    NAME: string;
    NUM: number;
}
export function touristsFlowChart(data: TouristFlow[]): { [key: string]: any } {
    // mock
    let dataArr: TouristFlow[] = data

    // 排序
    let dataArray = dataArr.sort((a: any, b) => a.NUM - b.NUM)

    // 计算总数
    let total = dataArray.reduce((data, v) => { return data + +v.NUM }, 0)

    // color
    let color: { [key: number]: string } = { 0: '#ff5676', 1: '#ffd83e', 2: '#fbff94', 3: '#7daeff' }

    // x轴
    let xdataName = dataArray.map(v => v.NAME)

    // y轴
    let dataNum = dataArray.map((v, i) => ({
        value: +v.NUM,
        itemStyle: {
            color: {
                type: 'linear', x: 1, y: 0, x2: 0, y2: 0, colorStops: [{
                    offset: 0,
                    color: dataArray.length - i - 1 < 3 ? '#ffdae1' : '#ecf3ff' //  0%  处的颜色
                }, {
                    offset: 0.07,
                    color: dataArray.length - i - 1 < 3 ? color[dataArray.length - i - 1] : color['3']  //  93%  处的颜色  
                }, {
                    offset: 1,
                    color: dataArray.length - i - 1 < 3 ? 'rgba(255, 86, 118, .1)' : 'rgba(125,174,255, .1)' //  100%  处的颜色
                }
                ]
            },
        }
    }))

    // 背景色值数据，比最大值多200即可
    let bgData = dataNum.map(v => (+dataNum[dataNum.length - 1].value + 200))

    // tooltip
    let tooltip = {
        trigger: 'axis',
    }

    // grid
    let grid = { top: '10%', left: '20%', right: '14%', bottom: 0 }

    // xAxis
    let xAxis = {
        splitLine: { show: false },
        axisLine: { show: false },
        axisLabel: { show: false },
        axisTick: { show: false }
    }

    // yAxis
    let yAxis = [{
        type: "category",
        inverse: false,
        data: xdataName,
        axisLabel: {
            formatter: (params: any, index: any) => {
                return `{a|${params}}`
            },
            rich: {
                a: {
                    width: 160,
                    fontSize: 12,
                    color: '#fff',
                    padding: [5, 4, 5, 0],
                    align: 'right',
                }
            }
        },
        // 把坐标轴、刻度、坐标线统统不要
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: { show: false },
    }, {
        type: 'category',
        data: dataNum,
        axisLabel: {
            formatter: (params: any, index: any) => {
                console.log(params)
                return params
            },
            textStyle: {
                color: '#4fc8d0'
            },
            // align: 'right',
            rich: {
                a: { fontSize: 24, color: '#98bfff', verticalAlign: 'bottom' },
                a1: { fontSize: 28, color: '#ff7f97', verticalAlign: 'bottom' },
                a2: { fontSize: 24, color: '#ffce64', verticalAlign: 'bottom' },
                a3: { fontSize: 24, color: '#e8ed66', verticalAlign: 'bottom' },

                b: { fontSize: 12, color: '#98bfff', verticalAlign: 'bottom' },
                b1: { fontSize: 12, color: '#ff7f97', verticalAlign: 'bottom' },
                b2: { fontSize: 12, color: '#ffce64', verticalAlign: 'bottom' },
                b3: { fontSize: 12, color: '#e8ed66', verticalAlign: 'bottom' },
            }
        },
        // 把坐标轴、刻度、坐标线统统不要
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: { show: false },
    }
    ]

    // series
    let series = [{
        // 背景
        z: 6,
        type: 'bar',
        barWidth: 10,
        itemStyle: {
            color: 'rgba(255,255,255,.1)',
            barBorderRadius: [0, 20, 20, 0]
        },
        data: bgData
    }, {
        type: 'bar',
        barWidth: 10,
        barGap: '-100%',
        itemStyle: {
            color: {
                type: 'linear', x: 1, y: 0, x2: 0, y2: 0, colorStops: [{
                    offset: 0,
                    color: 'rgba(255, 218, 220)' //  0%  处的颜色
                }, {
                    offset: 0.07,
                    color: 'rgba(255, 86, 118)' //  93%  处的颜色
                },
                {
                    offset: 1,
                    color: 'rgba(255, 86, 118, 0)' //  100%  处的颜色
                }
                ],
                global: false //  缺省为  false
            },
            barBorderRadius: [0, 20, 20, 0],
        },
        textStyle: {
            fontFamily: 'Microsoft YaHei',
            fontSize: 14
        },
        data: dataNum
    }
    ]

    // 渲染
    return { tooltip, grid, xAxis, yAxis, series }
}

interface carFlowChartData {
    legend: Array<string>;
    xAxis: Array<string>;
    data: Array<Array<number>>;
}
export function barChart(data: carFlowChartData): { [key: string]: any } {
    return {
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '2%',
            right: '4%',
            bottom: '0',
            top: '18%',
            containLabel: true
        },
        legend: {
            data: data.legend,
            right: '2%',
            top: '-1%',
            textStyle: {
                color: "#fff"
            },
            itemWidth: 12,
            itemHeight: 10,
            // itemGap: 35
        },
        xAxis: {
            type: 'category',
            data: data.xAxis,
            axisLine: {
                show: false,
                lineStyle: {
                    color: 'white'

                }
            },
            axisLabel: {
                textStyle: {
                    fontFamily: 'Microsoft YaHei'
                }
            },
        },

        yAxis: {
            type: 'value',
            axisLine: {
                show: false,
                lineStyle: {
                    color: 'white'
                }
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: 'rgba(255,255,255,0.3)'
                }
            },
            axisLabel: {}
        },
        series: [{
            name: data.legend[0],
            type: 'bar',
            barWidth: '15%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#fccb05'
                    }, {
                        offset: 1,
                        color: '#f5804d'
                    }]),
                    barBorderRadius: 12,
                },
            },
            data: data.data[0]
        },
        {
            name: data.legend[1],
            type: 'bar',
            barWidth: '15%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#8bd46e'
                    }, {
                        offset: 1,
                        color: '#09bcb7'
                    }]),
                    barBorderRadius: 11,
                }

            },
            data: data.data[1]
        }]
    }
}

interface peoplePercentage {
    name: string;
    value: number;
}
export function pieChart(data: peoplePercentage[]): { [key: string]: any } {
    var data = data
    var titleArr: { [key: string]: any } = [], seriesArr: { [key: string]: any } = [];
    let colors = [['#389af4', '#dfeaff'], ['#ff8c37', '#ffdcc3'], ['#ff0036', '#ffdcc3'], ['#ffc257', '#ffedcc'], ['#fd6f97', '#fed4e0'], ['#a181fc', '#e3d9fe']]
    data.forEach(function (item, index) {
        titleArr.push(
            {
                text: item.name,
                left: index < 3 ? index * 30 + 17.5 + '%' : (index - 3) * 40 + 17.5 + '%',
                top: index < 3 ? '35%' : '87%',
                bottom: 10,
                textAlign: 'center',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: '12',
                    color: colors[index][0],
                    textAlign: 'center',

                    left: 10
                },
            }
        );
        seriesArr.push(
            {
                name: item.name,
                type: 'pie',
                clockWise: false,
                radius: [17, 22],
                itemStyle: {
                    normal: {
                        color: colors[index][0],
                        shadowColor: colors[index][0],
                        shadowBlur: 0,
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        },
                    }
                },
                hoverAnimation: false,
                center: [index < 3 ? index * 30 + 20 + '%' : (index - 3) * 40 + 20 + '%', index < 3 ? '18%' : '70%'],
                data: [{
                    value: item.value,
                    label: {
                        normal: {
                            formatter: function (params: any) {
                                return params.value + '%';
                            },
                            position: 'center',
                            show: true,
                            textStyle: {
                                fontSize: '12',
                                fontWeight: 'bold',
                                color: colors[index][0]
                            }
                        }
                    },
                }, {
                    value: 100 - item.value,
                    name: 'invisible',
                    itemStyle: {
                        normal: {
                            color: colors[index][1]
                        },
                        emphasis: {
                            color: colors[index][1]
                        }
                    }
                }]
            }
        )
    });
    return {
        title: titleArr,
        series: seriesArr
    }
}

interface carSpaceNumData {
    yAxisName: Array<string>;
    yAxisData: Array<number>;
    data: Array<number>;
}
export function carSpaceNumChart(data: carSpaceNumData): { [key: string]: any } {
    var myColor = ['#d0a00e', '#34da62', '#00e9db', '#00c0e9', '#0096f3'];
    return {
        grid: {
            left: '11%',
            top: '12%',
            right: '0%',
            bottom: '0%',
            containLabel: true
        },
        xAxis: [{
            show: false,
        }],
        tooltip: {
            trigger: 'axis',
            formatter: (v: any) => {
                return `
                    <div class=' u-p-2'>
                        <div>${v[0].name}车位占比：${v[0].value}%</div>
                    </div>
                `
            }
        },
        yAxis: [{
            axisTick: 'none',
            axisLine: 'none',
            offset: '17',
            axisLabel: {
                textStyle: {
                    color: '#ffffff',
                    fontSize: '13',
                }
            },
            data: data.yAxisName
        }, {
            axisTick: 'none',
            axisLine: 'none',
            axisLabel: {
                textStyle: {
                    color: '#ffffff',
                    fontSize: '13',
                }
            },
            data: data.yAxisData
        }, {
            name: '车位占比：%',
            nameGap: '50',
            nameTextStyle: {
                color: '#ffffff',
                fontSize: '13',
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: [],
        }],
        series: [{
            type: 'bar',
            yAxisIndex: 0,
            data: data.data,
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: function (param:any) {
                        return param.value + '%';
                    },
                    textStyle: {
                        color: '#ffffff',
                        fontSize: '13',
                    }
                }
            },
            barWidth: 5,
            itemStyle: {
                normal: {
                    color: function (params:any) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num]
                    },
                }
            },
            z: 2
        }, {
            type: 'bar',
            yAxisIndex: 1,
            barGap: '-100%',
            data: [99.5, 99.5, 99.5, 99.5, 99.5],
            barWidth: 10,
            itemStyle: {
                normal: {
                    color: '#0e2147',
                    barBorderRadius: 5,
                }
            },
            z: 1
        }, {
            type: 'bar',
            yAxisIndex: 2,
            barGap: '-100%',
            data: [100, 100, 100, 100, 100],
            barWidth: 14,
            itemStyle: {
                normal: {
                    color: function (params:any) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num]
                    },
                    barBorderRadius: 5,
                }
            },
            z: 0
        },
        {
            type: 'scatter',
            hoverAnimation: false,
            data: [0, 0, 0, 0, 0],
            yAxisIndex: 2,
            symbolSize: 18,
            itemStyle: {
                normal: {
                    color: function (params:any) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num]
                    },
                    opacity: 1,
                }
            },
            z: 2
        }]
    }
}

