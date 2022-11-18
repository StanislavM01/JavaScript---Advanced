function ticTacToe(arr) {

    let isWinner = false
    let isNotSpase = false

    let dashbord = [[false, false, false],
    [false, false, false],
    [false, false, false]]


    let symbol = `X`
    for (let i = 0; i < arr.length; i++) {
        let [column, row] = arr[i].split(` `)
        if (dashbord[column][row] == `X` || dashbord[column][row] == `O`) {
            console.log(`This place is already taken. Please choose another!`)
        } else {
            dashbord[column][row] = symbol
            if (symbol == `X`) {
                symbol = `O`
            } else {
                symbol = `X`
            }

            for (let i = 0; i < 3; i++) {
                let findXInRow = dashbord[i].filter((x) => x == `X`)
                let findOInRow = dashbord[i].filter((o) => o == `O`)
                if (findXInRow.length == 3) {
                    console.log(`Player X wins!`)
                    isWinner = true
                    break
                } else if (findOInRow == 3) {
                    console.log(`Player O wins!`)
                    isWinner = true
                    break
                }
                let arrWithXandOInColumn = []
                for (let q = 0; q < 3; q++) {
                    arrWithXandOInColumn.push(dashbord[q][i])
                }
                let findXInColumn = arrWithXandOInColumn.filter((x) => x == `X`)
                let findOInColumn = arrWithXandOInColumn.filter((o) => o == `O`)
                if (findXInColumn.length == 3) {
                    console.log(`Player X wins!`)
                    isWinner = true
                    break
                } else if (findOInColumn.length == 3) {
                    console.log(`Player O wins!`)
                    isWinner = true
                    break
                }
            }


            let spaceInDashboard = 0
            for (const row of dashbord) {
                let checkForSpace = row.filter((a) => a == false)
                spaceInDashboard += Number(checkForSpace.length)
            }
            if (spaceInDashboard == 0) {
                isNotSpase = true
                console.log(`The game ended! Nobody wins :(`)
                break;
            }
            let left1 = dashbord[0][0]
            let left2 = dashbord[1][1]
            let left3 = dashbord[2][2]

            let arrDiagonalLeft = [left1, left2, left3]
            let findXLeft = arrDiagonalLeft.filter((x) => x == `X`)
            let findOLeft = arrDiagonalLeft.filter((o) => o == `O`)

            if (findXLeft.length == 3) {
                console.log(`Player X wins!`)
                isWinner = true
                break
            } else if (findOLeft.length == 3) {
                console.log(`Player O wins!`)
                isWinner = true
                break
            }

            let right1 = dashbord[0][2]
            let right2 = dashbord[1][1]
            let right3 = dashbord[2][0]

            let arrDiagonalRight = [right1, right2, right3]

            let findXRight = arrDiagonalRight.filter((x) => x == `X`)
            let findORight = arrDiagonalRight.filter((o) => o == `O`)

            if (findXRight.length == 3) {
                console.log(`Player X wins!`)
                isWinner = true
                break
            } else if (findORight.length == 3) {
                console.log(`Player O wins!`)
                isWinner = true
                break
            }


        }

        if (isWinner) {
            break;
        } else if (isNotSpase) {
            break;
        }



    }
    for (const row of dashbord) {
        console.log(row.join(`\t`))
    }

}
ticTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"]

)