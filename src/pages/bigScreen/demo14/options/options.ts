import * as echarts from "echarts"
import 'echarts-wordcloud'

export let options = {
  echarts1: echarts1(),
  mapEcharts1: mMapEcharts1(),
  echarts2: echarts2(),
  echarts3: echarts3(),
  echarts4: echarts4(),
  echarts5: echarts5(),
  echarts6: echarts6(),
  echarts7: echarts7(),
  echarts8: echarts8(),
  echarts9: echarts9(),
  echarts10: echarts10(),
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
        // @ts-ignore
        name: data[1][0]
      },
      {
        areaStyle: {
          normal: {
            opacity: 0.3,
          }
        },
        value: data[4],
        // @ts-ignore
        name: data[1][1]
      },
      {
        areaStyle: {
          normal: {
            opacity: 0.3,
          }
        },
        value: data[5],
        // @ts-ignore
        name: data[1][2]
      }
      ]
    }]
  }
}

function mMapEcharts1(): { [key: string]: any } {
  return {
    geo: {
      map: 'china',
      roam: false, //是否允许缩放
      zoom: 1.2, //默认显示级别
      itemStyle: {
        normal: {
          borderColor: '#2980b9',
          borderWidth: 1,
          areaColor: '#12235c'
        },
        emphasis: {
          areaColor: 'rgb(236, 112, 74)',
          borderWidth: 0,
          color: 'green'
        }
      },
      label: {
        show: true,
        color: '#ffffff',
        emphasis: {
          color: 'white',
          show: false
        }
      },
    },
    series: [
      {
        zlevel: 2,
        type: 'effectScatter',
        coordinateSystem: 'geo',
        data: [],
        symbolSize: function (val: any) {
          return 15
        },
        showEffectOn: 'render',
        rippleEffect: {
          brushType: 'stroke',
        },
        hoverAnimation: true,
        label: {
          normal: {
            formatter: '{b}',
            position: 'right',
            show: false,
            color: '#fff'
          },
        },
        itemStyle: {
          normal: {
            color: '#1DE9B6',
            shadowBlur: 10,
            shadowColor: '#1DE9B6',
          },
        },
      },
    ]
  }
}

function echarts2(): { [key: string]: any } {
  return {
    //  backgroundColor: '#00265f',
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '0%',
      top: '10px',
      right: '0%',
      bottom: '0',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      data: ['1月', '2月', '3月', '4月', '5月', '6月'],
      axisLine: {
        show: true,
        lineStyle: {
          color: "rgba(255,255,255,.1)",
          width: 1,
          type: "solid"
        },
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        interval: 0,
        // rotate:50,
        show: true,
        splitNumber: 5,
        textStyle: {
          color: "rgba(255,255,255,.6)",
          fontSize: '12',
        },
      },
    }],
    yAxis: [{
      type: 'value',
      axisLabel: {
        //formatter: '{value} %'
        show: true,
        textStyle: {
          color: "rgba(255,255,255,.6)",
          fontSize: '12',
        },
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "rgba(255,255,255,.1	)",
          width: 1,
          type: "solid"
        },
      },
      splitLine: {
        show: false,
        lineStyle: {
          color: "rgba(255,255,255,.1)",
        }
      }
    }],
    series: [{
      name: '2017年',
      type: 'line',
      //smooth: true,
      data: [2, 6, 3, 8, 5, 8],

      itemStyle: {
        normal: {
          color: '#2f89cf',
          opacity: 1,

          barBorderRadius: 5,
        }
      }
    }
    ]
  }
}

function echarts3(): { [key: string]: any } {
  return {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['文本1', '文本2'],

      top: '2%',
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: '12',

      },
      itemWidth: 12,
      itemHeight: 12,
      itemGap: 35
    },
    grid: {
      left: '0%',
      top: '40px',
      right: '0%',
      bottom: '0%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      data: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
      axisLine: {
        show: true,
        lineStyle: {
          color: "rgba(255,255,255,.1)",
          width: 1,
          type: "solid"
        },
      },

      axisTick: {
        show: false,
      },
      axisLabel: {
        interval: 0,
        // rotate:50,
        show: true,
        splitNumber: 15,
        textStyle: {
          color: "rgba(255,255,255,.6)",
          fontSize: '14',
        },
      },
    }],
    yAxis: [{
      type: 'value',
      axisLabel: {
        //formatter: '{value} %'
        show: true,
        textStyle: {
          color: "rgba(255,255,255,.6)",
          fontSize: '14',
        },
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "rgba(255,255,255,.1	)",
          width: 1,
          type: "solid"
        },
      },
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,.1)",
        }
      }
    }],
    series: [{
      name: '文本1',
      type: 'bar',
      data: [2, 3, 3, 9, 15, 12, 6, 4, 6],
      barWidth: '20%', //柱子宽度
      // barGap: 1, //柱子之间间距
      itemStyle: {
        normal: {
          color: '#2f89cf',
          opacity: 1,
          barBorderRadius: 5,
        }
      }
    }, {
      name: '文本2',
      type: 'bar',
      data: [1, 4, 5, 11, 12, 9, 5, 6, 5],
      barWidth: '20%',
      // barGap: 1,
      itemStyle: {
        normal: {
          color: '#62c98d',
          opacity: 1,
          barBorderRadius: 5,
        }
      }
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
          }
        ]
      }
    ]
  }
}

