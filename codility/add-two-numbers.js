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
var addTwoNumbers = function (l1, l2) {
  console.log(l1, l2);
  const sumOfL1 = l1.reduce((total, num) => total + num, 0);
  console.log(sumOfL1);
};

addTwoNumbers([2, 4, 3], [5, 6, 4]);
