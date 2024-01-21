import * as echarts from "echarts"

let options = {
    echarts1: echarts1(),
    echarts2: echarts2(),
    echarts4: echarts4(),
    echarts5: echarts5(),
    echarts6: echarts6(),
    echarts7: echarts7(),
    echarts8: echarts8(),
    echarts9: echarts9(),
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

function echarts5(): { [key: string]: any } {
    var data = [
        { name: '测试11', value: 300 },
        { name: '测试22', value: 500 },
        { name: '测试33', value: 400 },
        { name: '测试44', value: 350 },
        { name: '测试55', value: 363 },
    ]
    return {
        color: ['#FD9133', '#47F6A2', '#37D2D4', '#3493FF'],
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            itemWidth: 15,// 标志图形的长度
            itemHeight: 15,// 标志图形的宽度
            orient: 'vertical',
            // left: 'right',
            top: '30%',
            bottom: '50%',
            x: '5%',
            textStyle: {
                color: '#fff',
                fontSize: 8,

            },
            data: data,
        },
        series: [
            {
                name: 'XXXX公开占比',
                type: 'pie',
                radius: ['50%', '70%'],
                center: ['78%', '52%'],
                labelLine: {
                    normal: {
                        length: 12,
                        lineStyle: {
                            type: 'solid',
                            color: '#0EFCFF'
                        }
                    }

                },
                label: {
                    normal: {
                        formatter: (params:any) => {
                            return params.name
                        },
                        borderWidth: 0,
                        borderRadius: 4,
                        padding: [0, 0],
                        height: 20,
                        fontSize: 8,
                        align: 'center',
                        color: '#0EFCFF',
                    }
                },
                data: data
            },
            {
                color: '#0EFCFF',
                type: 'pie',
                radius: ['55', '56'],
                center: ['78%', '52%'],
                data: [100],
                label: {
                    show: false
                }
            },
            {
                type: 'pie',
                radius: ['25', '26'],
                center: ['78%', '52%'],
                data: [100],
                label: {
                    show: false
                }
            }
        ]
    }
}

function echarts6(): { [key: string]: any } {
    var resArr = [
        { name: '测试11', value: 300 },
        { name: '测试22', value: 500 },
        { name: '测试33', value: 400 },
        { name: '测试44', value: 350 },
        { name: '测试55', value: 363 },
        { name: '测试66', value: 800 },
    ]
    var indicatorArr = []
    var numArr = []
    for (var i = 0; i < resArr.length; i++) {
        indicatorArr.push({ name: resArr[i].name, max: 900 })
        numArr.push(resArr[i].value)
    }
    var data = [
        {
            value: numArr,
        }
    ]
    return {
        legend: {
            show: true,
            icon: "circle",
            bottom: 30,
            center: 0,
            itemWidth: 14,
            itemHeight: 14,
            itemGap: 21,
            orient: "horizontal",
            data: ['a', 'b'],
            textStyle: {
                fontSize: '70%',
                color: '#0EFCFF'
            },
        },

        radar: {
            // shape: 'circle',
            radius: '70%',
            triggerEvent: true,
            // type: 'default',
            name: {
                textStyle: {
                    color: '#39DCF4',
                    fontSize: '10',
                    // borderRadius: 3,
                    padding: [10, 10]
                }
            },
            nameGap: '2',
            indicator: indicatorArr,
            splitArea: {
                areaStyle: {
                    color: 'rgba(255,255,255,0)'
                }
            },
            axisLine: { //指向外圈文本的分隔线样式
                lineStyle: {
                    color: 'rgba(255,255,255,.2)'
                }
            },
            splitLine: {
                lineStyle: {
                    width: 1,
                    color: 'rgba(255,255,255,.2)'
                }
            },

        },
        series: [{
            name: 'XXX区域占比',
            type: 'radar',
            animationDuration: 2000,
            areaStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        opacity: 1,
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        color: '#2EEFAD'
                    }
                }
            },
            symbolSize: 0,
            lineStyle: {
                normal: {
                    // color: 'rgba(252,211,3, 1)',
                    width: 0
                }
            },
            data: data
        }]
    }
}

