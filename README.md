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

An `opts` object may be passed as a optional parameter.

Specifying a truthy value for `thrice` will print `thrice` rather than `3 times`. The default value for `thrice` is `false`.

Specifying a truthy value of `capitalize` will print `Once`, `Twice` and `Trhrice` with a capital letter at the beginning. Then values for `n times` are not affected. The default value for `capitalize` is `false`.

A second method, `times` is also exported. This will simply print `n times` for a specified value of `n`.

```js
// This will print: '14 times'
console.log(uponatime.times(14));
```

## License

MIT © Luke Mitchell
