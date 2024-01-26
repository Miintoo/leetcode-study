/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let result = '';
  const word1_length = word1.length;
  const word2_length = word2.length;
  const max_length = Math.max(word1_length, word2_length);

  for (let i = 0; i < max_length; i++) {
    if (!word1[i]) {
      result += '';
    } else {
      result += word1[i];
    }

    if (!word2[i]) {
      result += '';
    } else {
      result += word2[i];
    }
  }

  return result;
};
