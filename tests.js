var util = require('./index.js')

test("converts 453763441732354058 snowflake to Wed, 06 Jun 2018 03:33:55 GMT", () => {
  expect(util.snowflake("453763441732354058")).match(/Wed, 06 Jun 2018 03:33:55 GMT/)
})

test("randomly shuffles [1,2,3,4,5]", () => {
  expect(([1,2,3,4,5].shuffle()) == [1,2,3,4,5]).toBeFalsy()
})

test("generates a random colour code", () => {
  expect(util.randColor()).toBeDefined()
})

test("generates a random number between 1 and 5", () => {
  expect(util.randInt(1,5)).toBeGreaterThanOrEqual(1).toBeLessThanOrEqual(5)
})


//console.log(util.uptime())

//console.log(util.osUptime())

test("turns hello world into all caps", () => {
  expect(util.capital("hello world")).match(/HELLO WORLD/)
})


//console.log(util.randAlphaNum(1))

test("round 2.482482 to 4 decimal places", () => {
  expect(util.round(2.482482, 4)).toBe(2.4824)
})

test("check if 3 is a number", () => {
  expect(util.isNumber(3)).toBeTruthy()
})

test("remove <h1>'s from <h1>hello world<h1>", () => {
  expect(util.removeHtml("<h1>hello world<h1>")).match(/hello world/)
})

//console.log(util.randItemFromArray(['2', 12, 'four']))

//console.log(util.arrayTo(5))

//console.log(util.isArray(['1','2','3','4', `5`])

//utils.start()
//console.log(utils.usage())

//console.log(utils.hasNumber('1 two three four five')
