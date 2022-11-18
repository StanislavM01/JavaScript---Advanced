function juiceFlavors(arr) {
    let obj = {}
    let productsWithBottles = {}
    for (const element of arr) {
        let [product, quantity] = element.split(` => `)
        quantity = Number(quantity)
        if (!obj.hasOwnProperty(product)) {
            obj[product] = {
                quantity
            }
        } else {
            obj[product][`quantity`] += quantity
        }

        if (obj[product][`quantity`] >= 1000) {
            let totalQuantity = obj[product][`quantity`]
            let bottle = Math.floor(totalQuantity / 1000)
            obj[product][`quantity`] = totalQuantity - 1000 * bottle

            if(!productsWithBottles.hasOwnProperty(product)){
                productsWithBottles[product] = bottle
            }else{
                productsWithBottles[product] += bottle
            }
           
        }
    }

   for (const key in productsWithBottles) {
       console.log(`${key} => ${productsWithBottles[key]}`)
   }




}
juiceFlavors(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']

)