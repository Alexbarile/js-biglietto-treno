let km = prompt ('numero dei km');
let eta = prompt ('numero età');

let price = km * 0.21;

if(eta < 18){
    price = price - ((price/100) * 20)
}else if(eta > 65){
    price = price - ((price/100) * 40)
}

else{
   

}

document.getElementById('prezzo').innerHTML = 'il tuo prezzo è' + " " + price.toFixed(2)
price = price.toFixed(2)