function echarts7(): { [key: string]: any } {
    var resArr = [
        { name: '测试11', value: 30 },
        { name: '测试22', value: 50 },
        { name: '测试55', value: 33 },
        { name: '测试66', value: 80 },
    ]
    var nameArr = []
    var caiArr = []
    var cunArr = []
    var danArr = []
    var junArr = []
    var zhenArr = []
    for (var i = 0; i < resArr.length; i++) {
        nameArr.push(resArr[i].name)
        caiArr.push(resArr[i].value)
        cunArr.push(resArr[i].value)
        danArr.push(resArr[i].value)
        junArr.push(resArr[i].value)
        zhenArr.push(resArr[i].value)
    }
    return {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            x: '35%',
            y: '0%',
            data: ["财务", "村务", "党务", "居务", "政务"],
            textStyle: {
                color: "#fff",
                fontSize: 8
            },
            itemWidth: 10,
            itemHeight: 10,
        },
        calculable: true,
        xAxis: [
            {
                type: 'category',
                data: nameArr,
                axisLabel: {
                    interval: 0,
                    textStyle: {
                        fontSize: 8,
                        color: 'rgba(255,255,255,.7)',
                    }
                },
                "axisTick": {       //y轴刻度线
                    "show": false
                },
                "axisLine": {       //y轴
                    "show": false,
                },
            }
        ],
        yAxis: [
            {
                type: 'value',
                scale: true,
                name: '单位：%',
                nameTextStyle: {
                    color: 'rgba(255,255,255,.7)',
                    fontSize: 8
                },
                max: 100,
                min: 0,
                boundaryGap: [0.2, 0.2],
                "axisTick": {       //y轴刻度线
                    "show": false
                },
                "axisLine": {       //y轴
                    "show": false,
                },
                axisLabel: {
                    textStyle: {
                        color: 'rgba(255,255,255,.8)',
                        fontSize: 8
                        // opacity: 0.1,
                    }
                },
                splitLine: {  //决定是否显示坐标中网格
                    show: true,
                    lineStyle: {
                        color: ['#fff'],
                        opacity: 0.2
                    }
                },
            },
            {
                type: 'value',
                scale: true,
                show: false,
                // name: "销量额(万元)",
                nameTextStyle: {
                    color: 'rgba(255,255,255,.2)',
                },
                max: 1,
                min: 0,
                boundaryGap: [0.2, 0.2],
                "axisTick": {       //y轴刻度线
                    "show": false
                },
                "axisLine": {       //y轴
                    "show": false,
                },
                axisLabel: {
                    textStyle: {
                        color: 'rgba(255,255,255,.2)',
                        // opacity: 0.1,
                    }
                },
                splitLine: {  //决定是否显示坐标中网格
                    show: true,
                    lineStyle: {
                        color: ['#fff'],
                        opacity: 0.2
                    }
                },

            }
        ],
        color: ['#0EFCFF', '#FD9133'],
        grid: {
            left: '5%',
            right: '1%',
            top: '25%',
            bottom: '15%'
            // containLabel: true
        },
        series: [
            {
                barWidth: '10%',
                name: '财务',
                type: 'bar',
                data: caiArr,
            },
            {
                animationDuration: 2500,
                barWidth: '20%',
                name: '村务',
                type: 'bar',
                data: cunArr,
            },
            {
                animationDuration: 2500,
                barWidth: '20%',
                name: '党务',
                type: 'bar',
                data: danArr,
            },
            {
                animationDuration: 2500,
                barWidth: '20%',
                name: '居务',
                type: 'bar',
                data: junArr,
            },
            {
                animationDuration: 2500,
                barWidth: '20%',
                name: '政务',
                type: 'bar',
                data: zhenArr,
            }
        ]
    }
}

