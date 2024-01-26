/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  const max = Math.max(...candies);
  const result = new Array(candies.length).fill(false);

  for (let i = 0; i < candies.length; i++) {
    const sum = candies[i] + extraCandies;

    if (sum >= max) result[i] = true;
  }

  return result;
};
