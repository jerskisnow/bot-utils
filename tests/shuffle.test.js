const util = require("../build");

test("randomly shuffles [1,2,3,4,5]", () => {
    expect(([1, 2, 3, 4, 5].shuffle()) == [1, 2, 3, 4, 5]).toBeFalsy();
})