function cooking(arguemnts) {
    let digit = Number(arguments[0])

    for (let i = 1; i < arguments.length; i++) {
        let element = arguments[i]
        if (element == `chop`) {
            digit = digit / 2
        } else if (element == `dice`) {
            digit = Math.sqrt(digit)
        } else if (element == `spice`) {
            digit += 1
        } else if (element == `bake`) {
            digit = digit * 3
        } else if (element == `fillet`) {
            digit = digit * 0.8
        }
        console.log(digit)
    }



}
cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet')