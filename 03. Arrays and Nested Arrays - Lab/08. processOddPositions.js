function processOddPosition(arr) {

    let digits = []

    for (let i = 1; i < arr.length; i += 2) {
        digits.push(arr[i] * 2)
    }

    digits.reverse()

    return digits.join(` `)
}
processOddPosition([10, 15, 20, 25])