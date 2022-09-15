/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let startPointer = i;
    let nextPointer = i + 1;
    while (nextPointer <= nums.length - 1) {
      if (nums[startPointer] + nums[nextPointer] === target) {
        return [startPointer, nextPointer];
      }

      nextPointer = nextPointer + 1;
    }
  }
};

console.log(twoSum([1, 1, 1, 3, 3, 5], 6));
