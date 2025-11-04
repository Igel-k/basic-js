const { NotImplementedError } = require('../lib');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  // Remove line below and write your code here
  const flatArray = matrix.flat();
  const cats = flatArray.filter(item => item === '^^');
  
  return cats.length;
}

module.exports = {
  countCats
};
