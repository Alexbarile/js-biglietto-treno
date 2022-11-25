// 1 - chiedere il numero dei km

let km = parseInt(prompt ('numero dei km'));

// 2 - chiedere l’età

let eta = parseInt(prompt ('numero età'));

// 3 - calcolo il prezzo

let price = km * 0.21;

// SE / ELSE 

if(eta < 18){
    // prezzo (price) - il 20%
    price = price - ((price/100) * 20);

    console.log('l"eta è inferiore a 18')
}else if(eta > 65){
    // prezzo (price) - il 40%
    price = price - ((price/100) * 40);

    console.log('l"eta è superiore a 65')
}

else{
    console.log('eta normale')
}

// 4 - Mostro il prezzo in un formato leggibile (massimo due punti decimali)

document.getElementById('prezzo').innerHTML = 'il tuo prezzo è' + " " + price.toFixed(2);