function solution(number) {

    return function adding(secondNumber) {
        return number + secondNumber
    }


}
let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
