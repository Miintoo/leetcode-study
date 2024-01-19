/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  const flowerbedLength = flowerbed.length;
  let max = Math.ceil(flowerbedLength / 2);
  let nCount = n;

  const count = flowerbed.reduce((acc, cur) => acc + (cur === 1), 0);

  if (count + n > max) return false;

  for (let i = 0; i < flowerbedLength; i++) {
    if (flowerbed[i] === 1) continue;

    if (i === 0) {
      if (flowerbed[i + 1] === 1) continue;
      else {
        flowerbed[i] = 1;
        nCount -= 1;
        continue;
      }
    } else {
      if (flowerbed[i - 1] === 1 || flowerbed[i + 1] === 1) continue;
      else {
        flowerbed[i] = 1;
        nCount -= 1;
        continue;
      }
    }
  }

  if (nCount > 0) return false;
  else return true;
};
