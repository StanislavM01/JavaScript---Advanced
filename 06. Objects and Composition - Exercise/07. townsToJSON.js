function townToJson(arr) {
    let reg = /\s*\|\s*/g
    let [town, latitude, longitude] = arr.shift().split(reg).filter((a) => a.length >= 1)
    let secondArr = []

    for (let element of arr) {
        let obj = {}
        element = element.split(reg).filter((a) => a.length >= 1)
        obj[town] = element[0]
        let lat = Number(element[1]).toFixed(2)
        let long = Number(element[2]).toFixed(2)
        obj[latitude] = Number(lat)
        obj[longitude] = Number(long)

        secondArr.push(obj)
    }

    let toJson = JSON.stringify(secondArr)
    console.log(toJson)


}
townToJson(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
)