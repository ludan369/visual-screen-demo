import * as echarts from "echarts"

let options = {
    echarts1: echarts1(),
    echarts2: echarts2(),
    echarts4: echarts4(),
}

function echarts1(): { [key: string]: any } {
    let charts = [
        { name: "测试1", num: 200 },
        { name: "测试2", num: 300 },
        { name: "测试3", num: 400 },
        { name: "测试4", num: 500 },
        { name: "测试5", num: 300 },
    ]
    var color = ['rgba(100,255,249', 'rgba(100,255,249', 'rgba(100,255,249', 'rgba(100,255,249', 'rgba(100,255,249']

    let lineY = []
    for (var i = 0; i < charts.length; i++) {
        let x = i
        if (x > color.length - 1) {
            x = color.length - 1
        }
        var data = {
            name: charts[i].name,
            color: color[x] + ')',
            value: charts[i].num,
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: color[x] + ', 0.3)'
                    }, {
                        offset: 1,
                        color: color[x] + ', 1)'
                    }], false),
                    barBorderRadius: 10
                },
                emphasis: {
                    shadowBlur: 15,
                    shadowColor: 'rgba(0, 0, 0, 0.1)'
                }
            }
        }
        lineY.push(data)
    }
    return {
        title: {
            show: false
        },
        grid: {
            // borderWidth: 1,
            top: '10%',
            left: '30%',
            right: '20%',
            bottom: '3%'
        },
        color: color,
        yAxis: [{
            type: 'category',
            inverse: true,
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: false,
                inside: false
            },
            data: lineY
        }, {
            type: 'category',
            inverse: true,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                inside: false,
                textStyle: {
                    color: '#38E1E1',
                    fontSize: '8',
                },
                formatter: function (val: string, index: number) {
                    return `${charts[index].num}`
                }
            },
            splitArea: {
                show: false
            },
            splitLine: {
                show: false
            },
            data: charts
        }],
        xAxis: {
            // type: 'value',
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false
            }
        },
        series: [{
            name: '',
            type: 'bar',
            zlevel: 2,
            barWidth: '5px',
            data: lineY,
            animationDuration: 1500,
            label: {
                normal: {
                    color: 'white',
                    show: true,
                    position: [-65, -2],
                    textStyle: {
                        fontSize: 8
                    },
                    formatter: function (a: any, b: any) {
                        return a.name
                    }
                }
            }
        }],
        animationEasing: 'cubicOut'
    }
}

function echarts2(): { [key: string]: any } {
    var data = [
        { name: '测试11', value: 300 },
        { name: '测试22', value: 500 },
        { name: '测试33', value: 400 },
        { name: '测试44', value: 350 },
        { name: '测试55', value: 363 },
        { name: '测试66', value: 800 },
    ]
    return {
        color: ['#38EB70', '#2E8CFF', '#0EFCFF', '#858FF8', '#FD9133', '#F7E270'],
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            itemWidth: 15,// 标志图形的长度
            itemHeight: 15,// 标志图形的宽度
            orient: 'vertical',
            // left: 'right',
            top: '10%',
            bottom: '50%',
            x: '50%',
            textStyle: {
                color: '#fff',
                fontSize: 8,

            },
            data: data
        },
        series:
        {
            name: '三务公开数量',
            type: 'pie',
            animationDuration: 1500,
            radius: ['70%', '90%'],
            center: ['25%', '50%'],
            roseType: 'radius',
            label: {
                normal: {
                    position: 'inner',
                    show: false
                }
            },
            data: data
        }
    }
}

function echarts4(): { [key: string]: any } {
    var datas = [
        { name: '测试11', value: 300 },
        { name: '测试22', value: 500 },
        { name: '测试33', value: 400 },
        { name: '测试44', value: 350 },
        { name: '测试55', value: 363 },
        { name: '测试66', value: 800 },
    ]
    return {
        title: {
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        color: ['#2E8CFF', '#FD9133', '#37D2D4', '#19CA88', '#858FF8'],
        legend: {
            itemWidth: 11,// 标志图形的长度
            itemHeight: 11,// 标志图形的宽度
            orient: 'vertical',
            // left: 'right',
            top: '15%',
            x: '45%',
            data: datas,
            textStyle: { //图例文字的样式
                color: '#fff',
                fontSize: 8
            },
        },
        series: [
            {
                name: '问题反馈',
                type: 'pie',
                radius: '75%',
                center: ['20%', '50%'],
                animationDuration: 2500,
                data: datas,
                label: {
                    normal: {
                        position: 'inner',
                        show: false
                    }
                }
            }
        ]
    }
}

export default options