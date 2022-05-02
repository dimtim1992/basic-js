const { NotImplementedError } = require('../extensions/index.js');

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
  const stringNumber = String(n);

  let maxNumber = null;
  
  stringNumber.split('').forEach((element, index, array) => {
    const arrayCopy = [ ...array ];
    arrayCopy.splice(index, 1);
    const newMaxNumber = arrayCopy.join('');
    
    if (maxNumber) {
      if (newMaxNumber > maxNumber) {
        maxNumber = newMaxNumber
      }
    } else {
      maxNumber = newMaxNumber
    }
  })
  
  return Number(maxNumber);
}

module.exports = {
  deleteDigit
};
