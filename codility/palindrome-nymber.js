/**
 * @param {number} x
 * @return {boolean}
 */

function reverseNumber(number) {
  var revNumber = 0;
  while (number > 0) {
    revNumber = revNumber * 10 + (number % 10);
    number = Math.floor(number / 10);
  }
  return revNumber;
}

var isPalindrome = function (x) {
  if (x < 0) return false;

  const number = x;
  const rev = reverseNumber(x);
  if (number === rev) {
    return true;
  }

  return false;
};
