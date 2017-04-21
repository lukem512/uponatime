# [Once] upon a time

[![Build Status](https://travis-ci.org/lukem512/uponatime.svg?branch=master)](https://travis-ci.org/lukem512/uponatime)

Prints 'once', 'twice' or 'n times'.

## Install

```
npm i --save uponatime
```

## Usage

```js
const uponatime = require('uponatime');

let clicks = 0;

// This will print:
// 1. 'Clicked the button once'
// 2. 'Clicked the button twice'
// 3. 'Clicked the button 3 times'
// 4. 'Clicked the button 4 times'
// ...
function buttonHandler() {
  clicks++;
  console.log(`Clicked the button ${uponatime(clicks)}`);
}
```

An `opts` parameter may be passed with a single parameter: `thrice`. Enabling `thrice` will print `thrice` rather than `3 times`. The default value is `false`.

A second method, `times` is also exported. This will simply print `n times` for a specified value of `n`.

```js
// This will print: '14 times'
console.log(uponatime.times(14));
```

## License

MIT © Luke Mitchell
