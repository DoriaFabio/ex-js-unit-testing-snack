//? Funzione che restituisce le iniziali di un nome completo
function getInitial(nomeCompleto) {
    const parole = nomeCompleto.split(" ");
    let iniziali = "";
    for (const p of parole) {
        iniziali += p.charAt(0);
    }
    return iniziali;
}
//? Funzione che restituisce la parola in minuscolo, 
//? sostituisce gli spazi con - e 
//? genera errore se la stringa non esiste
function createSlug(parola) {
    if (!parola) {
        throw new Error("Titolo vuoto o mancante");
    }
    const lowerparola = parola.toLowerCase();
    const changeSpace = lowerparola.replaceAll(" ", "-");
    return changeSpace;
}
//? Funzione che restituisce la media di un array di numeri
function average(arr) {
    let somma = 0;
    for (let i = 0; i < arr.length; i++) {
        somma += arr[i];
    }
    return media = somma / arr.length;
}
//? Funzione che verifica se una stringa è palindroma
function isPalindrome(p) {
    let pLower = p.toLowerCase().replaceAll(" ", "");
    return pLower.split("").reverse().join("") === pLower;
}
//? Funzione che restituisce il post corretto dato l'array di post e l'id
function findPostById(post, id) {
    const postFind = post.find(p => p.id === id);
    return postFind;
}
module.exports = { getInitial, createSlug, average, isPalindrome, findPostById }
