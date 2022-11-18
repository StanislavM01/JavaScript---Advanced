function cityRecord(name, population, treasury) {


    return {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += Math.floor(this.population * this.taxRate)
        },
        applyGrowth(percentage) {
            let bonus = Math.floor((percentage / 100) * this.population)
            this.population += bonus
        },
        applyRecession(percentage) {
            let bonus = Math.floor((percentage / 100) * this.treasury)
            this.treasury -= bonus
        }

    }

}
const city =
    cityRecord('Tortuga', 7000, 15000);
console.log(city)
city.collectTaxes()
console.log(city)