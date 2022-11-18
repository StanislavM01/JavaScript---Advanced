function encodeAndDecodeMessages() {
    let encodeButtEl = document.querySelector(`div:nth-child(1) button`)
    let decodeButtEl = document.querySelector(`div:nth-child(2) button`)

    let firstTextAreaEl = document.querySelector(`div:nth-child(1) textarea`)
    let secondTextAreaEl = document.querySelector(`div:nth-child(2) textarea`)



    encodeButtEl.addEventListener(`click`, function clickOnEncodeButt() {
        firstTextAreaEl = document.querySelector(`div:nth-child(1) textarea`)
        let encodeMessage = ``
        let message = firstTextAreaEl.value
        firstTextAreaEl.value = ``

        for (const letter of message) {
            let asciiCode = letter.charCodeAt()
            let newChar = String.fromCharCode(asciiCode + 1)
            encodeMessage += newChar
        }
        secondTextAreaEl.value = encodeMessage

    })


    
    decodeButtEl.addEventListener(`click`, function clickOnDecodeButt() {
        let encodeMessage = secondTextAreaEl.value
        let decodeMessage = ``

        for (const letter of encodeMessage) {
            let asciiCode = letter.charCodeAt()
            let newChar = String.fromCharCode(asciiCode - 1)
            decodeMessage += newChar
        }
        secondTextAreaEl.value = decodeMessage


    })
}