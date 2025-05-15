//! Test 1
test('La funzione getInitials restituisce le iniziali di un nome completo', () => {
    const result = getInitial("Fabio Doria");
    expect(result).toBe("FD");
})
//! Test 2
test('La funzione createSlug restituisce una stringa in lowercase', () => {
    const result = createSlug("BooLean");
    expect(result).toBe("boolean");
    const result2 = createSlug("Fabio Doria");
    expect(result2).toBe("fabio doria");
})
//! Test 3
test('La funzione average calcola la media aritmetica di un array di numeri.', () => {
    const result = average([1, 2, 3, 4, 5]);
    expect(result).toBeCloseTo(3);
    const result2 = average([1, 2, 3, 4, 4]);
    expect(result2).toBeCloseTo(2.8);
})
//! Test 4
test('La funzione createPhrase sostituisce gli spazi con -', () => {
    const result = createPhrase("Fabio è un bravo ragazzo");
    expect(result).toBe("Fabio-è-un-bravo-ragazzo");
})

const { getInitial, createSlug, average, createPhrase } = require("./testVari");