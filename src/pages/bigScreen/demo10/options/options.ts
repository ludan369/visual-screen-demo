import * as echarts from "echarts"

let options = {
    echarts1: echarts1(),
    echarts2: echarts2(),
    echarts3: echarts3(),
    echarts4: echarts4(),
    echarts5: echarts5(),
    echarts6: echarts6(),
    echarts7: echarts7(),
    echarts8: echarts8(),
    mapCharts: mapCharts(),
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
            formatter: function (params: any) {
                let indexX = 0;
                for (let x = 0; x < xData_104_.length; x++) {
                    if (params[0].name === xData_104_[x]) {
                        indexX = x;
                        break;
                    }
                }
                let sum = _data_104_1[indexX] + _data_104_2[indexX] + _data_104_3[indexX] + _data_104_4[indexX] + _data_104_5[indexX] + _data_104_6[indexX] + _data_104_7[indexX] + _data_104_8[indexX]

                let displayString = '检验单位：' + params[0].name
                for (let m = 0; m < params.length; m++) {
                    let itemString = '<br/>' + params[m].marker + params[m].seriesName + ':数量：' + params[m].data + '，' + '占比：' + (params[m].data / sum * 100).toFixed(2) + '%，总数:' + sum;
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
                            formatter: function (p: any) {
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
                            formatter: function (p: any) {
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
                            formatter: function (p: any) {
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
                            formatter: function (p: any) {
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
                            formatter: function (p: any) {
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
                            formatter: function (p: any) {
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
                            formatter: function (p: any) {
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
                            formatter: function (p: any) {
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

function echarts3(): { [key: string]: any } {
    let data = [
        { name: '1 级', value: 5031 },
        { name: '2 级', value: 20530 },
        { name: '3 级', value: 21337 },
        { name: '4 级', value: 654 },
        { name: '5 级', value: 21 },
        { name: '不合格', value: 149 },
        { name: '合格', value: 108718 },
        { name: '监督运行', value: 943 },
        { name: '其他', value: 58347 },
        { name: '停止运行', value: 87 },
        { name: '修理后复检', value: 26 },
        { name: '允许使用', value: 7124 },
        { name: '整改后使用', value: 73 }
    ]
    let xData_106_: any = [],
        yData_106_: any = [];
    let min = 0
    data.map(function (a, b) {
        xData_106_.push(a.name)
        if (a.value === 0) {
            yData_106_.push(a.value + min)
        } else {
            yData_106_.push(a.value)
        }
    })

    return {
        // backgroundColor:"#111c4e",
        color: ['#3398DB'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'line',
                lineStyle: {
                    opacity: 0
                }
            },
            formatter: function (prams: any) {
                if (prams[0].data === min) {
                    return "合格率：0%"
                } else {
                    // return "合格率：" + prams[0].data + "%"
                    // return prams[0].name+"<br>数量：" + prams[0].data
                    let sum = 0;
                    for (let x = 0; x < data.length; x++) {
                        sum = sum + data[x].value
                    }
                    // console.log(sum)
                    return prams[0].name + "<br>数量：" + prams[0].data + '<br>' + '占比：' + (prams[0].data / sum * 100).toFixed(2) + '%,总数:' + sum;
                }
            }
        },
        legend: {
            data: ['直接访问', '背景'],
            show: false
        },
        grid: {
            left: '0%',
            right: '0%',
            bottom: '5%',
            top: '7%',
            height: '85%',
            containLabel: true,
            z: 22
        },
        xAxis: [{
            type: 'category',
            gridIndex: 0,
            data: xData_106_,
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                lineStyle: {
                    color: '#0c3b71'
                }
            },
            axisLabel: {
                show: true,
                // color: 'rgb(170,170,170)',
                // fontSize:16,
                textStyle: {
                    color: '#fff',
                    fontSize: '16'
                },
                rotate: 40,
            }
        }],
        yAxis: [{
            type: 'value',
            gridIndex: 0,
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            min: min,
            max: 120000,
            axisLine: {
                lineStyle: {
                    color: '#0c3b71'
                }
            },
            axisLabel: {
                // color: 'rgb(170,170,170)',
                formatter: '{value} ',
                textStyle: {
                    color: '#fff',
                    fontSize: '16'
                },
            }
        },
        {
            type: 'value',
            gridIndex: 0,
            min: min,
            max: 120000,
            splitNumber: 12,
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: ['rgba(250,250,250,0.0)', 'rgba(250,250,250,0.05)']
                }
            }
        }
        ],
        series: [{
            name: ' ',
            type: 'bar',
            barWidth: '30%',
            xAxisIndex: 0,
            yAxisIndex: 0,
            label: {
                normal: {
                    show: true,
                    "position": "top",
                    "textStyle": {
                        "color": "#fff"
                    },
                }
            },
            itemStyle: {
                normal: {

                    barBorderRadius: 30,
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                            offset: 0,
                            color: '#00feff'
                        },
                        {
                            offset: 0.5,
                            color: '#027eff'
                        },
                        {
                            offset: 1,
                            color: '#0286ff'
                        }
                    ]
                    )
                }
            },
            data: yData_106_,
            zlevel: 11

        },
        {
            name: '背景',
            type: 'bar',
            barWidth: '50%',
            xAxisIndex: 0,
            yAxisIndex: 1,
            barGap: '-135%',
            data: [120000, 120000, 120000, 120000, 120000, 120000, 120000, 120000, 120000, 120000, 120000, 120000, 120000],
            itemStyle: {
                normal: {
                    color: 'rgba(255,255,255,0.1)'
                }
            },
            zlevel: 9
        },

        ]
    }
}

function echarts4(): { [key: string]: any } {
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
    console.log(wei2)

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
            right: '4%',
            bottom: '3%',
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
                    fontSize: 18
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

function mapCharts(): { [key: string]: any } {
    let geoCoordMap: any = {
        '贵阳市': [106.713478, 26.578343],
        '六盘水市': [104.846743, 26.584643],
        '安顺市': [105.932188, 26.245544],
        '黔南州': [107.517156, 26.258219],
        '遵义市': [106.937265, 27.706626]
    }
    let data = [
        { name: '贵阳市', value: 40506 },
        { name: '六盘水市', value: 16036 },
        { name: '安顺市', value: 53036 },
        { name: '黔南州', value: 88036 },
        { name: '遵义市', value: 118036 },
    ]
    let max = 50000, min = 10; // todo
    let maxSize4Pin = 100, minSize4Pin = 20;

    let convertData = function (data: any) {
        let res = [];
        for (let i = 0; i < data.length; i++) {
            let geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return res
    }
    return {
        // backgroundColor: '#091c3d',
        title: {
            top: 0,
            text: '',
            subtext: '',
            x: 'center',
            textStyle: {
                color: '#ccc'
            }
        },

        tooltip: {
            trigger: 'item',
            formatter: function (params: any) {
                let sum = 0;
                for (let x = 0; x < data.length; x++) {
                    sum = sum + data[x].value
                }
                if (typeof (params.value)[2] == "undefined") {
                    return params.name + ' : ' + params.value + "<br>占比：" + (params.value / sum * 100).toFixed(2) + '%，总数:' + sum;
                } else {
                    return params.name + ' : ' + params.value[2] + "<br>占比：" + (params.value[2] / sum * 100).toFixed(2) + '%，总数:' + sum;
                }
            }
        },
        legend: {
            orient: 'vertical',
            y: 'bottom',
            x: 'right',
            data: ['pm2.5'],
            textStyle: {
                color: '#fff'
            }
        },
        visualMap: {
            show: false,
            min: 0,
            max: 50000,
            left: 'left',
            top: 'bottom',
            text: ['高', '低'], // 文本，默认为数值文本
            calculable: true,
            seriesIndex: [1],
            inRange: {
                // color: ['#3B5077', '#031525'] // 蓝黑
                // color: ['#ffc0cb', '#800080'] // 红紫
                // color: ['#3C3B3F', '#605C3C'] // 黑绿
                // color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
                //color: ['#23074d', '#cc5333'] // 紫红
                // color: ['#00467F', '#A5CC82'] // 蓝绿
                // color: ['#1488CC', '#2B32B2'] // 浅蓝
                // color: ['#00467F', '#A5CC82'] // 蓝绿
                // color: ['#00467F', '#A5CC82'] // 蓝绿
                // color: ['#3b0d7f', '#00467F', '#99cbdd',] // 蓝绿
                // color: ['#99cbdd', '#00467F', '#3b0d7f',] // 蓝绿
                color: ['#3ba3dd', '#00467F', '#3b0d7f',] // 蓝绿
                // color: ['#00467F', '#A5CC82'] // 蓝绿

            }
        },
        geo: {
            zoom: 1.2,
            show: true,
            map: 'GZ',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false,
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: 'transparent',
                    borderColor: '#3fdaff',
                    borderWidth: 2,
                    shadowColor: 'rgba(63, 218, 255, 0.5)',
                    shadowBlur: 30
                },
                emphasis: {
                    areaColor: '#2B91B7',
                }
            }
        },
        series: [
            {
                name: 'light',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: convertData(data),
                symbolSize: function (val: any) {
                    return val[2] / 1000;
                },
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#F4E925'
                    }
                }
            },
            {
                type: 'map',
                map: 'jiangxi',
                geoIndex: 0,
                aspectScale: 0.75, //长宽比
                showLegendSymbol: false, // 存在legend时显示
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false,
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                roam: true,
                itemStyle: {
                    normal: {
                        areaColor: '#031525',
                        borderColor: '#FFFFFF',
                    },
                    emphasis: {
                        areaColor: '#2B91B7'
                    }
                },
                animation: false,
                data: data
            },
            {
                name: 'Top 5',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: convertData(data.sort(function (a, b) {
                    return b.value - a.value;
                }).slice(0, 5)),
                symbolSize: function (val: any) {
                    return val[2] / 1000;
                },
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#F4E925',
                        shadowBlur: 30,
                        shadowColor: '#05C3F9'
                    }
                },
                zlevel: 1
            },
            {
                name: '点',
                type: 'scatter',
                coordinateSystem: 'geo',
                symbol: 'pin',
                symbolSize: function (val: any) {
                    let a = (maxSize4Pin - minSize4Pin) / (max - min);
                    let b = minSize4Pin - a * min;
                    b = maxSize4Pin - a * max;
                    return a * val[2] + b;
                },
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            color: '#fff',
                            fontSize: 9,
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#F62157', //标志颜色
                    }
                },
                zlevel: 6,
                data: convertData(data),
            }
        ]
    }
}

