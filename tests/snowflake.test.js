const { snowflake } = require("../build");

test("converts 453763441732354058 snowflake to Wed, 06 Jun 2018 03:33:55 GMT", () => {
    expect(snowflake("453763441732354058")).toBe("Wed, 06 Jun 2018 03:33:55 GMT");
})