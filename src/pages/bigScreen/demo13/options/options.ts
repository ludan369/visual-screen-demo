import * as echarts from "echarts"
import 'echarts-wordcloud'

export let options = {
    echarts1: echarts1(),
    echarts2: echarts2(),
    echarts3: echarts3(),
    echarts4: echarts4(),
    echarts5: echarts5(),
    echarts6: echarts6(),
}

function echarts1(): { [key: string]: any } {
    let pieData = [
        { name: 'MPV', value: 8031 },
        { name: 'SUV', value: 174928 },
        { name: '大型车', value: 342 },
        { name: '紧凑型车', value: 55595 },
        { name: '微型车', value: 1001 },
        { name: '小型车', value: 11617 },
        { name: '中大型车', value: 26715 },
        { name: '中型车', value: 29224 },
    ]
    return {
        color: [
            "#A0CE3A",
            "#31C5C0",
            "#1E9BD1",
            "#0F347B",
            "#585247",
            "#7F6AAD",
            "#009D85",
            "rgba(250,250,250,0.3)",
        ],
        legend: {
            orient: "vertical",
            top: "middle",
            right: "3%",
            textStyle: {
                color: "#f2f2f2",
                fontSize: '12px',
            },
            icon: "roundRect",
            data: pieData,
        },
        tooltip: {
            show: true,
            valueFormatter: (value: any) => value + '个'
        },
        series: [
            // 主要展示层的
            {
                radius: ["30%", "65%"],
                center: ["37%", "50%"],
                type: "pie",
                label: {
                    normal: {
                        show: false,
                        formatter: "{c}个",
                        textStyle: {
                            color: "rgba(250,250,250)",
                            fontSize: '12px',
                        },
                        position: "outside",
                    },
                    emphasis: {
                        show: false,
                    },
                },
                labelLine: {
                    normal: {
                        show: false,
                        length: 10,
                        length2: 0
                    },
                    emphasis: {
                        show: true,
                    },
                },
                name: "上牌数",
                data: pieData,
            },
            // 边框的设置
            {
                radius: ["30%", "34%"],
                center: ["37%", "50%"],
                type: "pie",
                label: {
                    normal: {
                        show: false,
                    },
                    emphasis: {
                        show: false,
                    },
                },
                labelLine: {
                    normal: {
                        show: false,
                    },
                    emphasis: {
                        show: false,
                    },
                },
                animation: false,
                tooltip: {
                    show: false,
                },
                data: [
                    {
                        value: 1,
                        itemStyle: {
                            color: "rgba(250,250,250,0.3)",
                        },
                    },
                ],
            },
            {
                name: "外边框",
                type: "pie",
                clockWise: false, //顺时加载
                hoverAnimation: false, //鼠标移入变大
                center: ["37%", "50%"],
                radius: ["70%", "70%"],
                label: {
                    normal: {
                        show: false,
                    },
                },
                data: [
                    {
                        value: 9,
                        name: "",
                        itemStyle: {
                            normal: {
                                borderWidth: 2,
                                borderColor: "#0b5263",
                            },
                        },
                    },
                ],
            },
        ],
    }
}

