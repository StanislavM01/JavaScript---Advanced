function solution() {
    let str = ``

    return {
        append(word) {
            str += word
        },
        removeStart(count) {
            let toArr = str.split(``)
            toArr.splice(0, count)
            str = toArr.join(``)
        },
        removeEnd(count) {
            let toArr = str.split(``)
            toArr.splice(-count)
            str = toArr.join(``)
        },
        print() {
            console.log(str)
        }
    }
}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
