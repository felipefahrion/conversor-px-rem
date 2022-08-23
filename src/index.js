var REM_VALUE = 0.063

var pxInputField = document.querySelector("#px-input")
var remInputField = document.querySelector("#rem-input")

pxInputField.addEventListener('change', (event) => {
    const pxValue = event.target.value
    remInputField.value = pxValue * REM_VALUE
});

remInputField.addEventListener('change', (event) => {
    const remValue = event.target.value
    pxInputField.value = remValue / REM_VALUE
});
