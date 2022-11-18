function ticketFunc(arr, sortMethod) {
    let newArr = []
    class Tickets {
        constructor(destination, price, status) {
            this.destination = destination
            this.price = price
            this.status = status

        }
    }

    for (const element of arr) {
        let [city, price, ticketStatus] = element.split(`|`)
        price = Number(price)

        newArr.push(new Tickets(city, price, ticketStatus))
    }

    if (sortMethod == `destination`) {
        newArr.sort((a, b) => a[`destination`].localeCompare(b[`destination`]))
    } else if (sortMethod == `price`) {
        newArr.sort((a, b) => a[`price`] - b[`price`])

    } else if (sortMethod == `status`) {
        newArr.sort((a, b) => a[`status`].localeCompare(b[`status`]))

    }

    return newArr
}
console.log(ticketFunc(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
))