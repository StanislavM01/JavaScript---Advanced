function townPopulation(input) {

    let obj = {}

    for (let element of input) {
        let [town, population] = element.split(` <-> `)

        if (obj.hasOwnProperty(town)) {
            obj[town] += Number(population)
        } else {
            obj[town] = Number(population)
        }



    }

    let entries = Object.entries(obj)

    for (let arr of entries) {
        let [town,population] = arr
        console.log(`${town} : ${population}`)
    }


}
townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
)