let REM_VALUE = 16

let pxInputField = document.querySelector("#px-input")
let remInputField = document.querySelector("#rem-input")

function remConversor(pxInput) {
    return pxInput / REM_VALUE;
}

function pxConversor(remInput) {
    return remInput * REM_VALUE;
}

pxInputField.addEventListener('input', (event) => {
    const pxValue = event.target.value
    remInputField.value = remConversor(pxValue)
});

remInputField.addEventListener('input', (event) => {
    const remValue = event.target.value
    pxInputField.value = pxConversor(remValue)
});
