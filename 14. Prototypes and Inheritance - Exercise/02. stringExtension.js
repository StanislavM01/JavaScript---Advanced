(function () {
    String.prototype.ensureStart = function (str) {
        let word = this.toString()
        if (word.startsWith(str)) {
            return word
        } else {
            
            return str + word
        }
    }
    String.prototype.ensureEnd = function (str) {
        let word = this.toString()
        if (word.endsWith(str)) {
            return word
        } else {

            return word + str
        }
    }
    String.prototype.isEmpty = function () {
        let word = this.toString()
        if (word.length == 0) {
            return true
        } else {
            return false
        }
    }
    String.prototype.truncate = function (n) {
        let word = this.toString()
        if (word.length < n) {
            return word

        }
        if (n < 4) {


            return `.`.repeat(n)
        }
        else if (word.length > n) {
            let splitting = word.split(` `)
            let newArr = []
            let lengthOfAllElInArr = 3
            if (splitting.length > 1) {
                for (let i = 0; i < splitting.length; i++) {
                    if (splitting[i].length + lengthOfAllElInArr <= n) {
                        newArr.push(splitting[i])
                        lengthOfAllElInArr += splitting[i].length
                    }
                }
                return `${newArr.join(` `)}...`

            } else {
                n = n - 3
                return word.substring(0, n) + `...`
            }
        }

    }
    String.format = function (string, ...params) {
        for (let i = 0; i < params.length; i++) {
            string = string.replace(`{${i}}`, params[i])
        }
        return string
    }

})()


let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');

str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);

str = String.format('The {0} {1} fox',
    'quick', 'brown');
str = String.format('jumps {0} {1}',
    'dog');
