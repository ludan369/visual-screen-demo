import * as echarts from "echarts"

export let options = {

}

interface TouristFlow {
    NAME: string;
    NUM: number;
}

export function touristsFlowChart(data:TouristFlow[]): { [key: string]: any } {
    // mock
    let dataArr: TouristFlow[] = data

    // 排序
    let dataArray = dataArr.sort((a:any, b) => a.NUM - b.NUM)

    // 计算总数
    let total = dataArray.reduce((data, v) => { return data + +v.NUM }, 0)

    // color
    let color:{ [key: number]: string } = { 0: '#ff5676', 1: '#ffd83e', 2: '#fbff94', 3: '#7daeff' }

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
            formatter: (params:any, index:any) => {
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
            formatter: (params:any, index:any) => {
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

