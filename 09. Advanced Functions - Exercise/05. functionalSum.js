function adding() {

    let totalResult = 0


    return function addValue(value) {
        return totalResult += value
    }
    
}
let add = adding()
console.log(add(1))
console.log(add(2))
console.log(add(3))
