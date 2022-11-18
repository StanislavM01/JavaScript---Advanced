function sortingNumbers(arr) {

    arr.sort((a, b) => a - b)

    let minDigit = 0
    if (arr.length % 2 != 0) {
         minDigit = arr.splice(0, Math.ceil(arr.length / 2))
    } else {
         minDigit = arr.splice(0, arr.length / 2)
    }

    arr = arr.reverse()

    let newArr = []

    for (const element of minDigit) {
        newArr.push(element, arr.shift())

    }

    newArr = newArr.filter((a) => a != undefined)
    return newArr
}
sortingNumbers([1, 65, 3, 52, 48, 63, 2, 31, -3, 18, 56])