function echarts2(): { [key: string]: any } {
    let pieData = [
        { name: '0-10万', value: 3351 },
        { name: '10-20万', value: 134528 },
        { name: '20-30万', value: 76540 },
        { name: '30万-50万', value: 83470 },
        { name: '50万-100万', value: 5878 },
        { name: '100万以上', value: 1436 },
    ]

    return {
        color: [
            "#31C5C0",
            "#009D85",
            "#A0CE3A",
            "#7F6AAD",
            "#585247",
            "rgba(250,250,250,0.3)",
            "#1E9BD1",
            "#0F347B",
        ],
        legend: {
            orient: "vertical",
            top: "middle",
            right: "3%",
            textStyle: {
                color: "#f2f2f2",
                fontSize: '12px',
            },
            icon: "roundRect",
            data: pieData,
        },
        tooltip: {
            show: true,
            valueFormatter: (value: any) => value + '个'
        },
        series: [
            // 主要展示层的
            {
                radius: ["30%", "65%"],
                center: ["37%", "50%"],
                type: "pie",
                label: {
                    normal: {
                        show: false,
                        formatter: "{c}个",
                        textStyle: {
                            color: "rgba(250,250,250)",
                            fontSize: '12px',
                        },
                        position: "outside",
                    },
                    emphasis: {
                        show: false,
                    },
                },
                labelLine: {
                    normal: {
                        show: false,
                        length: 10,
                        length2: 0
                    },
                    emphasis: {
                        show: true,
                    },
                },
                name: "上牌数",
                data: pieData,
            },
            // 边框的设置
            {
                radius: ["30%", "34%"],
                center: ["37%", "50%"],
                type: "pie",
                label: {
                    normal: {
                        show: false,
                    },
                    emphasis: {
                        show: false,
                    },
                },
                labelLine: {
                    normal: {
                        show: false,
                    },
                    emphasis: {
                        show: false,
                    },
                },
                animation: false,
                tooltip: {
                    show: false,
                },
                data: [
                    {
                        value: 1,
                        itemStyle: {
                            color: "rgba(250,250,250,0.3)",
                        },
                    },
                ],
            },
            {
                name: "外边框",
                type: "pie",
                clockWise: false, //顺时加载
                hoverAnimation: false, //鼠标移入变大
                center: ["37%", "50%"],
                radius: ["70%", "70%"],
                label: {
                    normal: {
                        show: false,
                    },
                },
                data: [
                    {
                        value: 9,
                        name: "",
                        itemStyle: {
                            normal: {
                                borderWidth: 2,
                                borderColor: "#0b5263",
                            },
                        },
                    },
                ],
            },
        ],
    }
}

function echarts3(): { [key: string]: any } {
    let lineYear = [202206, 202207, 202208, 202209, 202210, 202211, 202212, 202301];
    let lineOneData = [28377, 51268, 30481, 44944, 31295, 53550, 55453, 12085];  // 新能源
    let lineTwoData = [20768, 16588, 19327, 30162, 16270, 32470, 31849, 10228];  // 纯电动
    let lineThreeData = [6394, 8073, 10468, 13077, 13025, 17901, 18821, 1590];   // 油电混合
    let lineFourData = [1215, 973, 686, 1705, 2000, 3179, 4783, 267];   // 增程式 
    return {
        tooltip: {
            trigger: "axis",
            axisPointer: {
                lineStyle: {
                    color: "#dddc6b"
                }
            }
        },
        legend: {
            top: "10%",
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: '16px'
            }
        },
        grid: {
            left: "2%",
            top: "23%",
            right: "6%",
            bottom: "6%",
            containLabel: true
        },
        calculable: true,
        xAxis: {
            type: "category",
            boundaryGap: false,
            axisLine: {
                lineStyle: {
                    color: "#90979c",
                },
            },
            splitLine: "none",
            axisTick: "none",
            splitArea: "none",
            axisLabel: {
                interval: 0,
                fontSize: '16px'
            },
            data: lineYear,
        },
        yAxis: {
            type: "value",
            axisTick: { show: false },
            axisLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)"
                }
            },
            axisLabel: {
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: '16px'
                }
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)"
                }
            }
        },
        series: [
            {
                name: "新能源",
                type: "line",
                symbol: "circle",
                symbolSize: 5,
                lineStyle: {
                    normal: {
                        color: "#0184d5",
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [
                                {
                                    offset: 0,
                                    color: "rgba(1, 132, 213, 0.4)"
                                },
                                {
                                    offset: 0.8,
                                    color: "rgba(1, 132, 213, 0.1)"
                                }
                            ],
                            false
                        ),
                        shadowColor: "rgba(0, 0, 0, 0.1)"
                    }
                },
                itemStyle: {
                    color: "#0184d5",
                },
                data: lineOneData,
            },
            {
                name: "纯电动",
                type: "line",
                symbol: "circle",
                symbolSize: 5,
                lineStyle: {
                    normal: {
                        color: "#00d887",
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [
                                {
                                    offset: 0,
                                    color: "rgba(0, 216, 135, 0.4)"
                                },
                                {
                                    offset: 0.8,
                                    color: "rgba(0, 216, 135, 0.1)"
                                }
                            ],
                            false
                        ),
                        shadowColor: "rgba(0, 0, 0, 0.1)"
                    }
                },
                itemStyle: {
                    normal: {
                        color: "#00d887",
                    }
                },
                data: lineTwoData
            },
            {
                name: "油电混合",
                type: "line",
                symbol: "circle",
                symbolSize: 5,
                lineStyle: {
                    color: "#F8B448",
                    width: 2
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [
                                {
                                    offset: 0,
                                    color: "rgba(248,180,72, 0.4)"
                                },
                                {
                                    offset: 0.8,
                                    color: "rgba(248,180,72, 0.1)"
                                }
                            ],
                            false
                        ),
                        shadowColor: "rgba(0, 0, 0, 0.1)"
                    }
                },
                itemStyle: {
                    color: "#F8B448",
                },
                data: lineThreeData
            },
            {
                name: "增程式",
                type: "line",
                symbol: "circle",
                symbolSize: 5,
                lineStyle: {
                    normal: {
                        color: "#e32f46",
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [
                                {
                                    offset: 0,
                                    color: "rgba(227,47,70, 0.4)"
                                },
                                {
                                    offset: 0.8,
                                    color: "rgba(227,47,70, 0.1)"
                                }
                            ],
                            false
                        ),
                        shadowColor: "rgba(0, 0, 0, 0.1)"
                    }
                },
                itemStyle: {
                    color: "#e32f46",
                },
                data: lineFourData
            },

        ]
    }
}

