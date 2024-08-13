// SELFWORK VARIABILI

// let num1 = 17;
// let num2 = 65;

// console.log("il valore della variabile num1 e' " + num1);
// console.log(`il valore della variabile num2 e' ${num2}`);

// let stringa = 'Ciao a tutti';
// stringa = 'Ciao mi chiamo Davide';
// console.log(`il valore della variabile stringa e' ${stringa}`);


// const PIGRECO = 3.14159265359;
// PIGRECO = 3.14;
// console.log(`il valore di PIGRECO e' ${PIGRECO}`);

// SELFWORK OPERATORI 1

// let a = 34;
// let b = 78;
// let c = 25;
// let d = 99;
// let e = 176;

// let somma = a + b + c + d + e;
// let media = somma / 5;
// console.log(`la somma tra i numeri equivale a ${somma} e la media equivale a ${media}`);

// SELFWORK OPERATORI 2

// let anno_corrente = 2024;
// let anno_di_nascita = 1969;

// let difference = anno_corrente - anno_di_nascita;
// console.log(difference);

// let tot = 100 - difference;
// console.log(tot);

// console.log(`Hai ${difference} anni e ti mancano ${tot} anni per compierne 100`);

// SELFWORK OPERATORE 3

// Chiedi all'utente di inserire due numeri
// let num1 = parseInt(prompt("Inserisci il primo numero:"));
// let num2 = parseInt(prompt("Inserisci il secondo numero:"));

// Esegui i calcoli
// let somma = num1 + num2;
// let sottrazione = num1 - num2;
// let moltiplicazione = num1 * num2;
// let divisione = num1 / num2;
// let potenza = num1 ** num2;

// Mostra i risultati
// console.log("La somma dei due numeri è: " + somma);
// console.log("La sottrazione dei due numeri è: " + sottrazione);
// console.log("La moltiplicazione dei due numeri è: " + moltiplicazione);
// console.log("La divisione dei due numeri è: " + divisione);
// console.log(`La somma elevata alla potenza è: ${potenza}`);

// SELFWORK OPERATORI 4

let totaleGatti = parseInt(prompt("Inserisci il numero totale di gatti:"));
let gattiPerFila = parseInt(prompt("Inserisci il numero di gatti per fila:"));


let numeroFile = Math.floor(totaleGatti / gattiPerFila);


let gattiAvanzo = totaleGatti % gattiPerFila;


let gattiMancanti = gattiPerFila - gattiAvanzo;
if (gattiMancanti === gattiPerFila) {
    gattiMancanti = 0; 
}

console.log(`Ci sono ${numeroFile} file di gatti e ne mancano ${gattiMancanti} per una nuova fila, con un avanzo di ${gattiAvanzo}`);;







