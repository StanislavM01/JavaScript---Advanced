function biggestHalf(arr) {

    arr = arr.sort((a, b) => b - a)
    
    let halfArr = arr.length / 2
    if(!Number.isInteger(halfArr)){
        halfArr = Math.ceil(halfArr)
    }

    let newArr = arr.slice(0, halfArr)
    return newArr.reverse()


}
biggestHalf([3, 19, 14, 7, 2, 19, 6])