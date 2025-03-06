import puntuador from "./puntuador";

describe("Marcador de puntaje para Tennis", () => {
    it("Deberia Devolver Love-Love", () => {
        expect(puntuador(0, 0)).toEqual("Love-Love");
    });

    it("Deberia devolver 15-0", () => {
        expect(puntuador(1, 0)).toEqual("15-0");
    });


});


