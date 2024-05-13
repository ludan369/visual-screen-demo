import * as echarts from "echarts"

export let options = {
    echarts1: echarts1(),
    echarts2: echarts2(),
    echarts4: echarts4(),
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

export function mapCharts(mapName:string,data:[{ [key: string]: any }]): { [key: string]: any } {
    return {
        tooltip: { //鼠标hover是提示信息
            show: true, //不显示提示标签
            formatter: '{b}', //提示标签格式
            backgroundColor: "#ff7f50", //提示标签背景颜色
            textStyle: {
                color: "#fff",
                fontSize: "20"
            } //提示标签字体颜色
        },
        visualMap: { //视觉映射组件()
            type: "continuous", //连续型
            min: 0,
            max: 150,
            left: 990,
            top: 800,
            text: ['150', '0'], // 文本，默认为数值文本
            textGap: 10, //文本与图形之间的距离
            itemWidth: 40, //图形的宽
            itemHeight: 200, //突刺是哪个的高
            calculable: true, //是否显示拖动手柄
            textStyle: {
                color: "#fff",
                fontSize: 25,


            }, //省份标签字体颜色
            //align:"left",
            //inverse: true, //反向
            inRange: { //地图颜色变化
                color: ['#3246FB', '#24DD57', '#FDD52C']
            }
            // outOfRange:{
            // 	symbolSize: [100, 100]
            // }
        },
        series: [{
            type: 'map',
            color: "red",
            mapType: mapName,
            roam: "false", //是否开启缩放平移
            label: { //标签字体样式
                position: "inside",
                normal: { //正常情况下显示效果
                    show: true, //显示省份标签
                    textStyle: {
                        color: "#fff",
                        fontSize: 20
                    } //省份标签字体颜色
                },
                emphasis: { //对应的鼠标悬浮效果
                    show: true,
                    textStyle: {
                        color: "#800080"
                    }
                }
            },
            itemStyle: {
                normal: {
                    borderWidth: 2, //区域边框宽度
                    borderColor: '#fff', //区域边框颜色
                    //areaColor: "#ffefd5", //区域颜色
                    fontSize: "30"
                },
                emphasis: {
                    borderWidth: 2,
                    borderColor: '#3246FB',
                    //areaColor: "red",
                },
            },
            data: data
        }],
    }
}

function echarts4(): { [key: string]: any } {
    return {
		textStyle: { //全局字体样式设置
			color: "#000",
			fontSize: 30,
			fontWeight: "lighter"
		},
		nameTextStyle: { //轴名称字体样式
			color: "#0BA4E8",
			fontWeight: "normal"
		},
		tooltip: { //鼠标hover显示提示信息
			trigger: 'axis'
		},
		legend: {
			data: ['一年生暖季牧草', '一年生冷季牧草', '多年生牧草', "进口饲草"],
			//width: 40,
			//height: 40,
			//right: 50,
			top: 130,
			//orient: "vertical", //纵向排列
			itemGap: 25,
			textStyle: {
				color: "#fff",
				fontSize: "24"
			}
		},
		grid: {
			top: "20%",
			left: '1%', //折线框左边距
			right: '11%', //折线框右边距
			bottom: '8%', //折线框下边距
			containLabel: true
		},
		color: ['#46B05D', '#AF4B87', '#03A2E9', "#F5D52E"],
		xAxis: {
			type: 'category',
			name: "2024年",
			nameGap: 24,
			nameTextStyle: { //坐标轴名称样式
				color: "#fff",
				fontSize: "24",
				backgroundColor: "" //文字块背景色
			},
			data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月', ],
			splitLine: { //垂直分割线
				show: false,
				lineStyle: {
					color: "#ccc",
					width: "0.5"
				}
			},
			splitArea: {
				show: ''
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
			axisTick: { //坐标刻度线样式
				lineStyle: {
					color: "#fff",
					width: "2"
				}
			},
			axisLabel: { //刻度线
				textStyle: {
					color: "#fff",
					fontSize: 24,
					fontWeight: "normal",
					interval: 0 //显示全部  					
				}
			},
			// axisLabel: { //坐标轴刻度标签名样式
			// 	color: "#fff",
			// 	fontSize: "14",
			// 	rotate: 0, //文字倾斜(当刻度标签名过长时使用)
			// 	interval: 0 //显示全部                
			// },
		},
		yAxis: {
			type: 'value',
			//splitNumber: 5 ,				//轴分割段数
			min: 0, //轴坐标最小值
			//max:1300,						//轴坐标最大值
			interval: 260, //强制每段260分割
			boundaryGap: false,
			name: "kg/元",
			nameGap: 30,
			nameTextStyle: { //坐标轴名称样式
				color: "#fff",
				fontSize: "24",
				//backgroundColor: "" //文字块背景色

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
			splitLine: { //水平垂直分割线样式
				show: true,
				lineStyle: {
					color: "#02416D",
					width: "0.5"
				}
			},
			axisTick: { //坐标刻度线样式
				lineStyle: {
					color: "#fff",
					width: "2"
				}
			},
			axisLabel: { //轴刻度字体样式设置
				textStyle: {
					color: "#fff",
					fontSize: 24,
					fontWeight: "normal",
					interval: 0 //显示全部  
				}
			}
		},
		series: [{
			name: '一年生暖季牧草',
			type: 'line',
			//symbol:"circle", 				//标记图像样式（折线上的点的样式，默认为圆形）
			symbolSize: "6",
			itemStyle: { //折线观点的样式
				//color: "red",
				//borderColor: "green"
			},
			areaStyle: { //区域填充样式
				color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					offset: 0,
					color: 'rgba(62,155,93,.1)'
				}, {
					offset: 1,
					color: 'rgba(62,155,93,.3)'
				}]),
			},
			smooth: false, //折线是否平滑
			data: [1300, 1300, 1300, 1300, 1190, 800, 900, 1000, 1200, 1000, 900, 850]
		}, {
			name: '一年生冷季牧草',
			type: 'line',
			smooth: false,
			areaStyle: { //区域填充样式
				color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					offset: 0,
					color: 'rgba(173,75,135,.1)'
				}, {
					offset: 1,
					color: 'rgba(173,75,135,.3)'
				}]),
			},
			data: [1220, 1220, 1220, 1220, 1100, 720, 820, 920, 1000, 1200, 1500, 1300]
		}, {
			name: '多年生牧草',
			type: 'line',
			smooth: false,
			areaStyle: { //区域填充样式
				color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					offset: 0,
					color: 'rgba(3,160,230,.1)'
				}, {
					offset: 1,
					color: 'rgba(3,160,230,.3)'
				}]),
			},
			data: [1000, 900, 800, 620, 680, 680, 720, 840, 1230, 1000, 900, 1100, ]
		}, {
			name: '进口饲草',
			type: 'line',
			smooth: false,
			areaStyle: { //区域填充样式
				color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					offset: 0,
					color: 'rgba(230,206,52,.1)'
				}, {
					offset: 1,
					color: 'rgba(230,206,52,.3)'
				}]),
			},
			data: [1200, 970, 1000, 720, 780, 880, 920, 740, 900, 1000, 800, 1200]
		}]
	}
}

export function echarts3(echartdata: Array<Number>): { [key: string]: any } {
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
                    formatter: function (params: any, ticket: any, callback: any) {
                        var total = 0; //总数量
                        var percent = 0; //占比
                        echartdata.forEach(function (value: any, index: any) {
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
