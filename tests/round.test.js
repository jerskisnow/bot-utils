const { round } = require("../build");

test("round 2.482482 to 4 decimal places", () => {
    expect(round(2.482482, 4)).toBe(2.4825);
})