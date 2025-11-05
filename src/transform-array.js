const { NotImplementedError } = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  // Remove line below and write your code here
  const res = [];

  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];

    switch (current) {
      case '--discard-next':
        i++;
        break;

      case '--discard-prev':
        if (arr[i - 1] !== undefined && arr[i - 2] !== '--discard-next') {
          res.pop();
        }
        break;

      case '--double-next':
        if (arr[i + 1] !== undefined) {
          res.push(arr[i + 1]);
        }
        break;

      case '--double-prev':
        if (arr[i - 1] !== undefined && arr[i - 2] !== '--discard-next') {
          res.push(arr[i - 1]);
        }
        break;

      default:
        res.push(current);
    }
  }

  return res;
}

module.exports = {
  transform
};
