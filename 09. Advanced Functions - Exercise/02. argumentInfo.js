function argumentsFunc(...arguments) {
    let obj = {}
    for (let element of arguments) {
        let typeOnEl = typeof element
        console.log(`${typeOnEl}: ${element}`)
        if (!obj.hasOwnProperty(typeOnEl)) {
            obj[typeOnEl] = 1
        } else {
            obj[typeOnEl] += 1
        }
    }
    let entrie = Object.entries(obj).sort((a, b) => b[1] - a[1])


    for (let [type, count] of entrie) {
        console.log(`${type} = ${count}`)

    }




}
argumentsFunc('cat', 42, function () { console.log('Hello world!'); })