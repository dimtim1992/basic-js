const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let arr = [];

  if(members === null) {
    return false;
  }

  if(members === undefined || members === null) {
    return false;
  }


  if(!members.length) {
    return false;
  }

  members.forEach(item => {
    if(typeof item === 'string') {
      let counter = 0;
      
      while(item[counter] === ' ') {
        counter++;
      }

      arr.push(item[counter].toUpperCase());
    }
  })

  // for(let i = 0; i < arr.length; i++) {
  //   members[i]
  // }

  return arr.sort((a, b) => {
    return a.charCodeAt(0) - b.charCodeAt(0);
  }).join('');
}

module.exports = {
  createDreamTeam
};
