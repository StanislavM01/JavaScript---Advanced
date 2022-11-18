function magicMatrix(arr) {

    let sumOfFirstArray = arr[0].reduce((a, b) => a + b)

    arraysIsEqual = true

    for (let i = 0; i < arr.length; i++) {
        let sumOfArrays = arr[i].reduce((a, b) => a + b)

        if (sumOfFirstArray != sumOfArrays) {
            arraysIsEqual = false
            break;
        }


    }

    for (let i = 0; i < arr[0].length; i++) {
        let summing = 0
        for (let q = 0; q < arr.length; q++) {
            summing += arr[q][i]
        }
        if (summing != sumOfFirstArray) {
            arraysIsEqual = false
            break;
        }
    }


    if (arraysIsEqual) {
        console.log(`true`)
    } else {
        console.log(`false`)
    }



}
magicMatrix([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]

)