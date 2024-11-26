interface Echarts1DataInterface {
    yAxis: Array<{ [key: string]: number }>;
    series: Array<{ [key: string]: number }>;
    bgdata: Array<number>;
}
export const echarts1Data: Echarts1DataInterface = {
    // y轴坐标和数据
    yAxis: [{ '字段1': 1514 }, { '字段2': 1619 }, { '字段3': 1623 }, { '字段4': 1968 },
    { '字段5': 2158 }, { '字段6': 2456 }, { '字段7': 3506 }, { '字段8': 4664 }, { '字段9': 8390 }],
    // x轴数据：占比
    series: [{ '字段1': 25 }, { '字段2': 30 }, { '字段3': 34 }, { '字段4': 40 },
    { '字段5': 43 }, { '字段6': 48 }, { '字段7': 52 }, { '字段8': 56 }, { '字段9': 70 }],
    // 背景: 这块可以不改，因为是背景需要满条,长度需要与series的长度一致
    bgdata: [99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5]
}
