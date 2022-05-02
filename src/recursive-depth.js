const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 class DepthCalculator {
  depthPoint = 1;

  calculateDepth(arr, currentDepth = this.depthPoint) {
    if (!arr.length) {
      return currentDepth;
    }

    const result = arr.map((element) => {
      if (Array.isArray(element)) {
        return this.calculateDepth(element, currentDepth + this.depthPoint);
      }

      return currentDepth;
    });

    return Math.max(...result);
  }
}

module.exports = {
  DepthCalculator
};
