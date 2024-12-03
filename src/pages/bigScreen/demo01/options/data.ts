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

interface Echarts2DataInterface {
    xAxis: Array<string>;
    series: Array<{
        name: string;
        data: Array<number>;
    }>;
}

export const echarts2Data: Echarts2DataInterface = {
    xAxis: ['字段1', '字段2', '字段3', '字段3', '字段4', '字段5', '字段6', '字段7', '字段8', '字段9'],
    series: [
        {
            name: '字段1',
            data: [331, 497, 440, 81, 163, 366, 57, 188, 172, 2295]
        },
        {
            name: '字段2',
            data: [48, -97, 56, -59, 90, 98, 64, 61, -8, 253]
        },
        {
            name: '字段3',
            data: [-13, -21, -112, 5, 0, -5, 72, -3, 8, -69]
        }
    ]
}
