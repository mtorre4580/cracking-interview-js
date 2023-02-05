function customMap(callback) {
  const results = [];

  for (let i = 0; i < this.length; i++) {
    results.push(callback(this[i], i, this));
  }

  return results;
}

function customFilter(callback) {
  const results = [];

  for (let i = 0; i < this.length; i++) {
    const value = this[i];
    if (callback(value, i, this)) {
      results.push(value);
    }
  }

  return results;
}

function customReduce(callback, initialValue) {
  let acumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    acumulator = callback(acumulator, this[i], i, this);
  }

  return acumulator;
}

module.exports = {
  customMap,
  customFilter,
  customReduce,
};
