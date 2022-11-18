class Stringer {
    constructor(innetString, innerLength) {
        this.innerString = innetString
        this.innerLength = innerLength
    }
    increase(length) {
        length = Number(length)
        if (typeof (length) == `number` && !isNaN(length)) {

            this.innerLength += length
        }

    }
    decrease(length) {
        length = Number(length)
        if (typeof (length) == `number` && !isNaN(length)) {

            this.innerLength -= length
            if (this.innerLength < 0) {
                this.innerLength = 0
            }
        }

    }
    toString() {
        if (this.innerString.length <= this.innerLength) {
            return this.innerString
        } else {
            if (this.innerString.length == 0) {
                return `...`
            } else {
                let howIsGreat = this.innerString.length - this.innerLength
                let innerStrToArr = this.innerString.split(``)
                innerStrToArr.splice(-howIsGreat, howIsGreat, `...`)
                return innerStrToArr.join(``)
            }
        }
    }
}
let test = new Stringer("Test", 5);
test.decrease(-1);
console.log(test.toString()); // Test

