//? Funzione che restituisce le iniziali di un nome completo
function getInitial(nomeCompleto) {
    const parole = nomeCompleto.split(" ");
    let iniziali = "";
    for (const p of parole) {
        iniziali += p.charAt(0);
    }
    return iniziali;
}
//? Funzione che restituisce la parola in minuscolo
function createSlug(parola) {
    const lowerparola = parola.toLowerCase();
    return lowerparola;
}
//? Funzione che restituisce la media di un array di numeri
function average(arr) {
    let somma = 0;
    for (let i = 0; i < arr.length; i++) {
        somma += arr[i];
    }
    return media = somma / arr.length;
}
//? Funzione che sostituisce gli spazi con -
function createPhrase(phrase) {
    const changeSpace = phrase.replaceAll(" ", "-");
    return changeSpace;
}

module.exports = {getInitial, createSlug, average, createPhrase}
