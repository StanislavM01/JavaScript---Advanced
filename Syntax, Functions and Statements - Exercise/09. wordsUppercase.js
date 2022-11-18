function wordsUpperCase(text) {
    let reg = /\w+/g
    let findWords = text.match(reg)
  
    for(let i = 0;i < findWords.length;i++){
        findWords[i] = findWords[i].toUpperCase()
    }
console.log(findWords.join(`, `))
}
wordsUpperCase('Hi, how are you?')