import * as echarts from "echarts"

export let options = {
    echarts1: echarts1(),
    echarts2: echarts2(),
    echarts3: echarts3(),
    echarts4: echarts4(),
    echarts5: echarts5(),
    echarts6: echarts6(),
}

function echarts1(): { [key: string]: any } {
    return {
        grid: {show:'true',borderWidth:'0'},
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },

            formatter: function (params:any) {
                var tar = params[0];
                return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
            }
        },

        xAxis : [
            {
                type : 'category',
                splitLine: {show:false},
                data : ['客运车','危险品车','网约车','学生校车'],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                }

            }
        ],
        yAxis : [
            {
                type : 'value',
                splitLine: {show:false},
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                }
            }
        ],
        series : [

            {
                name:'报警数量',
                type:'bar',
                stack: '总量',
                itemStyle : {
                    normal: {
                        label : {show: true, position: 'inside'},
                        color: '#44aff0'
                    }
                    },
                data:[2900, 1200, 300, 200]
            }
        ]
    }
}

function echarts2(): { [key: string]: any } {
    let data = [
        {value: 12,name: '行业一'},
        {value: 13,name: '行业二'},
        {value: 70,name: '行业三'},
        {value: 52,name: '行业四'},
        {value: 35,name: '行业五'}
    ];

    return {
        backgroundColor: 'rgba(0,0,0,0)',
        tooltip: {
            trigger: 'item',
            formatter: "{b}: <br/>{c} ({d}%)"
        },
        color: ['#af89d6', '#4ac7f5', '#0089ff', '#f36f8a', '#f5c847'],
        legend: { //图例组件，颜色和名字
            x: '70%',
            y: 'center',
            orient: 'vertical',
            itemGap: 12, //图例每项之间的间隔
            itemWidth: 10,
            itemHeight: 10,
            icon: 'rect',
            data: ['行业一', '行业二', '行业三', '行业四', '行业五'],
            textStyle: {
                color: [],
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 12,
            }
        },
        series: [{
            name: '行业占比',
            type: 'pie',
            clockwise: false, //饼图的扇区是否是顺时针排布
            minAngle: 20, //最小的扇区角度（0 ~ 360）
            center: ['35%', '50%'], //饼图的中心（圆心）坐标
            radius: [50, 75], //饼图的半径
            avoidLabelOverlap: true, ////是否启用防止标签重叠
            itemStyle: { //图形样式
                normal: {
                    borderColor: '#1e2239',
                    borderWidth: 2,
                },
            },
            label: { //标签的位置
                normal: {
                    show: true,
                    position: 'inside', //标签的位置
                    formatter: "{d}%",
                    textStyle: {
                        color: '#fff',
                    }
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontWeight: 'bold'
                    }
                }
            },
            data: data
        }, {
            name: '',
            type: 'pie',
            clockwise: false,
            silent: true,
            minAngle: 20, //最小的扇区角度（0 ~ 360）
            center: ['35%', '50%'], //饼图的中心（圆心）坐标
            radius: [0, 40], //饼图的半径
            itemStyle: { //图形样式
                normal: {
                    borderColor: '#1e2239',
                    borderWidth: 1.5,
                    opacity: 0.21,
                }
            },
            label: { //标签的位置
                normal: {
                    show: false,
                }
            },
            data: data
        }]
    }
}

