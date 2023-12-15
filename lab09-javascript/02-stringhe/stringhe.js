const risultato = document.querySelector("div");

//aggiungiamo un listener al bottone sull'evento click
document.querySelectorAll("input")[0].addEventListener("click",function(){          //querySelectorAll
    let testo = risultato.innerHTML;//metto dentro la varabile testo il contenuto del div
    testo = testo.toUpperCase();
    risultato.innerHTML = testo;
    //risultato.innerHTML = risultato.innerHTML.toLocaleUpperCase();//tutto in una rigas
});

document.querySelector("input[value='Testo lowercase']").addEventListener("click",function(){   //querySelector
    let testo = risultato.innerHTML;//metto dentro la varabile testo il contenuto del div
    testo = testo.toLowerCase();
    risultato.innerHTML = testo;
});

document.querySelector("input:last-of-type").addEventListener("click", function() {         //specificato l'ultimo elemento di que tipo
    let testo = risultato.innerHTML;//metto dentro la varabile testo il contenuto del div
    //let testoSpostato = testo.substring(5, testo.length) + testo.substring(0, 5);
    let testoSpostato = testo.slice(5, testo.length) + testo.slice(0, 5);
    risultato.innerHTML = testoSpostato;
});