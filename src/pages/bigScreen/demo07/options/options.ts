import * as echarts from "echarts"


let options = {
    echarts1: echarts1(),
    echarts2: echarts2(),
    echarts3: echarts3(),
    echarts4: echarts4(),
}

function echarts1(): { [key: string]: any } {
    return {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'right',
            y: 20,
            textStyle: {
                color: '#ffffff',
            },
            data: ['客运车', '危险品车', '网约车', '学生校车']
        },

        calculable: false,
        series: [
            {
                name: '车类型',
                type: 'pie',
                radius: ['40%', '70%'],
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    emphasis: {
                        label: {
                            show: true,
                            position: 'center',
                            textStyle: {
                                fontSize: '20',
                                fontWeight: 'bold'
                            }
                        }
                    }
                },
                data: [
                    { value: 335, name: '客运车' },
                    { value: 310, name: '危险品车' },
                    { value: 234, name: '网约车' },
                    { value: 135, name: '学生校车' }

                ]
            }
        ]
    }
}

function echarts2(): { [key: string]: any } {
    return {
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '8%',
            top: '25%',
            right: '8%',
            bottom: '10%',
            containLabel: true
        },
        legend: {
            y: 23,
            data: ['行驶', '停车', '熄火', '离线'],
            textStyle: {
                color: '#ffffff',

            }
        },
        calculable: false,
        xAxis: [
            {
                type: 'value',
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: ['#f2f2f2'],
                        width: 0,
                        type: 'solid'
                    }
                }

            }
        ],
        yAxis: [
            {
                type: 'category',
                data: ['客运车', '危险品车', '网约车', '学生校车'],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                splitLine: {
                    lineStyle: {
                        width: 0,
                        type: 'solid'
                    }
                }
            }
        ],
        series: [
            {
                name: '行驶',
                type: 'bar',
                stack: '总量',
                itemStyle: { normal: { label: { show: true, position: 'insideRight' } } },
                data: [320, 302, 301, 334]
            },
            {
                name: '停车',
                type: 'bar',
                stack: '总量',
                itemStyle: { normal: { label: { show: true, position: 'insideRight' } } },
                data: [120, 132, 101, 134]
            },
            {
                name: '熄火',
                type: 'bar',
                stack: '总量',
                itemStyle: { normal: { label: { show: true, position: 'insideRight' } } },
                data: [220, 182, 191, 234]
            },
            {
                name: '离线',
                type: 'bar',
                stack: '总量',
                itemStyle: { normal: { label: { show: true, position: 'insideRight' } } },
                data: [150, 212, 201, 154]
            }

        ]
    }
}

function echarts3(): { [key: string]: any } {
    return {
        legend: {
            y: 30,
            data: ['车辆行驶数量'],
            textStyle: {
                color: '#ffffff',

            }
        },
        grid: {
            left: '8%',
            top: '25%',
            right: '8%',
            bottom: '10%',
            containLabel: true
        },
        calculable: false,
        tooltip: {
            trigger: 'axis',
            formatter: "Temperature : <br/>{b}km : {c}°C"
        },
        xAxis: [
            {
                type: 'value',
                axisLabel: {
                    formatter: '{value}',
                    textStyle: {
                        color: '#fff'
                    }
                },

                splitLine: {
                    lineStyle: {
                        width: 0,
                        type: 'solid'
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'category',
                axisLine: { onZero: false },
                axisLabel: {
                    formatter: '{value} km',
                    textStyle: {
                        color: '#fff'
                    }
                },
                splitLine: {
                    lineStyle: {
                        width: 0,
                        type: 'solid'
                    }
                },
                boundaryGap: false,
                data: ['0', '10', '20', '30', '40', '50', '60', '70', '80']
            }
        ],
        series: [
            {
                name: '车辆行驶数量',
                type: 'line',
                smooth: true,
                itemStyle: {
                    normal: {
                        lineStyle: {
                            shadowColor: 'rgba(0,0,0,0.4)'
                        }
                    }
                },
                data: [15, 0, 20, 45, 22.1, 25, 70, 55, 76]
            }
        ]
    }
}

function echarts4(): { [key: string]: any } {
    return {
        grid: {
            left: '8%',
            top: '25%',
            right: '8%',
            bottom: '10%',
            containLabel: true
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },

            formatter: function (params:any) {
                var tar = params[0];
                return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
            }
        },

        xAxis: [
            {
                type: 'category',
                splitLine: { show: false },
                data: ['客运车', '危险品车', '网约车', '学生校车'],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                }

            }
        ],
        yAxis: [
            {
                type: 'value',
                splitLine: { show: false },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                }
            }
        ],
        series: [

            {
                name: '报警数量',
                type: 'bar',
                stack: '总量',
                itemStyle: { normal: { label: { show: true, position: 'inside' } } },
                data: [2900, 1200, 300, 200, 900, 300]
            }
        ]
    }
}

export default options