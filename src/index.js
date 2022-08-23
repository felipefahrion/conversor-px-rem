var REM_VALUE = 0.063

var pxInputField = document.querySelector("#px-input")
var remInputField = document.querySelector("#rem-input")

function remConversor(pxInput) {
    return pxInput * REM_VALUE
}

function pxConversor(remInput) {
    return remInput / REM_VALUE
}

pxInputField.addEventListener('input', (event) => {
    const pxValue = event.target.value
    remInputField.value = remConversor(pxValue)
});

remInputField.addEventListener('input', (event) => {
    const remValue = event.target.value
    pxInputField.value = pxConversor(remValue)
});
