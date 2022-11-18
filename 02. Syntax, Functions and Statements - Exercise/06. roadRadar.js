function radar(km, place) {

    if (place == `motorway`) {
        if (km <= 130) {
            console.log(`Driving ${km} km/h in a 130 zone`)
        } else {
            let difference = km - 130
            let status = ``
            if (difference <= 20) {
                status = `speeding`
            } else if (difference <= 40) {
                status = `excessive speeding `
            } else {
                status = `reckless driving `
            }
            console.log(`The speed is ${difference} km/h faster than the allowed speed of 130 - ${status}`)
        }
    } else if (place == `interstate`) {
        if (km <= 90) {
            console.log(`Driving ${km} km/h in a 90 zone`)
        } else {
            let difference = km - 90
            let status = ``
            if (difference <= 20) {
                status = `speeding`
            } else if (difference <= 40) {
                status = `excessive speeding `
            } else {
                status = `reckless driving `
            }
            console.log(`The speed is ${difference} km/h faster than the allowed speed of 90 - ${status}`)
        }
    } else if (place == `city`) {
        if (km <= 50) {
            console.log(`Driving ${km} km/h in a 50 zone`)
        } else {
            let difference = km - 50
            let status = ``
            if (difference <= 20) {
                status = `speeding`
            } else if (difference <= 40) {
                status = `excessive speeding `
            } else {
                status = `reckless driving `
            }
            console.log(`The speed is ${difference} km/h faster than the allowed speed of 50 - ${status}`)
        }
    } else if (place == `residential`) {
        if (km <= 20) {
            console.log(`Driving ${km} km/h in a 20 zone`)
        } else {
            let difference = km - 20
            let status = ``
            if (difference <= 20) {
                status = `speeding`
            } else if (difference <= 40) {
                status = `excessive speeding `
            } else {
                status = `reckless driving `
            }
            console.log(`The speed is ${difference} km/h faster than the allowed speed of 20 - ${status}`)
        }
    }




}
radar(200, 'motorway')