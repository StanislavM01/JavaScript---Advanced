function storeCatalog(arr) {

    let obj = {}

    for (let element of arr) {
        let [product, price] = element.split(` : `)
        price = Number(price)
        obj[product] = price
    }
    let sorting = Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]))

    let firstLetter = ``

    for (const array of sorting) {
        let [product, price] = array
        if(firstLetter != product[0]){
            firstLetter = product[0]
            console.log(firstLetter)
        }
        console.log(`  ${product}: ${price}`)
        
    }



}
storeCatalog(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
)