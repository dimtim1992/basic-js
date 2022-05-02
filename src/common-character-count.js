const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
  const firstStringSymbolsArray = s1.split('');
  const secondStringSymbolsArray = s2.split('');

  const result = firstStringSymbolsArray.reduce((acc, curr) => {
    const matchCharIndex = acc.secondStringSymbolsArray.findIndex((char) => char === curr);

    if (matchCharIndex !== -1) {
      acc.secondStringSymbolsArray.splice(matchCharIndex, 1)
      acc.count += 1;
    }

    return acc;
  }, {
    secondStringSymbolsArray,
    count: 0
  });

  return result.count;
}

module.exports = {
  getCommonCharacterCount
};
