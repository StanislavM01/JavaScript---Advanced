class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer
        this.location = location
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 }
        this.listOfParticipants = []

    }

    registerParticipant(name, condition, money) {
        money = Number(money)
        if (!this.priceForTheCamp.hasOwnProperty(condition)) {
            throw new Error(`Unsuccessful registration at the camp.`)
        }
        let isRegistered = false
        this.listOfParticipants.forEach(element => {
            if (element[`name`] == name) {
                isRegistered = true
            }
        });

        if (isRegistered) {
            return `The ${name} is already registered at the camp.`

        }

        if (money < this.priceForTheCamp[condition]) {
            return `The money is not enough to pay the stay at the camp.`

        } else {
            this.listOfParticipants.push({
                name,
                condition,
                power: 100,
                wins: 0
            })
            return `The ${name} was successfully registered.`
        }
    }

    unregisterParticipant(name) {
        let isNotPresent = true
        for (let i = 0; i < this.listOfParticipants.length; i++) {
            let obj = this.listOfParticipants[i]
            if (obj[`name`] == name) {
                this.listOfParticipants.splice(i, 1)
                isNotPresent = false
                break;
            }
        }
        if (isNotPresent) {
            throw new Error(`The ${name} is not registered in the camp.`)
        } else {
            return `The ${name} removed successfully.`
        }
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        if (typeOfGame == `WaterBalloonFights`) {
            let indOfFirstPlayer
            let indOfSecondPlayer
            for (let i = 0; i < this.listOfParticipants.length; i++) {
                let obj = this.listOfParticipants[i]
                if (participant1 == obj.name) {
                    indOfFirstPlayer = i
                } else if (participant2 == obj.name) {
                    indOfSecondPlayer = i
                }
            }
            if (indOfFirstPlayer == undefined || indOfSecondPlayer == undefined) {
                throw new Error(`Invalid entered name/s.`)
            } else if (this.listOfParticipants[indOfFirstPlayer].condition != this.listOfParticipants[indOfSecondPlayer].condition) {
                throw new Error(`Choose players with equal condition.`)
            }

            if (this.listOfParticipants[indOfFirstPlayer].power > this.listOfParticipants[indOfSecondPlayer].power) {
                this.listOfParticipants[indOfFirstPlayer].wins += 1
                return `The ${this.listOfParticipants[indOfFirstPlayer].name} is winner in the game ${typeOfGame}.`
            } else if (this.listOfParticipants[indOfSecondPlayer].power > this.listOfParticipants[indOfFirstPlayer].power) {
                this.listOfParticipants[indOfSecondPlayer].wins += 1
                return `The ${this.listOfParticipants[indOfSecondPlayer].name} is winner in the game ${typeOfGame}.`
            } else {
                return `There is no winner.`
            }



        } else if (typeOfGame == `Battleship`) {
            let indOfPlayer

            for (let i = 0; i < this.listOfParticipants.length; i++) {
                let obj = this.listOfParticipants[i]
                if (obj.name == participant1) {
                    indOfPlayer = i
                }
            }
            if (indOfPlayer == undefined) {
                throw new Error(`Invalid entered name/s.`)
            }

            this.listOfParticipants[indOfPlayer].power += 20
            return `The ${this.listOfParticipants[indOfPlayer].name} successfully completed the game ${typeOfGame}.`
        }
    }
    toString() {
        let finalResult = `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`
        this.listOfParticipants = this.listOfParticipants.sort((a, b) => b.wins - a.wins)

        this.listOfParticipants.forEach(obj => {
            finalResult += `\n${obj.name} - ${obj.condition} - ${obj.power} - ${obj.wins}`
        });
        return finalResult
    }

}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Dimitur Kostov"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson"));

console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