function echarts5(): { [key: string]: any } {
    return {
        tooltip: {
            trigger: 'item',
            formatter: function (data: any) {
                // console.log(data);
            },
        },
        radar: [
            {
                indicator: [
                    { text: 'Business Intelligent', max: 100, val: '32,387', position: 'center' },
                    { text: 'IAM', max: 100, val: '32,986', position: 'right' },
                    { text: 'Collaboration Office', max: 100, val: '35,341', position: 'right' },
                    { text: 'Data Exchange Engine', max: 100, val: '39,382', position: 'left' },
                    { text: 'ERP', max: 100, val: '25,926', position: 'left' },
                ],
                // indicator: indicatorData,
                splitNumber: 7,
                center: ['50%', '50%'],
                //shape: 'circle',
                name: {
                    formatter: function (name: any, indicator: any) {
                        if (indicator.position === 'left') {
                            return `{name|${name}}\n\n{val|${indicator.val}}`;
                        } else if (indicator.position === 'right') {
                            return `{name2|${name}}\n\n{val2|${indicator.val}}`;
                        } else {
                            return `{name3|${name}}\n\n{val3|${indicator.val}}`;
                        }
                    },
                    rich: {
                        name: {
                            color: '#B3B3B7',
                            align: 'left',
                            fontSize: 14,
                        },
                        val: {
                            color: '#FFFFFF',
                            align: 'left',
                            fontSize: 20,
                            fontWeight: 600,
                        },
                        name2: {
                            color: '#B3B3B7',
                            align: 'right',
                            fontSize: 14,
                        },
                        val2: {
                            color: '#FFFFFF',
                            align: 'right',
                            fontSize: 20,
                            fontWeight: 600,
                        },
                        name3: {
                            color: '#B3B3B7',
                            align: 'center',
                            fontSize: 14,
                        },
                        val3: {
                            color: '#FFFFFF',
                            align: 'center',
                            fontSize: 20,
                            fontWeight: 600,
                        },
                    },
                    textStyle: {
                        color: '#ffffff',
                    },
                },
                splitArea: {
                    areaStyle: {
                        color: ['#16172D', '#36365C'],
                    },
                },
                axisLine: {
                    lineStyle: {
                        color: '#5A5A89',
                    },
                },
                splitLine: {
                    lineStyle: {
                        color: '#5A5A89',
                    },
                },
            },
        ],
        series: [
            {
                type: 'radar',
                lineStyle: {
                    normal: {
                        color: '#99EFFA',
                        width: 2,
                    },
                },
                lable: {
                    show: true,
                },
                itemStyle: {
                    color: '#99EFFA', //顶点的颜色
                },
                data: [
                    {
                        value: [50, 20, 10, 60, 33],
                        // value: valArr,
                        name: '图一',
                        symbolSize: 10,
                        symbol: 'circle',
                        areaStyle: {
                            color: {
                                type: 'radial',
                                x: 0.5,
                                y: 0.5,
                                r: 0.5,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: 'transparent',
                                    },
                                    {
                                        offset: 0.5,
                                        color: 'transparent',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(59,101,251,.9)',
                                    },
                                ],
                                globalCoord: false,
                            },
                            // opacity: 0 // 区域透明度
                        },
                        itemStyle: {
                            normal: {
                                color: '#000000', //拐点颜色
                                borderColor: '#99EFFA', //拐点边框颜色
                                borderWidth: 2, //拐点边框大小
                            },
                            emphasis: {
                                color: '#000000', //hover拐点颜色定义
                            },
                        },
                    },
                ],
            },
        ],
    }
}

