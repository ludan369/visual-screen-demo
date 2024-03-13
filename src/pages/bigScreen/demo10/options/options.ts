import * as echarts from "echarts"

let options = {
    echarts1: echarts1(),
    echarts2: echarts2(),
}

function echarts1(): { [key: string]: any } {
    let excelJson_24 = [
        { a: '宣城市特检', b: 14078 },
        { a: '滁州市特检', b: 14514 },
        { a: '芜湖市特检', b: 14565 },
        { a: '淮南市特检', b: 15082 },
        { a: '安徽省特检', b: 59056 }
    ];
    let wei1 = [];
    let wei2 = [];
    // 第一列
    wei1.push(excelJson_24[0].a)
    for (let i = 1; i < excelJson_24.length; i++) {
        if (i > 0 && excelJson_24[i].a !== wei1[wei1.length - 1]) {
            wei1.push(excelJson_24[i].a)
        }
    }
    //第二列
    wei2.push(excelJson_24[0].b)
    for (let i = 1; i < excelJson_24.length; i++) {
        if (i > 0 && excelJson_24[i].b !== wei2[0]) {
            wei2.push(excelJson_24[i].b)
        } else {
            break;
        }
    }

    let xData_24_ = wei1
    let legendData_24 = wei2
    return {
        // backgroundColor: '#000',
        color: ['#5490CB', '#CCCCCC'],
        tooltip: {
            trigger: 'item',
            formatter: '数量:{c0}',
            backgroundColor: 'rgba(255,255,255,0.7)',
            borderColor: '#458CDC',
            borderWidth: 1,
            borderRadius: 0,
            textStyle: {
                color: '#333',
            },
        },
        grid: {
            left: '3%',
            right: '10%',
            bottom: '2%',
            top: '10%',
            containLabel: true
        },
        xAxis: {
            // name: '检验报告数量',
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            splitLine: {
                show: false
            },
            max: 60000
        },
        yAxis: {
            type: 'category',
            data: xData_24_,
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            axisLabel: {
                color: '#fff',
                fontSize: 14
            },
            splitLine: {
                show: false
            }
        },
        series: [{
            type: 'bar',
            data: [60000, 60000, 60000, 60000, 60000],
            barWidth: '30%',
            barGap: '200%',
            barMaxWidth: '40px',
            label: {
                normal: {
                    show: false,
                    position: 'right',
                    formatter: '{c}',
                    color: '#fff',
                    fontSize: 14
                }
            },
            itemStyle: {
                normal: {
                    barBorderRadius: 50,
                    color: 'rgba(1,119,212,0.2)'
                }
            }
        }, {
            type: 'bar',
            data: legendData_24,
            barWidth: '30%',
            barGap: '-100%',
            barMaxWidth: '40px',
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{c}',
                    color: '#fff',
                    fontSize: 12
                }
            },
            itemStyle: {
                normal: {
                    barBorderRadius: 50,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: '#00A0FD'
                    }, {
                        offset: 0.8,
                        color: '#B0DD5B'
                    }], false)
                }
            }
        }],
    }
}

