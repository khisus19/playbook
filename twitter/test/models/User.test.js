const { TestWatcher } = require('jest');
const User = require('../../app/models/user.js');

describe("Unit Test for User class", () => {

    test("Create an User Object", () => {
        const user = new User(1, "carlogilmar", "Carlo", "Bio")

        expect(user.id).toBe(1);
        expect(user.username).toBe("carlogilmar");
        expect(user.name).toBe("Carlo");
        expect(user.bio).toBe("Bio");
    })
    
    test("Requerimiento 2: Fecha en atributos de user", () => {
        const user = new User(1, "carlogilmar", "Carlo", "Bio")
        expect(user.dateCreated).not.toBeUndefined();
        expect(user.lastUpdated).not.toBe();
    })

    test("Requerimiento 3: Agregar gets", () => {
        const user = new User(1, "carlogilmar", "Carlo", "Bio")
        expect(user.getUsername).toBe("carlogilmar")
        expect(user.getBio).toBe("Bio")
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()
    })
})

