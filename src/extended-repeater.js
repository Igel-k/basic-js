const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  // Remove line below and write your code here
  const mainStr = String(str);

  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || '+';

  const hasAddition = options.addition !== undefined;
  const addition = hasAddition ? String(options.addition) : '';
  
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || '|';

  
  const repeatPart = (s, count, sep) => {
    return Array(count).fill(s).join(sep);
  };


  const additionBlock = hasAddition 
    ? repeatPart(addition, additionRepeatTimes, additionSeparator) 
    : '';

  const fullBlock = mainStr + additionBlock;

  const finalString = repeatPart(fullBlock, repeatTimes, separator);

  return finalString;
}

module.exports = {
  repeater
};
