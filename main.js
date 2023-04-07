// DOM ELEMENTS
var receiveButton = document.querySelector('.receive-message');
var affirmBox = document.querySelector('#affirmation');
var mantraBox = document.querySelector('#mantra');
var messageBox = document.querySelector('.message-box');


// EVENT LISTENERS
receiveButton.addEventListener('click', receiveMssg);


// FUNCTIONS
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function receiveMssg() {
    message = ''
    if (affirmBox.checked || mantraBox.checked) {
        if(affirmBox.checked) {
            message = affirmations[getRandomIndex(affirmations)];
        } else {
            message = mantras[getRandomIndex(mantras)];
        }
        messageBox.innerHTML = `<p class = "message">${message}</p>`;
    }
}