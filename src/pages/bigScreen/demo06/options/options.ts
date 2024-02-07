import * as echarts from "echarts"

let options = {
    echarts1: echarts1(),
    echarts2: echarts2()
}

function echarts1(): { [key: string]: any } {
    return {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '5%',
            top: '5%',
            right: '0',
            bottom: '15%',
            containLabel: true
        },
        xAxis: {
            data: ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'],
            axisLine: { show: false, },
            axisLabel: {
                color: '#fff',
                fontSize: 12
            }
        },
        yAxis: {
            name: "（人）",
            nameTextStyle: {
                color: '#fff',
                fontSize: 14
            },
            axisLine: { show: false, },
            axisLabel: {
                color: '#fff',
                fontSize: 12
            },
            splitLine: { show: false, },
            interval: 100,
            max: 500

        },
        series: [{
            type: 'bar',
            barWidth: '30%',

            itemStyle: {

                normal: {
                    barBorderRadius: 50,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#01fdcc'
                    }, {
                        offset: 0.8,
                        color: '#11a1d8'
                    }], false)
                }
            },
            data: [25, 325, 164, 245, 475, 201, 121]
        }]
    }

}

function echarts2(): { [key: string]: any } {
    return {
        color: ['#ec704a', '#2e4453', '#249cf9', '#fdb629', '#4b5cc4', '#f47983', '#8d4bbb', '#6635EF', '#FFAFDA'],
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            right: 0,
            y: 'center',
            itemWidth: 12,
            itemHeight: 12,
            align: 'left',
            textStyle: {
                fontSize: 12,
                color: '#fff'
            },
            data: ['test1', 'test2', 'test3', 'test4', 'test5'],
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                center: ['45%', '40%'],
                radius: ['20%', '50%'],
                label: {
                    normal: {
                        formatter: '{c|{d}%}',
                        rich: {
                            c: {
                                fontSize: 12,
                                color: '#fff',
                            }
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: true,
                        length: 2,
                        length2: 5,
                        lineStyle: {
                            width: 1
                        }
                    }
                },
                roseType: 'area',
                data: [{
                    value: 10,
                    name: 'test1'
                },
                {
                    value: 20,
                    name: 'test2'
                },
                {
                    value: 5,
                    name: 'test3'
                },
                {
                    value: 15,
                    name: 'test4'
                },
                {
                    value: 15,
                    name: 'test5'
                }
                ]
            }
        ]
    }
}

export default options