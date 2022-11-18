function lowestPrices(arr) {
    let obj = {}

    for (let element of arr) {
        let [city, product, price] = element.split(` | `)
        price = Number(price)
        if (!obj.hasOwnProperty(product)) {
            obj[product] = [price, city]
        } else {
            if (obj[product][0] > price) {
                obj[product] = [price, city]
            }
        }
    }

    for (const element in obj) {
        let price = Number(obj[element][0])
        let city = obj[element][1]
        console.log(`${element} -> ${price} (${city})`)
    }


}
lowestPrices(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
)