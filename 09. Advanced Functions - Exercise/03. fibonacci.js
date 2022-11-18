function getFibonator() {

    let arr = [0]

    return function addOne() {
        if (arr.length <= 1) {
            arr.push(1)
            return 1
        } else {
            let getLastTwoDigit = arr.slice(-2)
            let sum = getLastTwoDigit.reduce((a, b) => a + b)
            arr.push(sum)
            return sum
        }
    }


}
let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
