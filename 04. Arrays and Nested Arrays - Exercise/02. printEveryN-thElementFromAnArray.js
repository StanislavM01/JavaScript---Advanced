function printNElements(arr, n) {

    let newArr = []

    for (let i = 0; i < arr.length; i += n){
        let element = arr[i]
        newArr.push(element)
    }

   return newArr
    
}
printNElements(['5',
    '20',
    '31',
    '4',
    '20'],
    2
)