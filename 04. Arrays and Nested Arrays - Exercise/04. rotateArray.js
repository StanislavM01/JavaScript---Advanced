function rotateArray(arr,rotation){

if(arr.length -1 < rotation){
    rotation = Math.floor(rotation / arr.length)
}
let elementsUponRotation = arr.splice(arr.length - rotation,rotation)
elementsUponRotation.push(...arr)

console.log(elementsUponRotation.join(` `))

}
rotateArray(['1', 
'2', 
'3', 
'4'], 
2

)