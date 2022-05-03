const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 function sortByHeight(arr) {
  const sortedValues = arr.filter((value => value !== -1)).sort((a, b) => a - b);
  const sortedArray = arr.reduce((acc, currentValue) => {
    if (currentValue === -1) {
      acc.array.push(-1);
    } else {
     acc.array.push(sortedValues[acc.lastIndex]);
     acc.lastIndex += 1
    }

    return acc;
  }, {
    lastIndex: 0,
    array: [],
  })

  return sortedArray.array;
}

module.exports = {
  sortByHeight
};
