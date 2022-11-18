function attachEventsListeners() {
    let buttonsEl = document.querySelectorAll(`div [type=button]`)

    let daysInput = document.getElementById(`days`)
    let hoursInput = document.getElementById(`hours`)
    let minutesInput = document.getElementById(`minutes`)
    let secondsInput = document.getElementById(`seconds`)


    let obj = {
        days: {
            hours(day) {
                return day * 24
            },
            minutes(day) {
                return day * 1440
            },
            seconds(day) {
                return day * 1440 * 60
            }
        },
        hours: {
            days(hour) {
                return hour / 24
            },
            minutes(hour) {
                return hour * 60
            },
            seconds(hour) {
                return hour * 60 * 60
            }
        },
        minutes: {
            days(minute) {
                return (minute / 60) / 24
            },
            hours(minute) {
                return minute / 60
            },
            seconds(minute) {
                return minute * 60
            }
        },
        seconds: {
            days(second) {
                return ((second / 60) / 60) / 24
            },
            hours(second) {
                return (second / 60) / 60
            },
            minutes(second) {
                return second / 60
            }
        }

    }
    for (let button of buttonsEl) {
        button.addEventListener(`click`, function clickOnButton(e) {
          
            let inputFieldEl = e.target.parentNode.querySelector(`[type=text]`)

            if (inputFieldEl.id == `days`) {
                hoursInput.value = obj.days.hours(inputFieldEl.value)
                minutesInput.value = obj.days.minutes(inputFieldEl.value)
                secondsInput.value = obj.days.seconds(inputFieldEl.value)
            } else if (inputFieldEl.id == `hours`) {
                daysInput.value = obj.hours.days(inputFieldEl.value)
                minutesInput.value = obj.hours.minutes(inputFieldEl.value)
                secondsInput.value = obj.hours.seconds(inputFieldEl.value)
            }else if(inputFieldEl.id == `minutes`){
                daysInput.value = obj.minutes.days(inputFieldEl.value)
                hoursInput.value = obj.minutes.hours(inputFieldEl.value)
                secondsInput.value = obj.minutes.seconds(inputFieldEl.value)
            }else if(inputFieldEl.id == `seconds`){
                daysInput.value = obj.seconds.days(inputFieldEl.value)
                hoursInput.value = obj.seconds.hours(inputFieldEl.value)
                minutesInput.value = obj.seconds.minutes(inputFieldEl.value)
            }

        })
    }

}