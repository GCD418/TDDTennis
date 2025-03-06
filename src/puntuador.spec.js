import puntuador from "./puntuador";

describe("Marcador de puntaje para Tennis", () => {
  it("Deberia Devolver Love-Love", () => {
    expect(puntuador(0, 0)).toEqual("Love-Love");
  });
});


