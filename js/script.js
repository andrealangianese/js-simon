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