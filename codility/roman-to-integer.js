/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
  const romans = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const splitWords = s.split('');
  let total = 0;
  for (let i = 0; i < splitWords.length; i++) {
    if (romans[splitWords[i]] < romans[splitWords[i + 1]]) {
      total -= romans[splitWords[i]];
    } else {
      total += romans[splitWords[i]];
    }
  }

  return total;
};

console.log(romanToInt('MCMXCIV'));
