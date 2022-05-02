const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chainValues: [],
  getLength() {
    return this.chainValues.length;
  },
  addLink(value) {
    this.chainValues.push(value);
    return this;
  },
  removeLink(position) {
    const element = this.chainValues[position - 1];

    if (element === undefined) {
      this.chainValues = [];

      throw new Error('You can\'t remove incorrect link!');
    }

    this.chainValues.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chainValues = this.chainValues.reverse();
    return this;
  },
  finishChain() {
    const chainResult = this.chainValues.reduce((acc, currentValue, index) => {
      if (index === 0) {
        if (this.chainValues.length > 1) {
          acc += `( ${ currentValue } )~`;
        } else {
          acc += `( ${ currentValue } )`;
        }
      } else if (index === this.chainValues.length - 1) {
        acc += `~( ${ currentValue } )`;
      } else {
        acc += `~( ${ currentValue } )~`
      }
      return acc;
    }, '')

    this.chainValues = [];

    return chainResult;
  }
};

module.exports = {
  chainMaker
};
