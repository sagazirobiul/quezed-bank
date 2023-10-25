function getInputValueById(inputId){
    const inputElement = document.getElementById(inputId);
    const inputValue = parseFloat(inputElement.value);
    inputElement.value = '';

    return inputValue;
}

function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValue = parseFloat(element.innerText);

    return elementValue;
}

function setTextValueById(elementId, elementValue){
    document.getElementById(elementId).innerText = elementValue;
}