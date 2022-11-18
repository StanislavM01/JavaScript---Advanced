function circleArea(input) {

    let checkForType = typeof (input)

    if (checkForType == "number") {
        let calcCircleArea = (Math.PI * (input ** 2)).toFixed(2)
        console.log(calcCircleArea)
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${checkForType}.`)

    }



}
circleArea(`5`)