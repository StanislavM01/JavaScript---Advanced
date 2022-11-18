function lastSequence(a, b) {

    let arr = [1]


    for (let i = 1; i < a; i++) {
        if (arr.length <= 1) {
            arr.push(1)
        } else if (arr.length == 2) {
            let digis = arr.slice(0)
            let sum = 0
            digis.forEach(element => {
                sum += Number(element)
            });
            arr.push(sum)
        } else {
            let digis = arr.slice(-b)
            let sum = 0
            digis.forEach(element => {
                sum += Number(element)
            });
            arr.push(sum)
        }

    }
    arr = arr.map((element) => Number(element))

    return arr
}
lastSequence(6, 3)