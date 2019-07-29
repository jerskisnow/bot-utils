const { randColor } = require("../build");

test("generates a random colour code", () => {
    expect(randColor()).toMatch(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);
})