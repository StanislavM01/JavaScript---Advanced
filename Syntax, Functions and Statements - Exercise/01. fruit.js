function fruits(typeFruit,weight,pricePerKg){

let weightInKg = weight / 1000
let needMoney = (weightInKg * pricePerKg).toFixed(2)
console.log(`I need $${needMoney} to buy ${weightInKg.toFixed(2)} kilograms ${typeFruit}.`)


}
fruits('orange', 2500, 1.80)