/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const splitS = s.split(' ');

  const filterS = splitS.filter(item => item !== '');
  const reverseS = filterS.reverse();

  return reverseS.join(' ');
};
