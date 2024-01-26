/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let cnt = 0;

  if (s.length === 0) return true;

  for (let i = 0; i < t.length; i++) {
    if (s[cnt] === t[i]) {
      cnt++;
      if (cnt === s.length) return true;
    }
  }

  return false;
};
