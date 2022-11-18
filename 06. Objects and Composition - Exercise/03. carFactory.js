function carFactory(obj) {

    let engineArr = [{ power: 90, volume: 1800 },
    { power: 120, volume: 2400 },
    { power: 200, volume: 3500 }]

    let needPower = Number(obj[`power`])
    let needEngine = ``

    for (const element of engineArr) {
        if (needPower <= element[`power`]) {
            needEngine = element
            break;
        }
    }
    obj[`engine`] = needEngine

    let carBody = [{ type: 'hatchback', color: obj[`color`] }, { type: 'coupe', color: obj[`color`] }]

    carBody.forEach((element) => {
        if (element[`type`] == obj[`carriage`]) {
            obj[`carriage`] = element
            delete obj[`color`]
        }
    })

    if (obj[`wheelsize`] % 2 == 0) {
        obj[`wheelsize`] -= 1
    }

    let wheels = obj[`wheelsize`]
    obj[`wheels`] = []

    for (let i = 0; i < 4; i++) {
        obj[`wheels`].push(wheels)
    }

    return obj
}
console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
))