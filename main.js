// DOM ELEMENTS
var receiveButton = document.querySelector('.receive-message');
var affirmBox = document.querySelector('#affirmation');
var mantraBox = document.querySelector('#mantra');
var messageBox = document.querySelector('.message-box');
var deleteButton = document.querySelector('.delete-message');


// EVENT LISTENERS
receiveButton.addEventListener('click', receiveMssg);
deleteButton.addEventListener('click', deleteMssg);


// FUNCTIONS
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function receiveMssg() {
    message = '';
    if (affirmBox.checked || mantraBox.checked) {
        if(affirmBox.checked) {
            message = affirmations[getRandomIndex(affirmations)];
            deleteButton.classList.remove('hidden');
        } else {
            message = mantras[getRandomIndex(mantras)];
            deleteButton.classList.remove('hidden');
        }
        messageBox.innerHTML = `<p class = "message">${message}</p>`;
    }
}

function searchMantra() {
    for (var i = 0; i < mantras.length; i++) {
        if (mantras[i] === message) {
            mantras.splice(i, 1);
            alert('You won\'t see this mantra anymore.');
        }
    }
}

function searchAffirm() {
    for (var i = 0; i < affirmations.length; i++) {
        if (affirmations[i] === message) {
            affirmations.splice(i, 1);
            alert('You won\'t see this affirmation anymore.');
        }
    }
}

function deleteMssg() {
    if (mantraBox.checked) {
        searchMantra();
    } else {
        searchAffirm();
    }
}