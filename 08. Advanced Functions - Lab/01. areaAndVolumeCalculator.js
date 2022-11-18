function areaAndVolume(area, vol, input) {
    let arr = JSON.parse(input)

    let newArr = []

    for (const element of arr) {
        newArr.push({
            area: area.call(element),
            volume: vol.call(element)
        })
    }
    return newArr





}
areaAndVolume(area, vol, '[{"x":"1","y":"2","z":"10"},{"x":"7","y":"7","z":"10"},{"x":"5","y":"2","z":"10"}]')

function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};
