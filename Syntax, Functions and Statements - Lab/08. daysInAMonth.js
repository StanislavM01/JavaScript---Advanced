function buildRectangle(input = 5) {

    let finalRectangle = ``
    for (let i = 0; i < input; i++) {
        finalRectangle += `* `.repeat(input) + `\n`
    }
    console.log(finalRectangle)





}
buildRectangle()