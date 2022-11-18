function twoSmallestNumbers(arr) {

    arr = arr.sort((a, b) => a - b)

    let twoSmallestDigit = arr.slice(0,2)

    console.log(twoSmallestDigit.join(` `))

}
twoSmallestNumbers([30, 15, 50, 5])