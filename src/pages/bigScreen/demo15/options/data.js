export const touristsFlowChartArr = [
    { NAME: '斑竹山', NUM: 3652 },
    { NAME: '孽龙洞景区', NUM: 2854 },
    { NAME: '泉之源', NUM: 1056 },
    { NAME: '赤山幕冲生态', NUM: 681 },
    { NAME: '杨岐山普通寺', NUM: 324 }
]

export const carFlowChartData = {
    legend: ['到访', '返程'],
    xAxis: ['斑竹山', '孽龙洞景区','泉之源', '赤山幕冲生态', '杨岐山普通寺'],
    data: [[45, 64, 36, 25, 74, 89], [40, 60, 30, 20, 70, 83]],
}

export const peoplePercentage = [
    {
        name: '斑竹山',
        value: (3652 / Number(28567) * 100).toFixed(0)
    }, {
        name: '孽龙洞景区',
        value: (2854 / Number(28567) * 100).toFixed(0)
    }, {
        name: '泉之源',
        value: (1056 / Number(28567) * 100).toFixed(0)
    }, {
        name: '赤山幕冲生态',
        value: (681 / Number(28567) * 100).toFixed(0)
    }, {
        name: '杨岐山普通寺',
        value: (324 / Number(28567) * 100).toFixed(0)
    }
]

export const carSpaceNumData = {
    yAxisName: ['杨岐山普通寺', '赤山幕冲生态', '泉之源', '孽龙洞景区', '斑竹山'],
    yAxisData: [300, 300, 300, 300, 300],
    data: [52, 60, 22, 33, 44]
}