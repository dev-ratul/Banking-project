// step-1
document.getElementById('submit-btn')
    .addEventListener('click', function(event){
        event.preventDefault();
        const num= document.getElementById('num').value;
        const pin= document.getElementById('pin').value;
        let cnvtNum= parseInt(num);
        let cnvtPin= parseInt(pin);

        if(num.length === 11){
            if(cnvtPin === 1234){
                window.location.href= 'main.html'
                
            }else{
                alert("Need a valid Pin");
                
            }
            
        }else{
            alert('Need a valid account number');
        }

    })