function assemblyLineOne() {

    function hasClima(obj) {
        obj.temp = 21
        obj.tempSettings = 21
        obj.adjustTemp = function () {
            if (this.temp < this.tempSettings) {
                this.temp += 1
            } else if (this.tempSettings < this.temp) {
                this.temp -= 1
            }
        }

    }

    function hasAudio(obj) {
        obj.currentTrack = {
            name: null,
            artist: null
        }
        obj.nowPlaying = function () {
            if (obj.currentTrack.name != null) {
                console.log(`Now playing '${obj.currentTrack.name}' by ${obj.currentTrack.artist}`)
            }
        }

    }

    function hasParktronic(obj) {
        obj.checkDistance = function (distance) {
            if (distance < 0.1) {
                console.log(`Beep! Beep! Beep!`)
            } else if (distance == 0.1 || distance < 0.25) {
                console.log(`Beep! Beep!`)
            } else if (distance == 0.25 || distance < 0.50) {
                console.log(`Beep!`)
            } else {
                console.log(``)
            }

        }

    }
    return { hasClima, hasAudio, hasParktronic }


}


const assemblyLine = assemblyLineOne();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

console.log(assemblyLine)
