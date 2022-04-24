const Spiderman = require('./../app/spiderman')

describe("Unit Test for Spiderman class", () => {
    test('2) Use the method getInfo()', () => {
        // Aquí escribimos el código que queremos usar tal cual
        // Quiero poder instanciar un objeto Spiderman con esta información
      const tomHolland = new Spiderman("Spiderman Marvel", 25, "Tom Holland", 5, "Marvel")

      // Validamos que este código funcione de la forma esperada
      expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel sudio");

    });
  })