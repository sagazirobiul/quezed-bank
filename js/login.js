const email = document.getElementById('email');
const pass = document.getElementById('pass');

document.getElementById('submit-btn').addEventListener('click', function(){
    if(email.value === 'baper@bank.com' && pass.value === 'secret'){
        window.location.href = 'https://sagazirobiul.github.io/baper-bank/inside-bank.html';
    } else if(email.value === ''){
        alert('Please write your email :)')
    } 
    else {
        alert('Please put the right password!');
    }
})

console.log('Email:', 'baper@bank.com')
console.log('Password:', 'secret')