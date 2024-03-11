import * as echarts from "echarts"

let options = {
    echarts1: echarts1(),
    echarts6: echarts6(),
}

function getOptions(val: any, con: any, max: any, color: any) {
    return echarts2(val, con, max, color)
}

function echarts1(): { [key: string]: any } {
    return {
        series: [{
            color: ['#09828e', '#09c2c8'],
            type: 'liquidFill',
            data: [0.78, 0.78],
            radius: '90%',
            outline: {
                show: false
            },
            backgroundStyle: {
                color: 'transparent',
                borderColor: '#0ac1c7',
                borderWidth: 1,
                shadowColor: 'rgba(0, 0, 0, 0.4)',
                shadowBlur: 20
            },
            shape: 'path://"M61.3,2c6.2,0,12.1,1.1,17.5,3.4C84.3,7.7,89,10.8,93,14.6c4.1,4,7.3,8.6,9.7,13.8c2.4,5.2,3.5,10.9,3.5,16.9c0,8.1-2.4,16.9-7.1,26.4c-4.7,9.4-9.9,18.2-15.5,26.2c-5.6,8-13.1,17.4-22.4,28.1c-9.3-10.7-16.8-20-22.4-28.1c-5.6-8-10.8-16.8-15.5-26.2c-4.7-9.4-7.1-18.2-7.1-26.4c0-6,1.2-11.6,3.5-16.9c2.4-5.2,5.6-9.8,9.7-13.8c4-3.9,8.8-7,14.2-9.2C49.2,3.1,55,2,61.3,2L61.3,2z"',
            label: {
                normal: {
                    position: ['50%', '50%'],
                    formatter: function () {
                        return '78%';
                    },
                    textStyle: {
                        fontSize: 0.5 * (document.documentElement.clientWidth / 80),
                        color: '#D94854'
                    }
                }
            }
        }]
    }
}

function echarts2(val: any, con: any, max: any, color: any): { [key: string]: any } {
    let value = val
    let w = document.documentElement.clientWidth / 80
    return {
        grid: {
            left: '20%',
            top: '0',
            right: '20%',
            bottom: '0'
        },
        "xAxis": {
            type: 'value',
            "splitLine": {
                "show": false
            },
            "axisLine": {
                "show": false
            },
            "axisLabel": {
                "show": false
            },
            "axisTick": {
                "show": false
            }
        },
        "yAxis": [{
            "type": "category",
            "inverse": false,
            "data": [],
            "axisLine": {
                "show": false
            },
            "axisTick": {
                "show": false
            },
            "axisLabel": {
                show: false
            }
        }],
        "series": [
            {
                type: 'pictorialBar',
                data: [value],
                itemStyle: {
                    normal: {
                        color: color
                    }
                },
                symbolRepeat: 'fixed',
                symbolClip: true,
                symbolSize: [0.5 * w, w],
                symbol: 'roundRect',
                label: {
                    show: true,
                    position: 'left',
                    formatter: function () {
                        return con
                    },
                    color: '#fff',
                    fontSize: 0.7 * w,
                },
                z: 1000
            },
            {
                type: 'pictorialBar',
                itemStyle: {
                    normal: {
                        color: '#193040'
                    }
                },
                data: [max],
                animationDuration: 0,
                symbolRepeat: 'fixed',
                // symbolMargin: '20%',
                symbol: 'roundRect',
                symbolSize: [0.5 * w, w],
                label: {
                    show: true,
                    position: 'right',
                    formatter: function () {
                        return Math.floor(val * 100 / max) + '%'
                    },
                    color: '#fff',
                    fontSize: 0.7 * w,
                }
            }
        ]
    }
}

function echarts6(): { [key: string]: any } {
    let w = document.documentElement.clientWidth / 80
    let xdata = []
    let dataArr = []
    for (let i = 1; i < 30; i++) {
        xdata.push(i)
        dataArr.push(Math.floor(Math.random() * 20 + 5))
    }
    let max = Math.max.apply(null, dataArr)

    let seriesName = ''
    return {
        grid: {
            left: "5%",
            //   right: "2%",
            bottom: "5%",
            top: "15%",
            containLabel: true
        },
        xAxis: {
            type: "category",
            data: xdata,
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#fff",
                    fontSize: 0.5 * w
                }
            },
            axisLine: {
                lineStyle: {
                    color: 'transparent',
                    width: 2 //这里是为了突出显示加上的
                }
            }
        },
        tooltip: {
            show: true,
            trigger: 'item'
        },
        yAxis: [{
            type: 'value',
            // name: '立方米',
            min: 0,
            max: 25,
            axisLabel: {
                formatter: '{value}k',
                textStyle: {
                    color: '#fff',
                    fontSize: 0.5 * w
                }
            },
            axisLine: {
                lineStyle: {
                    color: 'transparent',
                    width: 2 //这里是为了突出显示加上的
                }
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false
            }
        }],
        series: [{
            name: seriesName,
            type: 'line',
            stack: '总量',
            smooth: false,
            symbol: "circle",
            itemStyle: {
                normal: {
                    color: '#34a39a',
                    lineStyle: {
                        color: "#34a39a",
                        width: 2
                    },
                    areaStyle: {
                        //color: '#94C9EC'
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: "#08808b"
                        },
                        {
                            offset: 1,
                            color: 'rgba(0,0,0,0.2)',
                        }
                        ])

                    }
                }
            },
            data: dataArr
        },]
    }
}

export { options, getOptions }