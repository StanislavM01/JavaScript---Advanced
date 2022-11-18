function sameNumber(digit) {
    digitToStr = digit.toString()

    let firstNumb = Number(digitToStr[0])
    let totalSum = firstNumb 
    isSame = true

    for (let i = 1; i < digitToStr.length; i++) {
        totalSum += Number(digitToStr[i])
        if (digitToStr[i] != firstNumb) {
            isSame = false
        }
    }

    if(isSame){
        console.log(`true`)
        console.log(totalSum)
    }else{
        console.log(`false`)
        console.log(totalSum)
    }

}
sameNumber(1234)