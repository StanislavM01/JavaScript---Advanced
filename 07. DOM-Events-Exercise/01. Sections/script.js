function create(words) {
   let generalDiv = document.getElementById(`content`)
   for (const word of words) {
      let createDiv = document.createElement(`div`)
      createDiv.addEventListener(`click`, function clickingBox(e) {
         e.target.querySelector(`p`).style.display = ``
      })
      let createPar = document.createElement(`p`)
      createPar.textContent = word
      createPar.style.display = `none`

      createDiv.appendChild(createPar)
      generalDiv.appendChild(createDiv)


   }

}