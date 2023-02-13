function linearSearch(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}

function binarySearch(array, value) {
  const middleIndex = Math.floor(array.length / 2);
  const valueInMiddle = array[middleIndex];

  if (valueInMiddle === value) {
    return true;
  }

  if (array.length === 1) {
    return false;
  }

  const middleArray =
    valueInMiddle > value
      ? array.slice(0, middleIndex)
      : array.slice(middleIndex, array.length);

  return binarySearch(middleArray, value);
}

module.exports = { linearSearch, binarySearch };
