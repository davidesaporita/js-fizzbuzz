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


////////////////////////////////////////////////////

var boom = '';
var numberLabel = document.getElementById("magic_number");
var dontclick = document.getElementById("dontclick");
var totalNumbers = 1;
var endInterval = setInterval(counter, 100);

dontclick.addEventListener('mousedown',
    function(){
        dontclick.innerHTML = 'Non farlo!';
    }
);

dontclick.addEventListener('mouseup',
    function(){
        dontclick.innerHTML = 'Ecco, te l\'avevo detto';
        surprise.classList.remove('hidden');
        surprise.classList.add('show','leftToRight','adieux');
        numberLabel.classList.remove('fizzbuzz');
        numberLabel.classList.add('leftToRight','adieux','delay');
        numberLabel.innerHTML = 'addio :(';
    }
);

function counter() {
    if (totalNumbers <=100) {
        if(numberLabel.classList == 'fizzbuzz') {
            numberLabel.classList.remove('fizzbuzz');
        }
        if (totalNumbers % 3 == 0) boom += 'Fizz'; 
        if (totalNumbers % 5 == 0) boom += 'Buzz';
        if (!isNaN(boom)) {
            numberLabel.innerHTML = totalNumbers;
        } else {
            numberLabel.classList.add('fizzbuzz');
            numberLabel.innerHTML = boom;
        }
        boom = '';
        totalNumbers++;
    } else {
        numberLabel.innerHTML = 'boom!';
        numberLabel.classList.remove('fizzbuzz');
        dontclick.classList.remove('hidden');
        dontclick.classList.add('show');
        clearInterval(endInterval);
    }
}
