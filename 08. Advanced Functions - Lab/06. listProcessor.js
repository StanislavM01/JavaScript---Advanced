function processor(input) {




     function dellAddPrint() {
        return {
            add(str) {
                console.log(`abv`)
            },
            remove(str) {

            },
            print(str) {

            }
        }

    }

    let arr = []
    for (let element of input) {
        let [command, str] = element.split(` `)
        console.log(dellAddPrint().add())

    }

    




}
processor(['add hello', 'add again', 'remove hello', 'add again', 'print'])