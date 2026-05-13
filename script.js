const btnEl = document.querySelector('.btn');
const inputElement = document.querySelector('#input');
const copyElement = document.querySelector('.fa-copy');
const alertContainer = document.querySelector('.alert-container');


btnEl.addEventListener('click', createPassword);

function createPassword() {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const passwordLength = 12;
    let password = '';

    for (let i = 0; i < passwordLength; i++) {
        const randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    inputElement.value = password;
}

copyElement.addEventListener('click', () => {
    if (inputElement.value) {
        inputElement.select();
        document.execCommand('copy');
        showAlert('Password copied to clipboard!');
    } else {
        showAlert('No password to copy!');
    }
});

function showAlert(message) {
    alertContainer.textContent = message;
    alertContainer.style.display = 'block';
    setTimeout(() => {
        alertContainer.style.display = 'none';
    }, 2000);
}