import * as echarts from "echarts"

export let options = {
    echarts1: echarts1(),
    echarts2: echarts2(),
}

function echarts1(): { [key: string]: any } {
    return {
        title: {
            text: ''
        },
        tooltip: {},
        legend: {
            data: ['处理完成', "正在处理", "正在等待"],
            bottom: 30,
            textStyle: { //字体样式
                color: "#fff",
                fontSize: 14,
                fontWeight: "lighter"
            },
            itemGap: 56, //图块间隙
            itemWidth: 44, //图块宽
            itemHeight: 18 //图块高
        },
        grid: {
            top: "10%",
            left: '1%', //折线框左边距
            right: '10%', //折线框右边距
            bottom: '20%', //折线框下边距
            containLabel: true
        },
        xAxis: {
            type: 'category',
            name: "时间",
            data: ["9:00-10:00", "10:00-11:00", "11:00-12:00", "14:00-15:00", "15:00-16:00", "16:00-17:00", "17:00-18:00"],
            nameTextStyle: { //坐标轴名称样式
                color: "#fff",
                fontSize: "14",
                backgroundColor: "" //文字块背景色
            },
            nameGap: 20, //坐标名称与轴线的距离
            axisTick: { //坐标刻度线样式
                lineStyle: {
                    color: "#fff"
                }
            },
            axisLabel: { //坐标轴刻度标签名样式
                color: "#fff",
                fontSize: "12",
                rotate: 0, //文字倾斜(当刻度标签名过长时使用)
                interval: 0 //显示全部                
            },
            axisLine: { //坐标轴线设置
                show: true,
                lineStyle: {
                    color: "#fff",
                    width: "2"
                },
                symbol: ["none", "arrow"], //坐标轴末端箭头
                symbolSize: [8, 20], //箭头高度和宽度
                symbolOffset: [0, 16] //箭头与轴线端点的距离
            },
            splitNumber: 7,
        },
        yAxis: {
            name: "数量",
            splitNumber: 8,
            nameTextStyle: { //坐标轴名称样式
                color: "#fff",
                fontSize: "14",
                backgroundColor: "" //文字块背景色
            },
            nameGap: 20, //坐标名称与轴线的距离
            axisLine: { //坐标轴线设置
                show: true,
                lineStyle: {
                    color: "#fff",
                    width: "2"
                },
                symbol: ["none", "arrow"], //坐标轴末端箭头
                symbolSize: [8, 20], //箭头高度和宽度
                symbolOffset: [0, 16] //箭头与轴线端点的距离
            },
            axisTick: { //坐标刻度线样式
                lineStyle: {
                    color: "#fff"
                }
            },
            axisLabel: { //坐标轴刻度标签名样式
                color: "#fff",
                fontSize: "12"
            },
            splitLine: { //垂直分割线
                show: true,
                lineStyle: {
                    color: "#02416D",
                    width: "1"
                }
            },
        },
        series: [{
            name: '处理完成',
            type: 'bar',
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: '#3E3CB5'
            }, {
                offset: 1,
                color: '#D66BFD'
            }]),
            data: [200, 330, 440, 550, 660, 770, 880]
        }, {
            name: '正在处理',
            type: 'bar',
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: '#0D52A1'
            }, {
                offset: 1,
                color: '#09F6FD'
            }]),
            data: [880, 770, 660, 550, 440, 330, 220]
        }, {
            name: '正在等待',
            type: 'bar',
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, //颜色线性渐变:Linear，（径向渐变：Radial）
                [{
                    offset: 0,
                    color: '#025B71'
                }, {
                    offset: 1,
                    color: '#3BFE91'
                }]
            ),
            //barGap:0,                                           //条形组中各条形图之间的距离
            //barCategoryGap:100,                                   //条形组之间的距离
            data: [550, 420, 360, 750, 460, 660, 290],
            //barWidth:30,
            // barMaxWidth:30
        }]
    };

}

