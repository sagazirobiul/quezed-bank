const email = document.getElementById('email');
const pass = document.getElementById('pass');

document.getElementById('submit-btn').addEventListener('click', function(){
    if(email.value === 'baper@bank.com' && pass.value === 'secret'){
        window.location.href = 'https://sagazirobiul.github.io/baper-bank/funtional-baper-bank.html';
    } else if(email.value === ''){
        alert('Please write your email')
    } 
    else {
        alert('Password vuilla gesos!!! ja tore tejjo putro korlam!');
    }
})

console.log('Email:', 'baper@bank.com')
console.log('Password:', 'secret')