function listOfNames(arr) {

    arr.sort((a, b) => a.localeCompare(b))
    let n = 1
    arr.forEach((element) => {
        console.log(`${n}.${element}`)
        n++
    })




}
listOfNames(["John", "Bob", "Christina", "Ema"])