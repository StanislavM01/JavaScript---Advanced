function greatestDivisor(a, b) {

    for (let i = b; i >= 1; i--) {
        if (b % i == 0 && a % i == 0) {
            console.log(i)
            break;
        }
    }




}
greatestDivisor(15, 5)