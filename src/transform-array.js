const { NotImplementedError } = require('../extensions/index.js');

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
  if (!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }

  if (!arr.length) {
    return arr;
  }

  const COMMANDS = {
    DISCARD_NEXT: '--discard-next',
    DISCARD_PREV: '--discard-prev',
    DOUBLE_NEXT: '--double-next',
    DOUBLE_PREV: '--double-prev',
  }
  const arrayForTransform = [
    ...arr
  ];

  const commandIndex = arrayForTransform.findIndex((value) => {
    return value === COMMANDS.DISCARD_NEXT
      || value === COMMANDS.DISCARD_PREV
      || value === COMMANDS.DOUBLE_NEXT
      || value === COMMANDS.DOUBLE_PREV
  });

  if (commandIndex === -1) {
    return arrayForTransform.filter((value) => value);
  }

  const command = arrayForTransform[commandIndex];

  arrayForTransform[commandIndex] = null;

  if (command === COMMANDS.DISCARD_NEXT) {
    const valueForDiscard = arrayForTransform[commandIndex + 1];

    if (valueForDiscard) {
      arrayForTransform.splice(commandIndex + 1, 1)
    }
  }

  if (command === COMMANDS.DISCARD_PREV) {
    const valueForDiscard = arrayForTransform[commandIndex - 1];

    if (valueForDiscard) {
      arrayForTransform.splice(commandIndex - 1, 1);
    }
  }

  if (command === COMMANDS.DOUBLE_NEXT) {
    const valueForDouble = arrayForTransform[commandIndex + 1];

    if (valueForDouble) {
      arrayForTransform.splice(commandIndex + 1, 0, valueForDouble);
    }
  }

  if (command === COMMANDS.DOUBLE_PREV) {
    const valueForDouble = arrayForTransform[commandIndex - 1];

    if (valueForDouble) {
      arrayForTransform.splice(commandIndex - 1, 0, valueForDouble);
    }
  }

  return transform(arrayForTransform);
}

module.exports = {
  transform
};
