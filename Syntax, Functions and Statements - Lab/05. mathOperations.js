function mathOperation(digitOne, digitTwo, str) {
    let result = 0
    switch (str) {
        case `+`: result = digitOne + digitOne; break;
        case `-`: result = digitOne - digitTwo; break;
        case `*`: result = digitOne * digitTwo; break;
        case `/`: result = digitOne / digitTwo; break;
        case `%`: result = digitOne / digitTwo; break;
        case `**`: result = digitOne ** digitTwo; break;
    }
    console.log(result)




}
mathOperation(5, 6, '+')