function echarts6(): { [key: string]: any } {
    return {
        color: ['#3398DB'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
                axisTick: {
                    alignWithLabel: true
                },
                //x底部文字
                axisLabel: {
                    textStyle: {
                        color: '#3398DB'
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                //y右侧文字
                axisLabel: {
                    textStyle: {
                        color: '#3398DB'
                    }
                },
                // y轴的分割线
                splitLine: {
                    show: false
                }
            }
        ],
        series: [
            {
                name: '收入统计',
                type: 'bar',
                barWidth: '15',
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#00fffb' },
                        { offset: 1, color: '#0061ce' }
                    ])
                },
                data: [252, 307, 456, 578, 625, 600, 600, 660, 310, 260, 286, 410].map(item => {
                    if (item < 500) {
                        return item
                    } else {
                        return {
                            value: item,
                            itemStyle: {
                                color: '#254065',
                                opacity: 0.5
                            }
                        }
                    }
                })
            },
            {
                name: '收入统计',
                type: 'line',
                smooth: true,
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        // 坐标轴指示器，坐标轴触发有效
                        type: 'line' // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                areaStyle: {
                    opacity: 0.2,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: '#36d9ab'
                        },
                        {
                            offset: 1,
                            color: '#02137c'
                        }
                    ])
                },
                data: [252, 307, 456, 578, 625, 600, 600, 660, 310, 260, 286, 410].map((item) => item * 1.5)
            }
        ]
    }
}

