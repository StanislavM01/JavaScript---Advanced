function stringLength(firstWord, secondWord, thirdWord) {

    let sumOfAllLength = firstWord.length + secondWord.length + thirdWord.length
    let averageLength = Math.floor(sumOfAllLength / 3)

    console.log(sumOfAllLength)
    console.log(averageLength)

}
stringLength('chocolate', 'ice cream', 'cake')