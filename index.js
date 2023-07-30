// SELECTORS
const buttonSelector = document.querySelector('#button');
const inputSelector = document.querySelector('#input');
const answerSelector = document.querySelector('#answer');
const errorSelector = document.querySelector('#error');

// API
const API_ENDPOINT = 'https://yesno.wtf/api';

// FLAGS
// let isRequestInProgress = false;

// const setIsRequestInProgress = value => {
//     isRequestInProgress = value;
// };


//disables the getanswer button
// const setDisableButtonState = isDisabling => {
//     if (isDisabling) {
//         buttonSelector.setAttribute('disabled', 'disabled');
//     } else {
//         buttonSelector.removeAttribute('disabled');
//     }
// };

// const cleanupResponse = () => {
//     setTimeout(() => {
//         answerSelector.innerHTML = '';
//         inputSelector.value = '';
//         setIsRequestInProgress(false);
//         // setDisableButtonState(false);
//     }, 8000);
// };

const showAnswer = answer => {
    // setTimeout(() => {
        answerSelector.innerHTML = `<img src=\"${answer}\" width=\"1000px\" height=\"600px\">`;
        // cleanupResponse();
    // }, 8000);
};

const fetchAnswer = () => {
    // setIsRequestInProgress(true);

    // setDisableButtonState(true);

    fetch(API_ENDPOINT)
        .then(data => data.json())
        .then(data => showAnswer(data.image));
};

const showError = () => {
    // errorSelector.innerHTML = 'Write Something First...';

    // setTimeout(() => {
    //     errorSelector.innerHTML = '';
    // }, 3000);

    alert("Write Something First...");
};

const getAnswer = () => {
    // if (isRequestInProgress) return;
    if (!inputSelector.value) return showError();

    fetchAnswer();
    // document.write("PROCESSING YOUR REQUEST.....")
    // Reload the page after 10 seconds after showing the result
    setTimeout(function() {
    location.reload();
    // document.write("Check another response")
  }, 10000);
  
};

// TO USE ENTER KEY
// const handleKeyEnter = e => {
//     if (e.keyCode === 13) {
//         getAnswer();
//     }
// };


buttonSelector.addEventListener('click', getAnswer);