function generateRandomNumber() {
  const min = 100000000; // minimum value (inclusive)
  const max = 999999999; // maximum value (inclusive)
  return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports = generateRandomNumber;