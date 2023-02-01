function isPermutationV1(str1, str2) {
  if (str1.length !== str2.length) return false;

  function hashMapCountByChar(str) {
    return str.split("").reduce((ac, char) => {
      ac[char] = ac[char] ? ac[char] + 1 : 1;
      return ac;
    }, {});
  }

  const hashOne = hashMapCountByChar(str1);
  const hashTwo = hashMapCountByChar(str2);

  for (const char in hashOne) {
    if (hashOne[char] !== hashTwo[char]) {
      return false;
    }
  }

  return true;
}

function isPermutationV2(str1, str2) {
  if (str1.length != str2.length) return false;

  function sortString(str) {
    return str.split("").sort().join("");
  }

  return sortString(str1) === sortString(str2);
}

module.exports = {
  isPermutationV1,
  isPermutationV2,
};
