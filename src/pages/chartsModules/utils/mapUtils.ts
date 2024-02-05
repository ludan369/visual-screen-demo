
export function getAdcodeByName(name: string): string {
    const map: { [key: string]: string } = {
        '贵州省': '520000',
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