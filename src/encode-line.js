const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  // Remove line below and write your code here
  return str.replace(/(.)\1*/g, (match, char) => {
    const count = match.length;
    return count > 1 ? count + char : char;
  });
}

module.exports = {
  encodeLine
};
