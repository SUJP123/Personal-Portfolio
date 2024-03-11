// scripts.js

function copyToClipboard(text) {

    var inputElement = document.createElement('input');

    inputElement.value = text;

    // Append the input element to the document
    document.body.appendChild(inputElement);

    // Select the text in the input element
    inputElement.select();

    document.execCommand('copy');
    document.body.removeChild(inputElement);

    alert('Email copied to clipboard: ' + text);
}

function copyPhoneNumber() {
    // Replace 'your phone number' with your actual phone number
    const phoneNumber = '704-747-6844';

    // Create a temporary input element
    const tempInput = document.createElement('input');
    tempInput.value = phoneNumber;

    // Append the input element to the document
    document.body.appendChild(tempInput);

    // Select and copy the phone number
    tempInput.select();
    document.execCommand('copy');

    document.body.removeChild(tempInput);

    // Alert the user (you can customize this part)
    alert('Phone number copied: ' + phoneNumber);
}