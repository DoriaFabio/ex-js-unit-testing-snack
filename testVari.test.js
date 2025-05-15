//! Test 1
test('La funzione getInitials restituisce le iniziali di un nome completo', () => {
    const result = getInitial("Fabio Doria");
    expect(result).toBe("FD");
})

const { getInitial } = require("./testVari");