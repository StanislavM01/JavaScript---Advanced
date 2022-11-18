function requestValidator(obj) {





    let entries = Object.entries(obj)

    for (let [key, value] of entries) {
        if (key == `method`) {
            checkMethod(value)
        } else if (key == `uri`) {
            checkUri(value)
        } else if (key == `version`) {
            checkVersion(value)
        } else if (key == `message`) {
            checkMessage(value)
        }

    }

    function checkMethod(word) {
        let checkForMethodArr = [`GET`, `POST`, `DELETE`, `CONNECT`]
        if (!checkForMethodArr.includes(word) || word == undefined) {
            throw new Error(`Invalid request header: Invalid Method`)
        }
    }

    function checkUri(word) {
        let regUri = /^[a-zA-Z0-9\.\_]+$|^\*$/g

        if (word == undefined) {
            throw new Error(`Invalid request header: Invalid URI`)
        } else {
            let findUri = word.match(regUri)
            if (findUri == null) {
                throw new Error(`Invalid request header: Invalid URI`)

            }
        }
    }

    function checkVersion(word) {
        let version = [`HTTP/0.9`, `HTTP/1.0`, `HTTP/1.1`, `HTTP/2.0`]

        if (!version.includes(word) || word == undefined) {
            throw new Error(`Invalid request header: Invalid Version`)
        }
    }

    function checkMessage(word) {
        let regMessage = /^[^\<\>\\\&\'\"0-9]+$|^[0-9]{1}$|^\s*$/g

        if (word == undefined) {
            throw new Error(`Invalid request header: Invalid Message`)
        } else {
            let matching = word.match(regMessage)
            if (matching == null) {
                throw new Error(`Invalid request header: Invalid Message`)

            }
        }
    }

    return obj


}


module.exports = requestValidator

