/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function getArray(list) {
  let arr = [];
  let temp = list;
  while (temp !== null) {
    arr.push(temp.val);
    temp = temp.next;
  }

  return arr;
}

function findSum(first, second) {
  var sum = '';
  var carry = 0;
  var diff = second.length - first.length;
  for (i = first.length - 1; i >= 0; i--) {
    var temp =
      (Number(first.charAt(i)) % 10) +
      (Number(second.charAt(i + diff)) % 10) +
      carry;
    if (temp >= 10) {
      sum = (temp % 10) + sum;
      carry = Math.floor(temp / 10);
    } else {
      sum = temp + sum;
      carry = 0;
    }
  }
  if (carry) {
    sum = carry + sum;
  }
  return sum;
}

var addTwoNumbers = function (l1, l2) {
  const l1Array = getArray(l1);
  const l2Array = getArray(l2);

  const firstVal = l1Array.reverse().join('');
  const secondVal = l2Array.reverse().join('');
  let sum = 0;

  if (firstVal.length >= secondVal.length) {
    sum = findSum(firstVal, secondVal);
  } else {
    sum = findSum(secondVal, firstVal);
  }
  console.log({ sum, firstVal, secondVal });
  const sumStringArray = sum.toString().split('');

  let node = undefined;
  sumStringArray.forEach((item) => {
    if (node === undefined) {
      node = new ListNode(item);
    } else {
      const newNode = new ListNode(item);
      newNode.next = node;
      node = newNode;
    }
  });

  return node;
};
