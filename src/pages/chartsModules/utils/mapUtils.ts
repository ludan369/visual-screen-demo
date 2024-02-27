/**
 * 中文名字与地区编码的对照表
 * @param name 地图中文名字
 */
export function getAdcodeByName(name: string): string {
  const map: { [key: string]: string } = {
    '贵州': '520000',
    '贵阳市': '520100',
    '六盘水市': '520200',
    '遵义市': '520300',
    '安顺市': '520400',
    '毕节市': '520500',
    '铜仁市': '520600',
    '黔西南州': '522300',
    '黔东南州': '522600',
    '黔南州': '522700'
  }
  return map[name]
}

export function loadBMapScript(key: string) {
  return new Promise((resolve, reject) => {
    // @ts-ignore
    if (typeof BMapGL !== 'undefined') {
      // @ts-ignore
      resolve(BMapGL)
      return
    }
    // @ts-ignore
    window.onCallback = function () {
      // @ts-ignore
      resolve(BMapGL)
    }
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = `https://api.map.baidu.com/api?type=webgl&v=1.0&ak=${key}&callback=onCallback`
    script.onerror = reject
    document.body.appendChild(script)
  })
}