function echarts8(): { [key: string]: any } {
    var resArr = [
        { name: '测试11', value: 300 },
        { name: '测试22', value: 500 },
        { name: '测试33', value: 400 },
        { name: '测试44', value: 350 },
        { name: '测试55', value: 363 },
        { name: '测试66', value: 800 },
    ]
    var xunArr = []
    var jingArr = []
    var dateArr = []
    for (var i = 0; i < resArr.length; i++) {
        xunArr.push(resArr[i].value)
        jingArr.push(resArr[i].value)
        dateArr.push(resArr[i].name)
    }
    return {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            x: '35%',
            y: '0%',
            data: ['巡察', '警示'],
            textStyle: {
                color: "#fff",
                fontSize: 8
            },
            itemWidth: 10,
            itemHeight: 10,
        },
        calculable: true,
        xAxis: [
            {
                type: 'category',
                data: dateArr,
                axisLabel: {
                    interval: 0,
                    textStyle: {
                        fontSize: 8,
                        color: 'rgba(255,255,255,.7)',
                    }
                },
                "axisTick": {       //y轴刻度线
                    "show": false
                },
                "axisLine": {       //y轴
                    "show": false,
                },
            }
        ],
        yAxis: [
            {
                type: 'value',
                scale: true,
                name: '单位：%',
                nameTextStyle: {
                    color: 'rgba(255,255,255,.7)',
                    fontSize: 8
                },
                max: 1000,
                min: 0,
                boundaryGap: [0.2, 0.2],
                "axisTick": {       //y轴刻度线
                    "show": false
                },
                "axisLine": {       //y轴
                    "show": false,
                },
                axisLabel: {
                    textStyle: {
                        color: 'rgba(255,255,255,.8)',
                        fontSize: 8
                        // opacity: 0.1,
                    }
                },
                splitLine: {  //决定是否显示坐标中网格
                    show: true,
                    lineStyle: {
                        color: ['#fff'],
                        opacity: 0.2
                    }
                },
            },
            {
                type: 'value',
                scale: true,
                show: false,
                // name: "销量额(万元)",
                nameTextStyle: {
                    color: 'rgba(255,255,255,.2)',
                },
                max: 1,
                min: 0,
                boundaryGap: [0.2, 0.2],
                "axisTick": {       //y轴刻度线
                    "show": false
                },
                "axisLine": {       //y轴
                    "show": false,
                },
                axisLabel: {
                    textStyle: {
                        color: 'rgba(255,255,255,.2)',
                        // opacity: 0.1,
                    }
                },
                splitLine: {  //决定是否显示坐标中网格
                    show: true,
                    lineStyle: {
                        color: ['#fff'],
                        opacity: 0.2
                    }
                },

            }
        ],
        color: ['#2E8CFF', '#38EB70'],
        grid: {
            left: '5%',
            right: '1%',
            top: '25%',
            bottom: '15%'
            // containLabel: true
        },
        series: [
            {
                animationDuration: 2500,
                barWidth: '20%',
                name: '巡察',
                type: 'bar',
                data: xunArr,
            },
            {
                barWidth: '20%',
                name: '警示',
                type: 'bar',
                data: jingArr,
            }
        ],
        animationEasing: 'cubicOut'
    }
}

function echarts9(): { [key: string]: any } {
    var resArr = [
        { name: '测试11', value: 30 },
        { name: '测试22', value: 50 },
        { name: '测试33', value: 40 },
        { name: '测试44', value: 35 },
        { name: '测试55', value: 36 },
        { name: '测试66', value: 80 },
    ]
    var nameArr = []
    var caiArr = []
    var cunArr = []
    var danArr = []
    var junArr = []
    var zhenArr = []
    for (var i = 0; i < resArr.length; i++) {
        nameArr.push(resArr[i].name)
        caiArr.push(resArr[i].value)
        cunArr.push(resArr[i].value)
        danArr.push(resArr[i].value)
        junArr.push(resArr[i].value)
        zhenArr.push(resArr[i].value)
    }
    return {}
}
export default options