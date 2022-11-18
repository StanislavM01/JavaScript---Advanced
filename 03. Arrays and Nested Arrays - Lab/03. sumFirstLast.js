function sumFistAndLastEl(arr) {
    let firstDigit = Number(arr.shift())
    let lastDigit = Number(arr.pop())


    return firstDigit + lastDigit

}
sumFistAndLastEl(['20', '30', '40'])