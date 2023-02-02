function stringCompressionV1(str) {
  let count = 1;
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let nextChar = str[i + 1] || null;
    if (char === nextChar) {
      count = count + 1;
    } else {
      result += `${char}${count}`;
      count = 1;
    }
  }

  if (result.length < str.length) {
    return result;
  }

  return str;
}

module.exports = {
  stringCompressionV1,
};
