function lockedProfile() {
    let buttonsEl = document.querySelectorAll(`#main div button`)


    for (const button of buttonsEl) {
        button.addEventListener(`click`, function clickOnButton(e) {
            let lockButt = e.target.parentNode.querySelector(`input[value = lock]`)
            let unlockButt = e.target.parentNode.querySelector(`input[value = unlock]`)
            let hiddenDivEl = e.target.parentNode.querySelector(`div`)
            
            if (unlockButt.checked == true && hiddenDivEl.style.display != `block`) {
                hiddenDivEl.style.display = `block`
            } else if (unlockButt.checked == true && hiddenDivEl.style.display != `none`) {
                hiddenDivEl.style.display = `none`
            }


        })
    }
}