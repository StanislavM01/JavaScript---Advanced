function biggestElement(arr) {

let totalArr = []

arr.forEach(element => {
    totalArr.push(...element)
    
});

totalArr.sort((a,b) => b - a)
console.log(totalArr[0])

}
biggestElement([[20, 50, 10],
[8, 33, 145]]
)