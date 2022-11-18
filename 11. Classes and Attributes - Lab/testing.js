//  class Cat {
//      constructor(name,age) {
//          this.firstName = name;
//          this.age = age;
//      }
//  }
//  let cat = new Cat(`gosho`,12);
//  console.log(cat);

let a = new Map()
a.set(`name`, `stanislav`)
a.set(`lastName`, `Mollov`)
a.set(`car`, `bmw`)
let mapEntries = a.entries()
let mapToArray = Array.from(mapEntries)
mapToArray.sort((a, b) => a[1].localeCompare(b[1]))
for (let [key, value] of mapToArray) {
    // console.log(`${key} ${value}`)
}
let newMap = new Map(mapToArray)
// console.log(newMap)

let obj = {
    one: 1,
    two: 2,
    three: 3
}
// console.log(obj)

let numbersMap = new Map()
numbersMap.set(1, `one`)
numbersMap.set(2, `two`)
numbersMap.set(3, `three`)
numbersMap.set(4, `four`)
numbersMap.set(5, `five`)
console.log(numbersMap)

let numberObj = {
    1: `one`,
    2: `two`,
    3: `three`,
    4: `four`,
    5: `five`
}
console.log(numberObj[1])
console.log(numbersMap.get(1))