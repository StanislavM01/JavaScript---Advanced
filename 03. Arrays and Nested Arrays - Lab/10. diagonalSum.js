function diagonalSum(arr) {

    let firstDiagonal = 0
    let secondDiagonal = 0

    


    for (let i = 0; i < arr.length; i++) {
        let digit = arr[i][i]
        firstDiagonal += digit
    }

    let count = 0
    for(let i = arr.length - 1;i >= 0;i--){
        let digit = arr[i][count]
        secondDiagonal += digit
        count++
    }

console.log(`${firstDiagonal} ${secondDiagonal}`)
}
diagonalSum([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]   
)