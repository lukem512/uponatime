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
    return opts.capitalize ? 'Once' : 'once';
  }
  if (n === 2) {
    return opts.capitalize ? 'Twice' : 'twice';
  }
  if (opts.thrice && n === 3) {
    return opts.capitalize ? 'Thrice' : 'thrice';
  }
  return times(n);
}

module.exports =  spoken;
module.exports.times = times;
