class Hex {

    constructor(number) {
        this.value = Number(number);
    }

    valueOf() {
        return this.value;
    }

    toString() {
        return `0x${(this.value.toString(16)).toUpperCase()}`;
    }

    plus(number) {
        //let result = 
        return new Hex(`0x${(this.value + number).toString(16).toUpperCase()}`);
    }

    minus(number) {
       // let result = 
        return new Hex(`0x${(this.value - number).toString(16).toUpperCase()}`);
    }

    static parse(text) {
        return parseInt(text, 16);
    }
}
let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === '0xF');
console.log(Hex.parse('AAA'));
