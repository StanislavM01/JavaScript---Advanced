function sortedList() {

    let collection = []

    let obj = {
        add(element) {
            collection.push(element)
            collection = collection.sort((a, b) => a - b)
            this.size += 1

        },
        remove(ind) {
            if (ind >= 0 && ind < collection.length) {
                collection.splice(ind, 1)
                collection = collection.sort((a, b) => a - b)
                this.size -= 1
            }
        },
        get(ind) {
            if (ind >= 0 && ind < collection.length) {
                return collection[ind]
            }
        },
        size: 0
    }

    return obj


}

let list = sortedList();
list.add(7);
list.add(6);
list.add(5);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size)
