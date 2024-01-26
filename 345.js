/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const a = [];
  const aIndex = [];
  let result = '';

  for (let i = 0; i < s.length; i++) {
    if (
      s[i] === 'a' ||
      s[i] === 'e' ||
      s[i] === 'i' ||
      s[i] === 'o' ||
      s[i] === 'u' ||
      s[i] === 'A' ||
      s[i] === 'E' ||
      s[i] === 'I' ||
      s[i] === 'O' ||
      s[i] === 'U'
    ) {
      a.push(s[i]);
      aIndex.push(i);
    }
  }

  const b = a.reverse();
  let currentIndex = 0;

  for (let i = 0; i < s.length; i++) {
    if (aIndex.includes(i)) {
      result += b[currentIndex];
      currentIndex++;
    } else {
      result += s[i];
    }
  }

  return result;
};
