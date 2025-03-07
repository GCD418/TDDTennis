import obtenerScore from "./puntuador.js";

describe("Marcador de puntaje para Tennis", () => {
    it("Deberia Devolver Love-Love", () => {
        expect(obtenerScore(0, 0)).toEqual("Love-Love");
    });

    it("Deberia devolver 15-0", () => {
        expect(obtenerScore(1, 0)).toEqual("15-0");
    });

    it("Deberia devolver 30-0", () => {
        expect(obtenerScore(2, 0)).toEqual("30-0");
    });

    it("Deberia devolver 40-0", () => {
        expect(obtenerScore(3, 0)).toEqual("40-0");
    });

    it("Deberia devolver 0-15", () => {
        expect(obtenerScore(0, 1)).toEqual("0-15");
    });


    it("Deberia devolver 15-30", () => {
        expect(obtenerScore(1, 2)).toEqual("15-30");
    });

    it("Deberia devolver DEUCE", () => {
        expect(obtenerScore(3, 3)).toEqual("DEUCE");
    });

    it("Deberia devolver DEUCE", () => {
        expect(obtenerScore(4, 4)).toEqual("DEUCE");
    });


});


