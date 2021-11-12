/*Il programma dovrà chiedere all'utente:
    - il numero di chilometri che vuole percorrere;
    - Età del passeggero;

    Calcolare il prezzo totale del viaggio, secondo queste regole:
        - Il prezzo del biglietto è definito in base ai km (0.21 € al km);
        - Va applicato uno sconto del 20% per i minorenni;
        - Va applicato uno sconto del 40% per gli over 65;

L'output del prezzo finale va messo fuori(con massimo due decimali) */

//Kilometri
const numkm = parseInt( prompt('Inserisci il numero di Kilometri da percorrere: ') );
console.log(numkm);
//Anni
const etautente = parseInt( prompt('Quanti anni hai?') );
console.log(etautente);
//prezzo biglietto
let prezzoticket = numkm * 0.21;
console.log(prezzoticket);