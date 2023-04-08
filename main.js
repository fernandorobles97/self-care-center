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
    message = ''
    if (affirmBox.checked || mantraBox.checked) {
        if(affirmBox.checked) {
            message = affirmations[getRandomIndex(affirmations)];
        } else {
            message = mantras[getRandomIndex(mantras)];
        }
        messageBox.innerHTML = `<p class = "message">${message}</p>`;
    }
    removeHiddenClass([deleteButton]);
}

function removeHiddenClass(elements) {
    for (var i=0; i < elements.length; i++){
      elements[i].classList.remove('hidden')
    }
  }

function deleteMssg() {

}

// Add the ability to delete a messge (ie: when a message shows up, show a button that says “I don’t like this messge” (or something similar), and remove it from the list so that it will not show up any more. Make sure to alert the user in some way that the message has been removed.
// NOTE: None of this needs to persist on page refresh, unless you also complete the local storage feature