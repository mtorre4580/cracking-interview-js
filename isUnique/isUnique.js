function isUniqueV1(value) {
  const hashMapCharsCount = value.split("").reduce((ac, char) => {
    ac[char] = ac[char] ? ac[char] + 1 : 1;
    return ac;
  }, {});

  for (const char in hashMapCharsCount) {
    if (hashMapCharsCount[char] > 1) {
      return false;
    }
  }

  return true;
}

function isUniqueV2(value) {
  for (let i = 0; i < value.length; i++) {
    const char = value[i];
    const lastChar = value[value.length - 1 - i];
    if (char === lastChar) {
      return false;
    }
  }
  return true;
}

module.exports = {
  isUniqueV1,
  isUniqueV2,
};
