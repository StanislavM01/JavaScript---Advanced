function heroesInventory(arr) {
    let newArr = []


    for (const hero of arr) {
        let obj = {}
        let [name, level, items] = hero.split(` / `)
        obj[`name`] = name
        obj[`level`] = Number(level)
        let arrItems = []
        if (items != undefined) {


            if (items.match(/\,\s+/g)) {
                items = items.split(`, `)
                items.forEach(element => {
                    arrItems.push(element)

                });
            } else {
                arrItems.push(items)
            }
        }
        obj[`items`] = arrItems
        newArr.push(obj)
    }
    newArr = JSON.stringify(newArr)
    console.log(newArr)


}
heroesInventory(['Isacc / 25',
    'Derek / 12 / BarrelVest',
    'Hes / 1 / Desolator, Sentinel, Antara']

)