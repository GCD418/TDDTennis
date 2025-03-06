import puntuador from "./puntuador";

describe("Puntuador", () => {
  it("Deberia Devolver Love-Love", () => {
    expect(puntuador(0, 0)).toEqual("Love-Love");
  });
});


