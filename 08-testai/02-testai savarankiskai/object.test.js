// addObjectProperty.test.js

const addObjectProperty = require('./object');

describe('addObjectProperty', () => {
    it('should add "kaina: 50" to the object', () => {
        const inputObject = {};
        const result = addObjectProperty(inputObject);

        expect(result).toEqual({ kaina: 50 });
    });

    it('should return "Objektas jau turi kainą!" if "kaina" property already exists', () => {
        const inputObject = { kaina: 30 };
        const result = addObjectProperty(inputObject);

        expect(result).toBe("Objektas jau turi kainą!");
    });
});
