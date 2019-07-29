const { randColor, randColour } = require("../build");

test("generates a random colour code", () => {
    expect(randColor()).toMatch(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);
    expect(randColour()).toMatch(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);
})