function echarts3(): { [key: string]: any } {
    return {
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },

        legend: {
            // align: 'center',
            // left: '65%',
            top: '28',
            data: ['行驶', '停车', '熄火', '离线'],
            itemWidth:16,
            itemHeight:12,
            // borderRadius: 0, // 统一设置四个角的圆角大小
            icon: 'rect',
            textStyle: {
                itemGap: 12, //图例每项之间的间隔
                color: [],
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 14,
            }
        },
        grid: {
            left: '5%',
            right: '5%',
            bottom: '5%',
            containLabel: true
        },

        xAxis: {
            axisLabel: { //调整x轴的lable
                textStyle: {
                    color: '#fff',
                    fontSize: 13,
                }
            },
            splitLine: {
                show: false
            }
        },
        yAxis: {
            type: 'category',
            data: ['学生班车', '网约车', '危险品运输车', '客运车'],
            axisTick : {show: true},
            axisLabel: { //调整x轴的lable
                textStyle: {
                    color: '#fff',
                    fontSize: 13,
                }
            },
            splitLine: {
                show: false
            }
        },
        series: [{
            name: '行驶',
            type: 'bar',
            stack: '总量',
            color:'#0035f9',
            barWidth : 18,
            label: {
                normal: {
                    show: false,
                    position: 'insideRight'
                }
            },
            data: [4, 10, 8, 7]
        }, {
            name: '停车',
            type: 'bar',
            stack: '总量',
            color:'#f36f8a',
            barWidth : 20,
            label: {
                normal: {
                    show: false,
                    position: 'insideRight'
                }
            },
            data: [10, 4, 5, 6]
        }, {
            name: '熄火',
            type: 'bar',
            stack: '总量',
            color:'#efe39b',
            barWidth : 20,
            label: {
                normal: {
                    show: false,
                    position: 'insideRight'
                }
            },
            data: [4, 10, 8, 7]
        }, {
            name: '离线',
            type: 'bar',
            stack: '总量',
            color:'#25f3e6',
            barWidth : 20,
            label: {
                normal: {
                    show: false,
                    position: 'insideRight'
                }
            },
            data: [4, 10, 8, 7]
        }

        ]

    }
}

function echarts4(): { [key: string]: any } {
    return {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        },
        "legend": {

            "data": [
                {"name": "图例1"},
                {"name": "图例2"},
                {"name": "完成率"}
            ],
            "top": "0%",
            "textStyle": {
                "color": "rgba(255,255,255,0.9)"//图例文字
            }
        },

        "xAxis": [
            {
                "type": "category",

                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                axisLine: { lineStyle: {color: "rgba(255,255,255,.1)"}},
                axisLabel:  { textStyle: {color: "rgba(255,255,255,1)", fontSize: '14', },
                },

            },
        ],
        "yAxis": [
            {
                "type": "value",
                "name": "金额",
                "min": 0,
                "max": 50,
                "interval": 10,
                "axisLabel": {
                    "show": true,

                },
                axisLine: {lineStyle: {color: 'rgba(255,255,67,.8)'}},//左线色

            },
            {
                "type": "value",
                "name": "完成率",
                "show": true,
                "axisLabel": {
                    "show": true,

                },
                axisLine: {lineStyle: {color: 'rgba(255,255,67,.8)'}},//右线色
                splitLine: {show:true,lineStyle: {color:"#ffffff"}},//x轴线
            },
        ],
        "grid": {
            "top": "10%",
            "right":"30",
            "bottom":"30",
            "left":"30",
        },
        "series": [
            {
                "name": "图例1",

                "type": "bar",
                "data": [4,6,36,6,8,6,4,6,30,6,8,12],
                "barWidth": "auto",
                "itemStyle": {
                    "normal": {
                        "color": {
                            "type": "linear",
                            "x": 0,
                            "y": 0,
                            "x2": 0,
                            "y2": 1,
                            "colorStops": [
                                {
                                    "offset": 0,
                                    "color": "#609db8"
                                },

                                {
                                    "offset": 1,
                                    "color": "#609db8"
                                }
                            ],
                            "globalCoord": false
                        }
                    }
                }
            },
            {
                "name": "图例2",
                "type": "bar",
                "data": [
                    4,2,34,6,8,6,4,2,32,6,8,18
                ],
                "barWidth": "auto",

                "itemStyle": {
                    "normal": {
                        "color": {
                            "type": "linear",
                            "x": 0,
                            "y": 0,
                            "x2": 0,
                            "y2": 1,
                            "colorStops": [
                                {
                                    "offset": 0,
                                    "color": "#66b8a7"
                                },
                                {
                                    "offset": 1,
                                    "color": "#66b8a7"
                                }
                            ],
                            "globalCoord": false
                        }
                    }
                },
                "barGap": "0"
            },
            {
                "name": "完成率",
                "type": "line",
                "yAxisIndex": 1,

                "data": [100,50,80,30,90,40, 70,33,100,40,80,20],
                lineStyle: {
                    normal: {
                        width: 2
                    },
                },
                "itemStyle": {
                    "normal": {
                        "color": "#cdba00",

                    }
                },
                "smooth": true
            }
        ]
    }
}