function echarts4(): { [key: string]: any } {
    return {
        series: [
            {
                name: "热点分析",
                type: "wordCloud",
                textPadding: 0,
                autoSize: {
                    enable: true,
                    minSize: 6,
                },
                textStyle: {
                    normal: {
                        color: function () {
                            return (
                                "rgb(" +
                                [
                                    Math.round(Math.random() * 105) + 150,
                                    Math.round(Math.random() * 105) + 150,
                                    Math.round(Math.random() * 105) + 150,
                                ].join(",") +
                                ")"
                            );
                        },
                    },
                    emphasis: {
                        shadowBlur: 10,
                        shadowColor: "#333",
                    },
                },
                data: [
                    {
                        name: "无线充电",
                        value: Math.random() * 100,
                    },
                    {
                        name: "人机交互",
                        value: Math.random() * 100,
                    },
                    {
                        name: "城市小钢炮",
                        value: Math.random() * 100,
                    },
                    {
                        name: "经济/运动模式",
                        value: Math.random() * 100,
                    },
                    {
                        name: "电池终身质保",
                        value: Math.random() * 100,
                    },
                    {
                        name: "小巧好停好开",
                        value: Math.random() * 100,
                    },
                    {
                        name: "提速快",
                        value: Math.random() * 100,
                    },
                    {
                        name: "拐弯半径小",
                        value: Math.random() * 100,
                    },
                    {
                        name: "比油车省太多",
                        value: Math.random() * 100,
                    },
                    {
                        name: "eco+模式续航",
                        value: Math.random() * 100,
                    },
                    {
                        name: "前脸设计",
                        value: Math.random() * 100,
                    },
                    {
                        name: "安全配置全",
                        value: Math.random() * 100,
                    },
                    {
                        name: "ESP",
                        value: Math.random() * 100,
                    },
                    {
                        name: "悬挂滤震",
                        value: Math.random() * 100,
                    },
                    {
                        name: "后排空间大",
                        value: Math.random() * 100,
                    },
                    {
                        name: "科技感爆棚",
                        value: Math.random() * 100,
                    },
                    {
                        name: "手机操控开锁",
                        value: Math.random() * 100,
                    },
                    {
                        name: "防眩光后视镜",
                        value: Math.random() * 100,
                    },
                    {
                        name: "座椅加热",
                        value: Math.random() * 100,
                    },
                    {
                        name: "极简风格",
                        value: Math.random() * 100,
                    },
                    {
                        name: "防盗功能",
                        value: Math.random() * 100,
                    },
                    {
                        name: "超高颜值",
                        value: Math.random() * 100,
                    },
                    {
                        name: "人机交互流畅",
                        value: Math.random() * 100,
                    },
                    {
                        name: "无比澎湃的动力",
                        value: Math.random() * 100,
                    },
                    {
                        name: "时尚霸气",
                        value: Math.random() * 100,
                    },
                    {
                        name: "穿云箭式前脸",
                        value: Math.random() * 100,
                    },
                    {
                        name: "战斧式家族设计大灯霸气",
                        value: Math.random() * 100,
                    },
                    {
                        name: "高级感",
                        value: Math.random() * 100,
                    },
                    {
                        name: "终身洗车",
                        value: Math.random() * 100,
                    },
                    {
                        name: "豪华有质感",
                        value: Math.random() * 100,
                    },

                ],
            },
        ],
    }
}

