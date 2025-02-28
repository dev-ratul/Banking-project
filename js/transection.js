document.getElementById('cashOut').style.display= 'none';
document.getElementById('transferMoney').style.display= 'none';
document.getElementById('getBonus').style.display= 'none';
document.getElementById('payBill').style.display= 'none';

// Add-money
document.getElementById('addMoney-box')
    .addEventListener('click', function(){
        document.getElementById('addMoney').style.display= "block";

        document.getElementById('transferMoney').style.display= 'none';
        
        document.getElementById('cashOut').style.display= 'none';
        document.getElementById('payBill').style.display= 'none';
        
        document.getElementById('getBonus').style.display= 'none';
        
    })

// Cash-out
document.getElementById('cashOut-box')
    .addEventListener('click', function(){
        
        document.getElementById('addMoney').style.display= "none";

        document.getElementById('transferMoney').style.display= 'none';
        
        document.getElementById('cashOut').style.display= 'block';
        document.getElementById('payBill').style.display= 'none';
        
        document.getElementById('getBonus').style.display= 'none';
    })

// transferMoney

document.getElementById('transferMoney-box')
    .addEventListener('click', function(){
        console.log(777);
        
        document.getElementById('addMoney').style.display= "none";

        document.getElementById('transferMoney').style.display= 'block';
        
        document.getElementById('cashOut').style.display= 'none';
        document.getElementById('payBill').style.display= 'none';
        
        document.getElementById('getBonus').style.display= 'none';
    })


document.getElementById('getBonus-box')
    .addEventListener('click', function(){
        document.getElementById('addMoney').style.display= "none";

        document.getElementById('transferMoney').style.display= 'none';
        
        document.getElementById('cashOut').style.display= 'none';
        document.getElementById('payBill').style.display= 'none';
        
        document.getElementById('getBonus').style.display= 'block';
    })

document.getElementById('payBill-box')
    .addEventListener('click', function(){
        document.getElementById('addMoney').style.display= "none";

        document.getElementById('transferMoney').style.display= 'none';
        
        document.getElementById('cashOut').style.display= 'none';
        document.getElementById('payBill').style.display= 'block';
        
        document.getElementById('getBonus').style.display= 'none';
    })