function echarts2(): { [key: string]: any } {
    var echartdata = [515, 200, 100, 150];
    var rich = {
        yellow: {
            color: "#ffc72b",
            fontSize: 18,
            padding: [2, 4],
            align: 'center'
        },
        total: {
            color: "#ffc72b",
            fontSize: 20,
            align: 'center'
        },
        white: {
            color: "#fff",
            align: 'center',
            fontSize: 16,
            padding: [10, 0]
        },
        blue: {
            color: '#49dff0',
            fontSize: 16,
            align: 'center'
        },
        hr: {
            borderColor: 'auto',
            width: '100%',
            borderWidth: 1,
            height: 0,
        }
    };
    return {
        tooltip: {
            trigger: 'item',
            formatter: "{b}: {c} ({d}%)"
        },
        legend: {
            data: ['成交数', "等待数", "取消数", "成交中"],

            bottom: 100,
            left: "right",
            right: 0,
            align: "left",
            textStyle: { //字体样式
                color: "#fff",
                fontSize: 14,
                fontWeight: "lighter"
            },
            itemGap: 56, //图块间隙
            itemWidth: 44, //图块宽
            itemHeight: 18, //图块高
            orient: "vertical"
        },
        grid: {
            top: "10%",
            // left: '1%', //折线框左边距
            right: '1%', //折线框右边距
            // bottom: '20%', //折线框下边距
            containLabel: true
        },
        series: [{
            type: 'pie',
            label: {
                fontSize: 24,
                normal: {
                    color: "#fff",
                    //formatter: '{b|{b}\n     {d}%}',
                    formatter: function (params: any, ticket: any, callback: any) {
                        var total = 0; //总数量
                        var percent = 0; //占比
                        echartdata.forEach(function (value, index) {
                            total += value;
                        });
                        // @ts-ignore
                        percent = ((params.value / total) * 100).toFixed(1);
                        return '{white|' + params.name + '}\n\n{yellow|' + params.value + '}\n{blue|' + percent + '%}';
                    },
                    padding: [0, -50],
                    rich: rich
                }
            },
            labelLine: {
                lineStyle: {
                    //color: auto
                    width: 2
                },
                length: 20,
                length2: 50
            },
            radius: ['40%', '60%'],
            data: [{
                value: echartdata[0],
                itemStyle: {
                    color: "#E6C146"
                },
                name: '成交数'
            }, {
                value: echartdata[1],
                itemStyle: {
                    color: "#46F0FF"
                },
                name: '等待数'
            }, {
                value: echartdata[2],
                itemStyle: {
                    color: "#D591FE",
                },
                name: '取消数'
            }, {
                value: echartdata[2],
                itemStyle: {
                    color: "#7689FF",
                },
                name: '成交中'
            }]
        },]
    }
}

export function echarts3(echartdata:Array<Number>): { [key: string]: any } {
    let rich = {
		yellow: {
			color: "#ffc72b",
			fontSize: 18,
			padding: [2, 4],
			align: 'center'
		},
		total: {
			color: "#ffc72b",
			fontSize: 20,
			align: 'center'
		},
		white: {
			color: "#fff",
			align: 'center',
			fontSize: 16,
			padding: [10, 0]
		},
		blue: {
			color: '#49dff0',
			fontSize: 16,
			align: 'center'
		},
		hr: {
			borderColor: 'auto',
			width: '100%',
			borderWidth: 1,
			height: 0,
		}
	}
    return {
        tooltip: {
            trigger: 'item',
            formatter: "{b}: {c} ({d}%)"
        },
        series: [{
            type: 'pie',
            label: {
                fontSize: 24,
                normal: {
                    color: "#fff",
                    //formatter: '{b|{b}\n     {d}%}',
                    formatter: function (params:any, ticket:any, callback:any) {
                        var total = 0; //总数量
                        var percent = 0; //占比
                        echartdata.forEach(function (value:any, index:any) {
                            total += value;
                        });
                        // @ts-ignore
                        percent = ((params.value / total) * 100).toFixed(1);
                        return '{white|' + params.name + '}\n\n{yellow|' + params.value + '}\n{blue|' + percent + '%}';
                    },
                    // borderWidth: 0,
                    // borderRadius: 4,
                    // shadowBlur:3,
                    // shadowOffsetX: 2,
                    // shadowOffsetY: 2,
                    // shadowColor: '#999',
                    padding: [0, -50],
                    rich: rich
                }
            },
            labelLine: {
                lineStyle: {
                    //color: auto
                    width: 2
                },
                length: 20,
                length2: 50
            },
            radius: ['40%', '60%'],
            data: [{
                value: echartdata[0],
                itemStyle: {
                    color: "#1D3EF9"
                },
                name: '今日交割'
            }, {
                value: echartdata[1],
                itemStyle: {
                    color: "#FBED14"
                },
                name: '今日挂牌'
            }, {
                value: echartdata[2],
                itemStyle: {
                    color: "#3BF88F",
                },
                name: '今日冻结'
            }]
        }]
    }
}
