import * as echarts from "echarts"

let options = {
    echarts1: echarts1(),
}

function echarts1(): { [key: string]: any } {
    return {
        series: [{
            color: ['#09828e', '#09c2c8'],
            type: 'liquidFill',
            data: [0.78, 0.78],
            radius: '90%',
            outline: {
                show: false
            },
            backgroundStyle: {
                color: 'transparent',
                borderColor: '#0ac1c7',
                borderWidth: 1,
                shadowColor: 'rgba(0, 0, 0, 0.4)',
                shadowBlur: 20
            },
            shape: 'path://"M61.3,2c6.2,0,12.1,1.1,17.5,3.4C84.3,7.7,89,10.8,93,14.6c4.1,4,7.3,8.6,9.7,13.8c2.4,5.2,3.5,10.9,3.5,16.9c0,8.1-2.4,16.9-7.1,26.4c-4.7,9.4-9.9,18.2-15.5,26.2c-5.6,8-13.1,17.4-22.4,28.1c-9.3-10.7-16.8-20-22.4-28.1c-5.6-8-10.8-16.8-15.5-26.2c-4.7-9.4-7.1-18.2-7.1-26.4c0-6,1.2-11.6,3.5-16.9c2.4-5.2,5.6-9.8,9.7-13.8c4-3.9,8.8-7,14.2-9.2C49.2,3.1,55,2,61.3,2L61.3,2z"',
            label: {
                normal: {
                    position: ['50%', '50%'],
                    formatter: function () {
                        return '78%';
                    },
                    textStyle: {
                        fontSize: 0.5 * (document.documentElement.clientWidth / 80),
                        color: '#D94854'
                    }
                }
            }
        }]
    }
}


export default options