function addAndRemove(arr) {

    let newArr = []

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i]

        if (command == `add`) {
            newArr.push(i + 1)
        } else if (command == `remove` && newArr.length >= 1) {
            newArr.pop()
        }
    }

    if(newArr.length >= 1){
        console.log(newArr.join(`\n`))
    }else{
        console.log(`Empty`)
    }


}
addAndRemove(['add', 
'add', 
'remove', 
'add', 
'add']
)