function echarts5(): { [key: string]: any } {
  return {
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b}: {c} ({d}%)",
      position: function (p: any) {   //其中p为当前鼠标的位置
        return [p[0] + 10, p[1] - 10];
      }
    },
    legend: {
      orient: 'vertical',
      top: '25%',
      right: 0,
      itemWidth: 10,
      itemHeight: 10,
      data: ['20-29岁', '30-39岁', '40-49岁', '50岁以上'],
      textStyle: {
        color: 'rgba(255,255,255,.5)',
        fontSize: '12',
      }
    },
    series: [
      {
        name: '年龄分布',
        type: 'pie',
        center: ['35%', '50%'],
        radius: ['40%', '50%'],
        color: ['#62c98d', '#2f89cf', '#4cb9cf', '#e0c828', '#e58c00', '#eb295b'],
        label: { show: false },
        labelLine: { show: false },
        data: [

          { value: 4, name: '20-29岁' },
          { value: 2, name: '30-39岁' },
          { value: 2, name: '40-49岁' },
          { value: 1, name: '50岁以上' },
        ]
      }
    ]
  }
}

function echarts6(): { [key: string]: any } {
  return {
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b}: {c} ({d}%)",
      position: function (p: any) {   //其中p为当前鼠标的位置
        return [p[0] + 10, p[1] - 10];
      }
    },
    legend: {
      orient: 'vertical',
      top: '25%',
      right: '8%',
      itemWidth: 10,
      itemHeight: 10,
      data: ['博士', '硕士', '本科', '专科'],
      textStyle: {
        color: 'rgba(255,255,255,.5)',
        fontSize: '12',
      }
    },
    series: [
      {
        name: '学历构成',
        type: 'pie',
        center: ['40%', '50%'],
        radius: ['40%', '50%'],
        color: ['#62c98d', '#2f89cf', '#4cb9cf', '#e0c828', '#e58c00', '#eb295b'],
        label: { show: false },
        labelLine: { show: false },
        data: [
          { value: 10, name: '博士' },
          { value: 20, name: '硕士' },
          { value: 30, name: '本科' },
          { value: 40, name: '专科' },

        ]
      }
    ]
  }
}

function echarts7(): { [key: string]: any } {
  return {
    //  backgroundColor: '#00265f',
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['2017年', '2018年'],
      top: '5%',
      textStyle: {
        color: "#fff",
        fontSize: '12',

      },

      itemGap: 35
    },
    grid: {
      left: '0%',
      top: '40px',
      right: '0%',
      bottom: '0',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      data: ['1月', '2月', '3月', '4月', '5月', '6月'],
      axisLine: {
        show: true,
        lineStyle: {
          color: "rgba(255,255,255,.1)",
          width: 1,
          type: "solid"
        },
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        interval: 0,
        // rotate:50,
        show: true,
        splitNumber: 5,
        textStyle: {
          color: "rgba(255,255,255,.6)",
          fontSize: '12',
        },
      },
    }],
    yAxis: [{
      type: 'value',
      axisLabel: {
        //formatter: '{value} %'
        show: true,
        textStyle: {
          color: "rgba(255,255,255,.6)",
          fontSize: '12',
        },
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "rgba(255,255,255,.1	)",
          width: 1,
          type: "solid"
        },
      },
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,.1)",
        }
      }
    }],
    series: [{
      name: '2023年',
      type: 'line',
      smooth: true,
      data: [2, 6, 3, 8, 5, 8],

      itemStyle: {
        normal: {
          color: '#2f89cf',
          opacity: 1,

          barBorderRadius: 5,
        }
      }
    }, {
      name: '2024年',
      type: 'line',
      smooth: true,
      data: [5, 2, 6, 4, 5, 12],
      barWidth: '15',
      // barGap: 1,
      itemStyle: {
        normal: {
          color: '#62c98d',
          opacity: 1,
          barBorderRadius: 5,
        }
      }
    },
    ]
  }
}

