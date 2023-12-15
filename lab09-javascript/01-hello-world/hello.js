console.log("Hello World!");

//span id="ciao"

//costante 
const tagHello = document.getElementById("ciao");
//const tagHello = document.querySelector("#ciao"); SECONDA VERSIONE PER LO STESSO RISULTATO
//innerHTML è la fnzione che mi fa scrivere del contenuto su html
tagHello.innerHTML = "Hello World";

//class = "anno"
//const tagYear = document.getElementsByClassName("anno")[1]; //essendo un vettore dobbiamo specificare l'indice
//const tagYear = document.querySelector(".anno"); //SECONDA VERSIONE PER LO STESSO RISULTATO DI DEFAULT PRENDE IL PRIMO
const tagYear = document.querySelectorAll(".anno")[1]; //TERZA VERSIONE PER LO STESSO RISULTATO specificare l'elemento
tagYear.innerHTML = "2023";