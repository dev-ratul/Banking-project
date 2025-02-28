document.getElementById('withDraw-btn')
    .addEventListener('click', function(event){
        event.preventDefault();
        let mainbalance= document.getElementById('mainBalance').innerText;
        let mainBalance= parseInt(mainbalance);

        let intamount= document.getElementById('cashOut-amount').value;
        let intAmount= parseInt(intamount);

        let num= document.getElementById('cashOutNumber').value.length;
        let number= parseInt(num);

       let pinNumber= document.getElementById('cashOut-Pin').value;
       let pin= parseInt(pinNumber);

       let sub= mainBalance-intAmount;
       

        if(number && intAmount && pin){
            if(number === 11){
                if(pin === 1234){
                    document.getElementById('mainBalance').innerText= sub;
                }else{
                    alert("please enter your pin")
                }
            }
            else{
                alert("please enter your number") 
            }
        }else{
            alert("please something was wrong")
        }
    })