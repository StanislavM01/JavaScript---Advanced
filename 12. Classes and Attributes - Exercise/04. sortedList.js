
class List {
    constructor() {
        this.arr = []
        this.size = 0
    }
    add(value) {
        this.arr.push(value)
        this.arr.sort((a, b) => a - b)
        this.size++

    }
    remove(ind) {
        if(ind >= 0 && ind < this.arr.length){
            this.arr.splice(ind, 1)
            this.arr.sort((a, b) => a - b)
            this.size--
        }
       
    }
    get(ind) {
        this.arr.sort((a, b) => a - b)
        if(ind >= 0 && ind < this.arr.length){
            return this.arr[ind]
        }
       
    }
}
let list = new List();
list.add(5);
list.add(3);
list.remove(0);
console.log(list)
