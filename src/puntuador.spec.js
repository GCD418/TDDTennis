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

});


