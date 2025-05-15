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

const { getInitial, createSlug } = require("./testVari");