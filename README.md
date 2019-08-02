<p align="center"> 
<img src="https://legacy.axelgreavette.xyz/v2/img/portfolio/botutils.png">
</p>

# Bot-Utils
[![NPM](https://nodei.co/npm/bot-utils.png?)](https://nodei.co/npm/bot-utils/) 

[![npm version](https://badge.fury.io/js/bot-utils.svg)](https://badge.fury.io/js/bot-utils) [![Downloads](https://img.shields.io/npm/dt/bot-utils.svg?maxAge=3600)](https://www.npmjs.com/package/bot-utils) [![CircleCI](https://circleci.com/gh/axelgreavette/bot-utils.svg?style=shield)](https://circleci.com/gh/axelgreavette/bot-utils) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)


Easy to use utilities for JavaScript written Discord bots. Or you can use them any Javascript program...

~~For the version using classes visit [here](https://github.com/axelgreavette/bot-utils/tree/classes)~~  Don't do this right now... It's wayyyyy behind.

## Contributing
If you wish to contribute to **bot-utils** continued development make sure to take a look at [this](https://github.com/axelgreavette/bot-utils/blob/master/CONTRIBUTING.md) file.

## Method Documentation
| Method | Description |
|--|--|
|`Array.shuffle()` | Extends Array - Shuffles the attached `array` |
|`Array.random()` | Extends Array - Picks a random item from the attached `array`|
|`Object.isArray()` | Extends Object - Returns whether or not the attached `object` is actually an `array` |
|`snowflake(snowflake)`| Returns the date of given `snowflake` |
|`cpuUsage()` | Returns the CPU usage for the time when it was called |
|`randColor()`| Returns a random `#` prefixed Hex colour code |
|`randInt(min, max)`| Returns a random integer from a range of `mid` to `max` |
|`randAlphaNum(len)` | Returns a random alphanumeric |
|`round(number, decimal-place)` | Returns a the given `number` rounded to the given `decimal-place` |
|`hasNumber(string)` | Returns a boolean based on whether the supplied string contains a number or not |
|`isNumber(input)` | Returns a boolean based on whether the supplied input is a number or not |
|`uptime()` | Returns process uptime formatted into a human readable string |