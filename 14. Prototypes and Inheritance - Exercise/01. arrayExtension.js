(function () {
    Array.prototype.last = function () {
        return this[this.length - 1]
    }
    Array.prototype.skip = function (n) {
        n = Number(n)
        let arr = []
        for (let i = n; i < this.length; i++) {
            arr.push(this[i])
        }
        return arr
    }
    Array.prototype.take = function (n) {
        n = Number(n)
        let arr = []
        for (let i = 0; i < n; i++) {
            arr.push(this[i])
        }
        return arr
    }
    Array.prototype.sum = function () {
        return this.reduce((a, b) => a + b)
    }
    Array.prototype.average = function () {
        let average = this.sum() / this.length
        return average
    }

    

})()


let arr = [1, 2, 3, 4, 5, 6, 7]
console.log(arr.average())
console.log(arr.skip(0))
console.log(arr.take(3))
console.log(Array.prototype)
