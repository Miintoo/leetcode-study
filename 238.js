/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const result = [];
  let resultValue = 0;
  let count = nums.reduce((cnt, element) => cnt + (0 === element), 0);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) continue;

    if (resultValue === 0) {
      resultValue = nums[i];
      continue;
    }
    resultValue *= nums[i];
  }

  if (count > 0) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 0) {
        if (count >= 2) {
          result.push(0);
        } else {
          result.push(resultValue);
        }
      } else {
        result.push(0);
      }
    }
  } else {
    for (let i = 0; i < nums.length; i++) {
      result.push(resultValue / nums[i]);
    }
  }

  return result;
};
