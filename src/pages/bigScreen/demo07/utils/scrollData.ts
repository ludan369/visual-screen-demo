export function getData(size: number) {
    const data = []
    const today = new Date()
    const dateString = today.toISOString().split('T')[0]
    for (let i = 0; i < size; i++) {
        data.push({
            col1: "滚动第" + (i + 1),
            col2: dateString,
            col3: dateString,
            col4: dateString,
        })
    }
    return data
}