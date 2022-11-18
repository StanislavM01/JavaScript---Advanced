function pieceOfPie(arr,strOne,strTwo){

let strOneInd = arr.indexOf(strOne)
let strTwoInd = arr.indexOf(strTwo)

let secondArr = arr.slice(strOneInd,strTwoInd + 1)
return secondArr


}
pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
)