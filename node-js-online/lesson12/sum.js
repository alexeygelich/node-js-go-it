function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid params');
  }
  return a + b;
}

module.exports = sum;
