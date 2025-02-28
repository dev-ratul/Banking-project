document.getElementById('addMoney-btn')
    .addEventListener('click', function(event){
        event.preventDefault();
        // Number
        let num= document.getElementById('num').value;
        // Amount
        let amount= document.getElementById('amount').value;
        let addAmount= parseInt(amount);
        // Main Balance
        let balance= document.getElementById('mainBalance').innerText;
        let mainBalance= parseFloat(balance);
        // pin
        let setPin= document.getElementById('pin').value;
        let pin= parseInt(setPin);

        let sum= mainBalance + addAmount;

        if(amount && pin && num){
            if(num.length === 11){
                if(pin === 1234){
                    document.getElementById('mainBalance').innerText= sum;
                }
                else{
                    alert("Please,Pin wrong.Try again ")
                }
            }
            else{
                alert("Please, Fillup your number")
            }
        }else{
            alert("Something was wrong, please try again")
        }


        
    })