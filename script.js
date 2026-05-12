const btnElement = document.querySelector('.btn');
const inputElement = document.querySelector('#input');
const copyElement = document.querySelector('.fa-copy');
const alertContainer = document.querySelector('.alert-container');

btnElement.addEventListener('click', () => {
   createPassword();
});

copyElement.addEventListener('click', () => {

    if (inputElement.value !== '') {
   inputElement.select();
   document.execCommand('copy');
    } 
});

function createPassword() {
   const chars = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   const passwordLength = 12;
   let password = '';

   for (let i = 0; i < passwordLength; i++) {
      const randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber + 1);
   }
   inputElement.value = password;
   alertContainer.innerText = `${password} Copied`;
   alertContainer.classList.add('active');
   setTimeout(() => {
      alertContainer.classList.remove('active');
   }, 2000);
}   

