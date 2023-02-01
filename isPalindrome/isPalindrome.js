function isPalindromeV1(str) {
  const formated = str.replace(/[\W_]/g, "");
  return formated.split("").reverse().join("") === formated;
}

module.exports = {
  isPalindromeV1,
};