function echarts7(): { [key: string]: any } {
    return {
        title: {
            text: ''
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['货运量', '铁路货运量', '国家铁路货运量', '地方铁路货运量', '合资铁路货运量', '公路货运量', '水运货运量'],
            textStyle: {
                color: '#fff'
            },
            top: '9%'
        },
        grid: {
            left: '5%',
            right: '9%',
            top: '40%',
            bottom: '5%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['2012年', '2013年', '2014年', '2015年', '2016年'],
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            }
        },
        yAxis: {
            name: '单位(万吨)',
            type: 'value',
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            }
        },
        color: ['#FF4949', '#FFA74D', '#FFEA51', '#4BF0FF', '#44AFF0', '#4E82FF', '#584BFF', '#BE4DFF', '#F845F1'],
        series: [
            {
                name: '货运量',
                type: 'line',
                data: [219130, 198009, 209946, 198024, 210586]
            },
            {
                name: '铁路货运量',
                type: 'line',
                data: [21010, 22469, 20619, 17843, 16313]
            },
            {
                name: '国家铁路货运量',
                type: 'line',
                data: [17866, 19354, 17589, 17709, 18589]
            },
            {
                name: '地方铁路货运量',
                type: 'line',
                data: [3034, 2845, 2712, 2790, 2812]
            },
            {
                name: '合资铁路货运量',
                type: 'line',
                data: [111, 271, 318, 327, 349]
            },
            {
                name: '公路货运量',
                type: 'line',
                data: [195530, 172492, 185286, 175637, 189822]
            },
            {
                name: '水运货运量',
                type: 'line',
                data: [2590, 3048, 4041, 4544, 4451]
            }
        ]
    }
}