function echarts5(): { [key: string]: any } {
    let xAxisData = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9','10','11','12','13','14','15','16','17','18','19','20','21','22','23'];
    let legendData= ['','',''];
    let title = "";
    let serieData = [];
    let metaDate = [
        [120, 140, 100, 120, 300, 230, 130, 170,140, 120, 300, 230,120, 140, 100, 120, 300, 230, 130, 170,140, 120, 300, 230]
    ]
    for(var v=0; v < legendData.length ; v++){
        var serie = {
            name:legendData[v],
            type: 'line',
            symbol:"circle",
            symbolSize:10,
            data: metaDate[v]
        };
        serieData.push(serie)
    }
    let colors = ["#ffff43"];
    return {
        backgroundColor: 'transparent',
        title : {text: title,textAlign:'left',textStyle:{color:"#fff",fontSize:"16",fontWeight:"normal"}},

        color:colors,
        grid: {left: '4%',top:"30%",bottom: "5%",right:"4%",containLabel: true},
        tooltip : { trigger: 'axis',axisPointer : { type : 'shadow'}},
        xAxis: [
            {
                type: 'category',
                axisLine: { show: true,lineStyle:{ color:'#2c3459' }},
                axisLabel:{interval:0,textStyle:{color:'#fff',fontSize:12} },
                axisTick : {show: false},
                data:xAxisData,
            },
        ],
        yAxis: [
            {
                axisTick : {show: false},
                splitLine: {show:false},
                axisLabel:{textStyle:{color:'#fff',fontSize:12} },
                axisLine: { show: true,lineStyle:{ color:'#2c3459'}},
            },
        ],
        series:serieData
    }
}

function echarts6(): { [key: string]: any } {
    return {
        backgroundColor: 'rgba(0,0,0,0)',
        tooltip: {
            trigger: 'item',
            formatter: "{b}  <br/>{c}辆"
        },
        legend: {
            x: 'center',
            y: '2%',
            data: ['车型一', '车型二', '车型三', '车型四', '车型五'],
            icon: 'circle',
            textStyle: {
                color: '#fff',
            }
        },
        calculable: true,
        series: [{
            name: '车型',
            type: 'pie',
            //起始角度，支持范围[0, 360]
            startAngle: 0,
            //饼图的半径，数组的第一项是内半径，第二项是外半径
            radius: [41, 110],
            //支持设置成百分比，设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度
            center: ['50%', '20%'],
            //是否展示成南丁格尔图，通过半径区分数据大小。可选择两种模式：
            // 'radius' 面积展现数据的百分比，半径展现数据的大小。
            //  'area' 所有扇区面积相同，仅通过半径展现数据大小
            roseType: 'area',
            //是否启用防止标签重叠策略，默认开启，圆环图这个例子中需要强制所有标签放在中心位置，可以将该值设为 false。
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,
                    formatter: '{c}辆'
                },
                emphasis: {
                    show: true
                }
            },
            labelLine: {
                normal: {
                    show: true,
                    length2: 1,
                },
                emphasis: {
                    show: true
                }
            },
            data: [{
                value: 600,
                name: '车型一',
                itemStyle: {
                    normal: {
                        color: '#f845f1'
                    }
                }
            },
                {
                    value: 1100,
                    name: '车型二',
                    itemStyle: {
                        normal: {
                            color: '#ad46f3'
                        }
                    }
                },
                {
                    value: 1200,
                    name: '车型三',
                    itemStyle: {
                        normal: {
                            color: '#5045f6'
                        }
                    }
                },
                {
                    value: 1300,
                    name: '车型四',
                    itemStyle: {
                        normal: {
                            color: '#4777f5'
                        }
                    }
                },
                {
                    value: 1400,
                    name: '车型五',
                    itemStyle: {
                        normal: {
                            color: '#44aff0'
                        }
                    }
                },

                {
                    value: 0,
                    name: "",
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                {
                    value: 0,
                    name: "",
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                {
                    value: 0,
                    name: "",
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                {
                    value: 0,
                    name: "",
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                {
                    value: 0,
                    name: "",
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            ]
        }]
    }
}