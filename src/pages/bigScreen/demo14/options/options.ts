import * as echarts from "echarts"

export let options = {
    echarts1: echarts1(),
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
                name: data[1][0]
            },
            {
                areaStyle: {
                    normal: {
                        opacity: 0.3,
                    }
                },
                value: data[4],
                name: data[1][1]
            },
            {
                areaStyle: {
                    normal: {
                        opacity: 0.3,
                    }
                },
                value: data[5],
                name: data[1][2]
            }
            ]
        }]
    }
}