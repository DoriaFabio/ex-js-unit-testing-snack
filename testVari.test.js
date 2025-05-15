describe("Manipolazione di stringhe", () => {
    //! Test 1
    test('La funzione getInitials restituisce le iniziali di un nome completo', () => {
        const result = getInitial("Fabio Doria");
        expect(result).toBe("FD");
    })
    //! Test 5
    test('La funzione isPalindrome verifica se una stringa è un palindromo.', () => {
        const result = isPalindrome("Otto");
        const result2 = isPalindrome("orto");
        const result3 = isPalindrome("I topi non avevano nipoti");
        expect(result).toBeTruthy();
        expect(result2).toBeFalsy();
        expect(result3).toBeTruthy();
    })
})

describe("createSlug", () => {
    //! Test 2
    test('La funzione createSlug restituisce una stringa in lowercase', () => {
        const result = createSlug("BooLean");
        expect(result).toBe("boolean");
        const result2 = createSlug("Fabio Doria");
        expect(result2).toBe("fabio-doria");
    })
    //! Test 4
    test('La funzione createSlug sostituisce gli spazi con -', () => {
        const result = createSlug("Fabio è un bravo ragazzo");
        expect(result).toBe("fabio-è-un-bravo-ragazzo");
    })
    //! Test 6
    test('La funzione createSlug lancia un errore se il titolo è vuoto o non valido.', () => {
        expect(() => createSlug("")).toThrow();
        expect(() => createSlug(null)).toThrow();
    })

})

describe("array di numeri", () => {
    //! Test 3
    test('La funzione average calcola la media aritmetica di un array di numeri.', () => {
        const result = average([1, 2, 3, 4, 5]);
        expect(result).toBeCloseTo(3);
        const result2 = average([1, 2, 3, 4, 4]);
        expect(result2).toBeCloseTo(2.8);
    })
})
//todo Array di posts
let posts;
beforeEach(() => {
    posts = [
        {
            id: 1,
            title: "Introduzione a JavaScript",
            slug: "introduzione-a-javascript"
        },
        {
            id: 2,
            title: "Come usare gli array",
            slug: "come-usare-gli-array"
        },
        {
            id: 3,
            title: "Guida ai cicli for",
            slug: "guida-ai-cicli-for"
        },
    ];
});
afterEach(() => {
    posts = [];
})

describe("Manipolazione array di oggetti", () => {
    //! Test 7
    test("La funzione findPostById restituisce il post corretto dato l'array di post e l'id", () => {
        expect(findPostById(posts, 2)).toEqual({
            id: 2,
            title: "Come usare gli array",
            slug: "come-usare-gli-array"
        });
        expect(findPostById(posts, 6)).toBe(null);
        expect(() => findPostById(posts, "ciao")).toThrow("ciao non è un id numerico");
        expect(() => findPostById([43, 56], 2)).toThrow("L'array posts non è nel formato corretto");
    });
})

const { getInitial, createSlug, average, isPalindrome, findPostById } = require("./testVari");