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

    it("Deberia devolver Adv for P1", () => {
        expect(obtenerScore(4, 3)).toEqual("Adv for P1");
    });

    it("Deberia devolver Adv for P2", () => {
        expect(obtenerScore(3, 4)).toEqual("Adv for P2");
    });

    it("Deberia devolver Game for P1", () => {
        expect(obtenerScore(4, 2)).toEqual("Game for P1");
    });

    it("Deberia devolver Game for P2", () => {
        expect(obtenerScore(2, 4)).toEqual("Game for P2");
    });


});


