import * as echarts from "echarts"

let options = {
    echarts1: echarts1(),
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

export default options