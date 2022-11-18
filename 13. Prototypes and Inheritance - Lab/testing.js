let secondObj = {
    name: `stanislav`,
    secondName: `mollov`,
    car: `bmw`
}

let obj = {
    name: `Georgi`,
    age: 24,
    hobby: `football`,
    sayHello() {
        console.log(`hello`)
    },
    secondName: `georgiev`
}



let thirdObj = {
    loveCar() {
        console.log(`i love big my car`)
    },
    bestCar: `Mercedes`
}

Object.setPrototypeOf(secondObj, obj)
Object.setPrototypeOf(obj, thirdObj)

console.log(Object.getPrototypeOf(secondObj))
console.log(Object.getPrototypeOf(obj))
console.log(obj.bestCar)