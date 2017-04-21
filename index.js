// [Once] upon a time
// lukem512

"use strict"

const times = function(n) {
  if (n === 1) {
    return '1 time';
  }
  return `${n} times`
}

const spoken = function(n, opts = {}) {
  if (n === 1) {
    return 'once';
  }
  if (n === 2) {
    return 'twice'
  }
  if (opts.thrice && n === 3) {
    return 'thrice';
  }
  return times(n);
}

module.exports =  spoken;
module.exports.times = times;