function echarts5(): { [key: string]: any } {
    let xData = ["ModelY", "宋PLUS", "Model3", "秦PLUS", "荣威RX5e", "唐", "汉", "宋Pro", "海豚", "ID.4X"];
    let yData = [33193, 28373, 14537, 10680, 9671, 9469, 9280, 7522, 7378, 7356];
    return {
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow",
            },
        },
        grid: {
            left: 0,
            top: 15,
            right: 40,
            bottom: -15,
            containLabel: true
        },
        xAxis: {
            show: false,
        },
        yAxis: [
            {
                inverse: true,
                axisTick: "none",
                axisLine: "none",
                axisLabel: {
                    textStyle: {
                        color: "#81E7ED",
                    },
                },
                data: xData,
            },
        ],
        series: [
            {
                name: "上牌数",
                type: "bar",
                data: yData,
                label: {
                    normal: {
                        show: true,
                        position: "right",
                        formatter: function (param:any) {
                            return param.value + "个";
                        },
                        textStyle: {
                            color: "#ffffff",
                        },
                    },
                },
                barWidth: '13px',
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
                        {
                            offset: 0,
                            color: "#00FFE3",
                        },
                        {
                            offset: 1,
                            color: "#4693EC",
                        },
                    ]),
                    barBorderRadius: [30, 30, 30, 30],
                },
            },
        ],
    }

}

function echarts6(): { [key: string]: any } {
    let xData = ["哈弗H6", "爱驰U6", "阿维塔11", "元", "哪吒V", "宝骏KiWi", "羿", "玛奇朵DHT", "锐际", "上汽大通"];
    let yData = [19, 18, 18, 16, 16, 14, 14, 13, 12, 12];
    return {
        grid: {
          top: 20,
          left: 0,
          bottom: 0,
          right: 10,
          containLabel: true,
        },
        tooltip: {
          show: true,
        },
        animation: false,
        xAxis: [
          {
            type: "category",
            data: xData,
            axisTick: {
              alignWithLabel: true,
            },
            nameTextStyle: {
              color: "rgba(255,255,255,.5)",
              fontSize: '12px'
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "#82b0ec",
              },
            },
            axisLabel: {
              interval: 0,
              rotate: 25,
              textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: '12px'
              },
            },
          },
        ],
        yAxis: [
          {
            show: true,
            type: "value",
            axisLabel: {
              show: true,
              textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: '12px'
              },
            },
            splitLine: {
              lineStyle: {
                color: "#0c2c5a",
              },
            },
            axisLine: {
              show: false,
            },
          },
        ],
        series: [
          {
            type: "bar",
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "#00FFE3",
                },
                {
                  offset: 1,
                  color: "#4693EC",
                },
              ]),
              barBorderRadius: [30, 30, 30, 30],
            },
            barWidth: '16px',
            data: yData,
          },
        ],
      }
}