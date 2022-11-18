function extensibleObject() {
    return{
        extend(template){
            let objProto = Object.getPrototypeOf(this)
        }
    }
}
const myObj = extensibleObject();

const template = {
    extensionMethod: function () { },
    extensionProperty: 'someString'
}
myObj.extend(template); 