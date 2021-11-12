//Kilometri
const numKm = parseInt( prompt('Inserisci il numero di Kilometri da percorrere: ') );
//Anni
const etaUtente = parseInt( prompt('Quanti anni hai?') );

//prezzo biglietto
let prezzoTicket = numKm * 0.21;
//Sconto in base all'età
let sconto;
let totale;
if (etaUtente > 65) {
    sconto = (prezzoTicket * 40) / 100;
    totale = prezzoTicket - sconto;
    alert('Avendo un età superiore a 65 anni, hai diritto ad uno sconto del 40%')
}else if (etaUtente < 18) {
    sconto = (prezzoTicket * 20) / 100;
    totale = prezzoTicket - sconto;
    alert('Avendo un età inferiore a 18 anni, hai diritto ad uno sconto del 20%')
}else {
    totale = prezzoTicket
    alert('Purtroppo, non hai diritto ad uno sconto.')
}
//OUTPUT
alert('Quindi il totale da pagare è: ' + totale.toFixed(2) + 'euro');




