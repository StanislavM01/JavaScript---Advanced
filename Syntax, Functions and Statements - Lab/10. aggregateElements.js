function aggregateElements(input) {

    let sum = input.reduce((a, b) => a + b)
    let reverseSum = 0
    
    for (const element of input) {
        reverseSum += 1 / element
    }

    let concatDigit = ``
    for (const element of input) {
        concatDigit += element.toString()
        
    }
    console.log(sum)
    console.log(reverseSum)
    console.log(concatDigit)



}
aggregateElements([1, 2, 3])