function echarts8(): { [key: string]: any } {
    let data = [
        { name: '1 级', value: 5031 },
        { name: '2 级', value: 20530 },
        { name: '3 级', value: 21337 },
        { name: '4 级', value: 654 },
        { name: '5 级', value: 21 },
        { name: '不合格', value: 149 },
        { name: '合格', value: 108718 },
        { name: '监督运行', value: 943 },
        { name: '其他', value: 58347 },
        { name: '停止运行', value: 87 },
        { name: '修理后复检', value: 26 },
        { name: '允许使用', value: 7124 },
        { name: '整改后使用', value: 73 }
    ];
    let xData_106_: any = [],
        yData_106_: any = [];
    let min = 0;
    data.map(function (a, b) {
        xData_106_.push(a.name);
        if (a.value === 0) {
            yData_106_.push(a.value + min);
        } else {
            yData_106_.push(a.value);
        }
    })
    return {
        color: ['#3398DB'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'line',
                lineStyle: {
                    opacity: 0
                }
            },
            formatter: function (prams: any) {
                if (prams[0].data === min) {
                    return "合格率：0%"
                } else {
                    // return "合格率：" + prams[0].data + "%"
                    // return prams[0].name+"<br>数量：" + prams[0].data
                    var sum = 0;
                    for (var x = 0; x < data.length; x++) {
                        sum = sum + data[x].value
                    }
                    // console.log(sum)
                    return prams[0].name + "<br>数量：" + prams[0].data + '<br>' + '占比：' + (prams[0].data / sum * 100).toFixed(2) + '%,总数:' + sum;
                }
            }
        },
        legend: {
            data: ['直接访问', '背景'],
            show: false
        },
        grid: {
            left: '0%',
            right: '0%',
            bottom: '5%',
            top: '25%',
            containLabel: true,
            z: 22
        },
        xAxis: [{
            type: 'category',
            gridIndex: 0,
            data: xData_106_,
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                lineStyle: {
                    color: '#0c3b71'
                }
            },
            axisLabel: {
                show: true,
                // color: 'rgb(170,170,170)',
                // fontSize:16,
                textStyle: {
                    color: '#fff',
                    fontSize: '16'
                },
                rotate: 40,
            }
        }],
        yAxis: [{
            type: 'value',
            gridIndex: 0,
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            min: min,
            max: 120000,
            axisLine: {
                lineStyle: {
                    color: '#0c3b71'
                }
            },
            axisLabel: {
                // color: 'rgb(170,170,170)',
                formatter: '{value} ',
                textStyle: {
                    color: '#fff',
                    fontSize: '16'
                },
            }
        },
        {
            type: 'value',
            gridIndex: 0,
            min: min,
            max: 120000,
            splitNumber: 12,
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: ['rgba(250,250,250,0.0)', 'rgba(250,250,250,0.05)']
                }
            }
        }
        ],
        series: [{
            name: ' ',
            type: 'bar',
            barWidth: '30%',
            xAxisIndex: 0,
            yAxisIndex: 0,
            label: {
                normal: {
                    show: true,
                    "position": "top",
                    "textStyle": {
                        "color": "#fff"
                    },
                }
            },
            itemStyle: {
                normal: {

                    barBorderRadius: 30,
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                            offset: 0,
                            color: '#00feff'
                        },
                        {
                            offset: 0.5,
                            color: '#027eff'
                        },
                        {
                            offset: 1,
                            color: '#0286ff'
                        }
                    ]
                    )
                }
            },
            data: yData_106_,
            zlevel: 11

        },
        {
            name: '背景',
            type: 'bar',
            barWidth: '50%',
            xAxisIndex: 0,
            yAxisIndex: 1,
            barGap: '-135%',
            data: [120000, 120000, 120000, 120000, 120000, 120000, 120000, 120000, 120000, 120000, 120000, 120000, 120000],
            itemStyle: {
                normal: {
                    color: 'rgba(255,255,255,0.1)'
                }
            },
            zlevel: 9
        },

        ]
    }
}

export default options