/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  if (str1.concat(str2) !== str2.concat(str1)) {
    return '';
  } else if (str1 === str2) {
    return str1;
  } else {
    const n = str1.length;
    const m = str2.length;

    if (n > m) return gcdOfStrings(str1.slice(m), str2);
    else return gcdOfStrings(str1, str2.slice(n));
  }
};