function echarts2(): { [key: string]: any } {
    let xData_104_ = function () {
        let data = ["安徽省特检院", "淮南市特检中心", "芜湖市特检中心", "滁州市特检中心", "宣城市特检中心", "铜陵市特检中心", "阜阳市特检中心", "安庆市特检中心", "马鞍山市特检中心", "淮北市特检中心", "蚌埠市特检中心", "黄山市特检中心", "六安市特检中心", "池州市特检中心", "宿州市特检中心", "安徽省特检院巢湖分院", "安徽省特检院亳州检测部"];
        return data;
    }();
    //1级
    let _data_104_1 = [0, 0, 90, 671, 0, 0, 0, 1307, 1328, 0, 0, 458, 0, 0, 0, 0, 174]
    //2级
    let _data_104_2 = [2665, 3785, 2335, 1800, 923, 427, 938, 571, 1636, 753, 1538, 1447, 0, 320, 0, 808, 271]
    let _data_104_3 = [2577, 0, 1, 638, 725, 2, 1, 1, 0, 1, 2, 692, 1, 413, 578, 710, 651]
    let _data_104_4 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 42, 0, 0, 0, 0, 0, 0]
    let _data_104_5 = [46069, 6691, 5969, 2580, 6248, 5806, 1815, 3537, 3123, 5279, 4235, 4206, 4540, 2494, 2458, 2822, 846]
    let _data_104_6 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 186, 0, 332, 0, 0]
    let _data_104_7 = [6188, 3180, 4644, 8781, 5586, 3961, 6700, 4793, 2192, 1409, 1951, 1083, 1482, 3537, 990, 944, 926]
    let _data_104_8 = [1189, 219, 0, 0, 347, 443, 576, 0, 1407, 878, 0, 0, 263, 354, 934, 45, 0]
    return {
        "title": {
            "text": "",
            "subtext": '',
            x: "4%",

            textStyle: {
                color: '#fff',
                fontSize: '22'
            },
            subtextStyle: {
                color: '#90979c',
                fontSize: '16',

            },
        },
        "tooltip": {
            "trigger": "axis",
            "axisPointer": {
                "type": "shadow",
                textStyle: {
                    color: "#fff"
                },
            },
            formatter: function (params:any) {
                var indexX = 0;
                for (var x = 0; x < xData_104_.length; x++) {
                    if (params[0].name === xData_104_[x]) {
                        indexX = x;
                        break;
                    }
                }
                var sum = _data_104_1[indexX] + _data_104_2[indexX] + _data_104_3[indexX] + _data_104_4[indexX] + _data_104_5[indexX] + _data_104_6[indexX] + _data_104_7[indexX] + _data_104_8[indexX]

                var displayString = '检验单位：' + params[0].name
                for (var m = 0; m < params.length; m++) {
                    var itemString = '<br/>' + params[m].marker + params[m].seriesName + ':数量：' + params[m].data + '，' + '占比：' + (params[m].data / sum * 100).toFixed(2) + '%，总数:' + sum;
                    displayString = displayString + itemString
                }
                return displayString
            }
        },
        "grid": {
            left: 80,
            "borderWidth": 0,
            "top": 30,
            "bottom": 60,
            textStyle: {
                color: "#fff"
            }
        },
        "calculable": true,
        "xAxis": [{
            "type": "category",
            "position": {
                "bottom": 200,
            },
            "axisLine": {
                lineStyle: {
                    color: '#90979c'
                }
            },
            "nameRotate": 90,
            "splitLine": {
                "show": false
            },
            "axisTick": {
                "show": false
            },
            "splitArea": {
                "show": false
            },
            "axisLabel": {
                // "interval": 0,
                textStyle: {
                    color: '#fff',
                    fontSize: '16'
                },
            },
            "data": xData_104_,
            "offset": 0,
        }],
        "yAxis": [{
            "type": "value",
            "splitLine": {
                "show": false
            },
            "axisLine": {
                lineStyle: {
                    color: '#90979c'
                }
            },
            "axisTick": {
                "show": false
            },
            "axisLabel": {
                // "interval": 0,
                textStyle: {
                    color: '#fff',
                    fontSize: '16'
                },
            },
            "splitArea": {
                "show": false
            },

        }],
        "dataZoom": [{
            "show": true,
            "height": 10,
            "xAxisIndex": [
                0
            ],
            bottom: 10,
            "start": 0,
            "end": 2,
            handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
            handleSize: '104%',
            handleStyle: {
                color: "#d3dee5",

            },
            textStyle: {
                color: "#fff"
            },
            borderColor: "#90979c"


        }, {
            "type": "inside",
            "show": true,
            "height": 15,
            "start": 1,
            "end": 35
        }],
        "series": [
            {
                "name": "1 级",
                "type": "bar",
                //"stack": "总量",
                "itemStyle": {
                    "normal": {
                        "color": "rgba(58,95,205,1)",
                        "label": {
                            "show": true,
                            "textStyle": {
                                "color": "#fff"
                            },
                            "position": "top",
                            formatter: function (p:any) {
                                return p.value > 0 ? (p.value) : '';
                            }
                        }
                    }
                },
                "data": _data_104_1
            },
            {
                "name": "2 级",
                "type": "bar",
                //"stack": "总量",
                "barMaxWidth": 35,
                "barGap": "10%",
                "itemStyle": {
                    "normal": {
                        "color": "rgba(0,191,183,1)",
                        "label": {
                            "show": true,
                            "textStyle": {
                                "color": "#fff"
                            },
                            "position": "top",
                            formatter: function (p:any) {
                                return p.value > 0 ? (p.value) : '';
                            }
                        }
                    }
                },
                "data": _data_104_2
            },
            {
                "name": "3 级",
                "type": "bar",
                //"stack": "总量",
                "itemStyle": {
                    "normal": {
                        "color": "rgba(255,193,193,1)",
                        "label": {
                            "show": true,
                            "textStyle": {
                                "color": "#fff"
                            },
                            "position": "top",
                            formatter: function (p:any) {
                                return p.value > 0 ? (p.value) : '';
                            }
                        }
                    }
                },
                "data": _data_104_3
            },
            {
                "name": "4 级",
                "type": "bar",
                //"stack": "总量",
                "itemStyle": {
                    "normal": {
                        "color": "rgba(186,85,211,1)",
                        "label": {
                            "show": true,
                            "textStyle": {
                                "color": "#fff"
                            },
                            "position": "top",
                            formatter: function (p:any) {
                                return p.value > 0 ? (p.value) : '';
                            }
                        }
                    }
                },
                "data": _data_104_4
            },
            {
                "name": "合格",
                "type": "bar",
                //"stack": "总量",
                "barMaxWidth": 35,
                "barGap": "10%",
                "itemStyle": {
                    "normal": {
                        "color": "rgba(255,185,15,1)",
                        "label": {
                            "show": true,
                            "textStyle": {
                                "color": "#fff"
                            },
                            "position": "top",
                            formatter: function (p:any) {
                                return p.value > 0 ? (p.value) : '';
                            }
                        }
                    }
                },
                "data": _data_104_5
            },
            {
                "name": "监督运行",
                "type": "bar",
                //"stack": "总量",
                // symbolSize: 10,
                // symbol: 'circle',
                "itemStyle": {
                    "normal": {
                        "color": "rgba(252,230,48,1)",
                        "barBorderRadius": 0,
                        "label": {
                            "show": true,
                            "position": "top",
                            formatter: function (p:any) {
                                return p.value > 0 ? (p.value) : '';
                            }
                        }
                    }
                },
                "data": _data_104_6
            },
            {
                "name": "其他",
                "type": "bar",
                //"stack": "总量",
                "barMaxWidth": 35,
                "barGap": "10%",
                "itemStyle": {
                    "normal": {
                        "color": "rgba(255,144,128,1)",
                        "label": {
                            "show": true,
                            "textStyle": {
                                "color": "#fff"
                            },
                            "position": "top",
                            formatter: function (p:any) {
                                return p.value > 0 ? (p.value) : '';
                            }
                        }
                    }
                },
                "data": _data_104_7
            },

            {
                "name": "允许使用",
                "type": "bar",
                //"stack": "总量",
                "itemStyle": {
                    "normal": {
                        "color": "rgba(255,106,106,1)",
                        "label": {
                            "show": true,
                            "textStyle": {
                                "color": "#fff"
                            },
                            "position": "top",
                            formatter: function (p:any) {
                                return p.value > 0 ? (p.value) : '';
                            }
                        }
                    }
                },
                "data": _data_104_8
            },
        ]
    }
}

export default options