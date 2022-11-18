function extractingNumbers(arr) {

    let newArr = []
    let bigDigit = Number.MIN_SAFE_INTEGER

  for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= bigDigit) {
          bigDigit = arr[i]
          newArr.push(arr[i])
      }
  }



    return newArr


}
extractingNumbers([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
)