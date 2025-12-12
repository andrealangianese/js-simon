// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.

// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

//PREPARAZIONE

//selezioniamo tutti gli input e li importiamo

//selezioniamo gli output da importare 
//lista dove vengono mostrati i numeri
const numberlist = document.getElementById("numbers-list");

//const del countdown

const countdown = document.getElementById("countdown");

//form per l'inserimento dei numeri

const form = document.getElementById("answers-form");

// conferma infserimento dati

const okButton = document.querySelector(".btn-primary");

//----------------------------------------------__----------------------
//creazione cronometro di 30 secondi

//variabile del timer

let timer;

let seconds = 3;

//qua stiamo mostrando i 5 numeri dalla funzione che abbiamo creato precedentemente
numberlist.innerText = (getArrRadnomNumInRangeTotEl(1, 50, 5));


countdown.innerText = seconds

timer = setInterval(() => {
    //decremento i secondi per countdown
    countdown.innerText = --seconds;

    // quando il countdown arriva a 0 blocco tutto
    if (seconds === 0) {
        clearInterval(timer);

        //quando il timer arriva a 0 devo rimuovere dalla pagina i numeri

        numberlist.innerText = "";

        //e devo mostrare il form da far compilare all'utente

        form.classList.remove("d-none");

        // rimuovo stringa "memorizza numeri...."

        //document.getElementById("instructions").remove();

        //aggiungo stringa inserisci i numeri che ti ricordi
//----------------------------------------------__----------------------

        // metodo per sostituire un p con un altro testo
        
        let sostituzionep =document.getElementById("instructions");

        let sostitutop = document.createElement("p");

        sostitutop.textContent = "Vediamo se ti riscordi sti numeri!!";

        sostituzionep.replaceWith(sostitutop);


    }
}, 1000)
//----------------------------------------------__----------------------



//ELABORAZIONE


// gestione dell'evento di controllo dopo il click

//controllo dei numeri corretti e feedback all'user














//funzione per creare 5 numeri random non equivoci

//debug in console
console.log(getArrRadnomNumInRangeTotEl(1, 50, 5));
// funzione per creare un aray di tot numeri univoci

function getArrRadnomNumInRangeTotEl(minNUm, maxNUm, tot) {
    //array vuoto dove inserire i numeri
    const numArr = [];

    while (numArr.length < tot) {
        const randomNum = genRandomNumInRange(minNUm, maxNUm);

        if (!numArr.includes(randomNum)) {
            numArr.push(randomNum);
        }
    }

    return numArr

}

// funzione che genera random num tra min e max
function genRandomNumInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}