function addItem() {
    let textInputField = document.getElementById(`newItemText`)
    let valueInputField = document.getElementById(`newItemValue`)
    let newOption = document.createElement(`option`)
    newOption.textContent = textInputField.value
    newOption.value = valueInputField.value
    document.getElementById(`menu`).appendChild(newOption)

    textInputField.value = ``
    valueInputField.value = ``
}