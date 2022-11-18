function heroes() {



    let obj = {
        mage(name) {
            return name
        },
        cast(spell) {
            
            console.log(`${this.mage()} cast ${spell}`)
        }


    }
    return obj

}

let create = heroes();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")
