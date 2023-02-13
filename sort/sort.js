function bubbleSort(array) {
  function swap(array, i, j) {
    const tmp = array[j];
    array[j] = array[i];
    array[i] = tmp;
  }

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }
}

module.exports = {
  bubbleSort,
};
