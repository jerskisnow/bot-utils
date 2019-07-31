const { join: j } = require("path");
const { hasNumber } = require(j(__dirname, "..", "build", "index.js"));

test("randomly shuffles [1,2,3,4,5]", () => {
    expect(hasNumber("We are number one")).toBeFalsy();
    expect(hasNumber("We are number 1")).toBeTruthy();
})