// @ts-nocheck
import createDOMPurify from '/js/dompurify/src/purify.js';
let output = document.getElementById('dialogOutput');

// Alert Button
let alertButton = document.querySelector('button.alertDialog');
let alertDialog = document.querySelector('dialog.alertDialog');
alertButton.addEventListener('click', () => {
    alertDialog.showModal();
});

// Confirm Button
let confirmButton = document.querySelector('button.confirmDialog');
let confirmDialog = document.querySelector('dialog.confirmDialog');
confirmButton.addEventListener('click', () => {
    output.textContent = '';
    setTimeout(() => {
        confirmDialog.showModal();
    }, 0);
});
confirmDialog.addEventListener('close', () => {
    output.innerHTML = `You <strong>${confirmDialog.returnValue}ed<strong>`;
});

// Safe Prompt Button
function purifyTag(strings, promptOutput) {
    const str0 = strings[0];
    
    let DOMPurify = createDOMPurify();
    const purified = DOMPurify.sanitize(promptOutput);

    return `${str0}${purified}`
}

// Prompt Button
let promptButton = document.querySelector('button.promptDialog');
let promptDialog = document.querySelector('dialog.promptDialog');
promptButton.addEventListener('click', () => {
    output.textContent = '';
    setTimeout(() => {
        promptDialog.showModal();
    }, 0);
});

promptDialog.addEventListener('close', () => {
    let result = promptDialog.querySelector('input').value;
    if(promptDialog.returnValue === "cancel") {
        result = 'User didn\'t enter anything';
    }
    output.innerHTML = purifyTag`Prompt Answer: ${result}`;
});