function echarts8(): { [key: string]: any } {
  return {
    grid: {
      left: '0',
      right: '0',
      top: '10%',
      bottom: '24%',
      //containLabel: true
    },
    legend: {
      data: ['等待', '已办人数', '已办业务'],
      bottom: 0,
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: "#fff",
        fontSize: '10',

      },

      itemGap: 5
    },
    tooltip: {
      show: "true",
      trigger: 'item'
    },
    yAxis: {
      type: 'value',
      show: false,
    },
    xAxis: [{
      type: 'category',
      axisTick: {
        show: false
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#363e83',
        }
      },
      axisLabel: {
        show: false,
        //   inside: true,
        textStyle: {
          color: "rgba(255,255,255,1)",
          fontWeight: 'normal',
          fontSize: '12',
        },
        // formatter:function(val){
        //     return val.split("").join("\n")
        // },
      },
      data: ['业务办量统计']
    }

    ],
    series: [
      {
        name: '等待',
        type: 'bar',
        barWidth: '20',

        itemStyle: {
          normal: {
            show: true,
            color: '#20aa92',
            barBorderRadius: 50,
            borderWidth: 0,
          }
        },
        zlevel: 2,
        barGap: '100%',
        data: [20],
        label: {
          formatter: "{c}人",
          show: true,
          position: 'top',
          textStyle: {
            fontSize: 12,
            color: 'rgba(255,255,255,.6)',
          }
        },
      },
      {
        name: '已办人数',
        type: 'bar',
        itemStyle: {
          normal: {
            show: true,
            color: '#f4664e',
            barBorderRadius: 50,
            borderWidth: 0,
          }
        },
        zlevel: 2,
        barWidth: '20',
        data: [40],
        label: {
          formatter: "{c}人",
          show: true,
          position: 'top',
          textStyle: {
            fontSize: 12,
            color: 'rgba(255,255,255,.6)',
          }
        },
      },
      {
        name: '已办业务',
        type: 'bar',
        itemStyle: {
          normal: {
            show: true,
            color: '#0c93dc',
            barBorderRadius: 50,
            borderWidth: 0,
          }
        },
        zlevel: 2,
        barWidth: '20',
        data: [127],
        label: {
          formatter: "{c}份",
          show: true,
          position: 'top',
          textStyle: {
            fontSize: 12,
            color: 'rgba(255,255,255,.6)',
          }
        },
      },

    ]
  }
}

function echarts9(): { [key: string]: any } {
  return {
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b}: {c} ({d}%)",
      position: function (p: any) {   //其中p为当前鼠标的位置
        return [p[0] + 10, p[1] - 10];
      }
    },
    legend: {
      orient: 'vertical',
      top: 'center',
      right: 0,
      itemWidth: 10,
      itemHeight: 10,
      data: ['数据分门别类', '数据关系部门', '今日数据交易'],
      textStyle: {
        color: 'rgba(255,255,255,.5)',
        fontSize: '12',
      }
    },
    series: [
      {
        name: '数据',
        type: 'pie',
        center: ['35%', '50%'],
        radius: ['40%', '50%'],
        color: ['#62c98d', '#2f89cf', '#4cb9cf', '#e0c828', '#e58c00', '#eb295b'],
        label: { show: false },
        labelLine: { show: false },
        data: [

          { value: 4, name: '数据分门别类' },
          { value: 2, name: '数据关系部门' },
          { value: 2, name: '今日数据交易' },
        ]
      }
    ]
  }

}

function echarts10(): { [key: string]: any } {
  return {
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b}: {c} ({d}%)",
      position: function (p:any) {   //其中p为当前鼠标的位置
        return [p[0] + 10, p[1] - 10];
      }
    },
    legend: {
      orient: 'vertical',
      top: 'center',
      right: '8%',
      itemWidth: 10,
      itemHeight: 10,
      data: ['零销类', '服务类', '销售类', '软件类', '硬件类', '其它类'],
      textStyle: {
        color: 'rgba(255,255,255,.5)',
        fontSize: '12',
      }
    },
    series: [
      {
        name: '业务分类',
        type: 'pie',
        center: ['40%', '50%'],
        radius: ['40%', '50%'],
        color: ['#62c98d', '#2f89cf', '#4cb9cf', '#e0c828', '#e58c00', '#eb295b'],
        label: { show: false },
        labelLine: { show: false },
        data: [
          { value: 10, name: '零销类' },
          { value: 20, name: '服务类' },
          { value: 30, name: '销售类' },
          { value: 40, name: '软件类' },
          { value: 50, name: '硬件类' },
          { value: 60, name: '其它类' },
        ]
      }
    ]
  }
}