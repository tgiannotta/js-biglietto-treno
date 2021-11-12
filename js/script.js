/*Il programma dovrà chiedere all'utente:
    - il numero di chilometri che vuole percorrere;
    - Età del passeggero;

    Calcolare il prezzo totale del viaggio, secondo queste regole:
        - Il prezzo del biglietto è definito in base ai km (0.21 € al km);
        - Va applicato uno sconto del 20% per i minorenni;
        - Va applicato uno sconto del 40% per gli over 65;

L'output del prezzo finale va messo fuori(con massimo due decimali) */

//Kilometri
const numKm = parseInt( prompt('Inserisci il numero di Kilometri da percorrere: ') );
console.log(numKm);
//Anni
const etaUtente = parseInt( prompt('Quanti anni hai?') );
console.log(etaUtente);
//prezzo biglietto
let prezzoTicket = numKm * 0.21;
console.log(prezzoTicket);
//Sconto in base all'età
let sconto;
let totale;
if (etaUtente > 65) {
    sconto = (prezzoTicket * 40) / 100;
    totale = prezzoTicket - sconto;
    console.log(totale);
}else if (etaUtente < 18) {
    sconto = (prezzoTicket * 20) / 100;
    totale = prezzoTicket - sconto;
    console.log(totale);

}else {
    totale = prezzoTicket
}
//OUTPUT
alert(totale);




//let prezzoTicket = numKm * (0.21 - ((0.21 * sconto ) / 100));
