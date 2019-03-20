var stuffToBeInjected = 'This is injected text',
    element = document.getElementById('ThingToBeChanged');

element.textContent = stuffToBeInjected;

function GetData() {
    return stuffToBeInjected;

}