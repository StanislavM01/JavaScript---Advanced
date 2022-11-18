function Person(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName

    Object.defineProperty(this, `fullName`, {
        get: function () {
            return `${this.firstName} ${this.lastName}`
        },
        set: function (value) {
            let reg = /[\w]+ [\w]+/g
            let matches = value.match(reg)
            if (matches != null) {
                let splittingWords = matches[0].split(` `)
                this.firstName = splittingWords[0]
                this.lastName = splittingWords[1]
            }
        }
    })

}

let person = new Person("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla
