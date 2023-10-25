document.getElementById('withdraw-btn').addEventListener('click', function(){
    const newWithdrawAmount = getInputValueById('withdraw-input');
    const perviousWithdrawAmount = getElementValueById('withdraw-total');
    const previousBalanceTotal = getElementValueById('balance-total');
    const totalWithDrawAmount = newWithdrawAmount + perviousWithdrawAmount;
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    
    if(isNaN(newWithdrawAmount) || newWithdrawAmount <= 0){
        alert('Please put a valid amount!');
        return;
    }
    
    if(newWithdrawAmount > previousBalanceTotal){
        alert('You can not withdraw more than current balance :)')
        return;
    }
    
    setTextValueById('withdraw-total', totalWithDrawAmount);
    setTextValueById('balance-total', newBalanceTotal);
});