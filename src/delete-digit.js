const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // Remove line below and write your code here
  const strNumber = String(n);
  let maxNum = 0;

  for (let i = 0; i < strNumber.length; i++) {
    const currentStr = strNumber.slice(0, i) + strNumber.slice(i + 1);
    const currentNum = Number(currentStr);
    if (currentNum > maxNum) {
      maxNum = currentNum;
    }
  }

  return maxNum;
}

module.exports = {
  deleteDigit
};
