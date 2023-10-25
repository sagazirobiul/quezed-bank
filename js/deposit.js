document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositValue = getInputValueById('deposit-input');
    const previousDepositTotal = getElementValueById('deposit-total');
    const depositTotal = depositValue + previousDepositTotal;
    const newBalanceTotal = getElementValueById('balance-total') + depositValue;

    if(isNaN(depositValue) || depositValue <= 0){
        alert('Please put a valid amount!');
        return;
    }

    setTextValueById('deposit-total', depositTotal);
    setTextValueById('balance-total', newBalanceTotal);
})