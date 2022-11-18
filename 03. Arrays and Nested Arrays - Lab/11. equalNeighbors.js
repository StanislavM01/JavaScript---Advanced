function equalNeighbors(arr) {

    let count = 0
    for (let i = 0; i < arr.length; i++) {
        for (let q = 0; q < arr[i].length; q++) {
            let digit = arr[i][q]
            if (arr.length > i + 1 && arr[i + 1][q] === digit) {
                count++
            }

            if (arr[i].length > q + 1 && digit === arr[i][q + 1]) {
                count++
            }
        }
    }
    return count

}
equalNeighbors([['2', '2', '5', '3', `1`],
['2', '0', '5', '3', `1`],
['2', '5', '5', '4', `2`]]
)