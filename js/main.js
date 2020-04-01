/**
 * Scrivi un programma che stampi i numeri da 1 a 100, ma:
 * per i multipli di 3 stampi “Fizz” al posto del numero
 * per i multipli di 5 stampi Buzz. 
 * per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
 */

// Inizializzazione variabile per stampa
var boom = '';

// Ciclo per 100 numeri
for(i=1;i<=100;i++) {
    // Se il numero da stampare è un multiplo di 3, aggiungi 'Fizz' alla stringa boom 
    if (i % 3 == 0) {
        boom += 'Fizz';
    }
    // Se il numero da stampare è un multiplo di 3, aggiungi 'Buzz' alla stringa boom 
    if (i % 5 == 0) {
        boom += 'Buzz';
    }

    // Se la variabile boom è vuota, allora non è un multiplo di 3 o 5, altrimenti stampa Fizz / Buzz / o una combinazione di entrambe
    if (boom == '') {
        console.log(i);
    } else {
        console.log(boom);
    }  

    // Re-inizializzazione variabile
    boom = '';
}