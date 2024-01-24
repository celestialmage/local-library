function sortWords(words) {
  words.sort((a, b) => (a.toLowerCase() > b.toLowerCase() ? 1 : -1));

  return words;
}

function sortNumbers(numbers) {
  numbers.sort((a, b) => (a > b ? 1 : -1));

  return numbers;
}

function largestFirst(numbers) {
  numbers.sort((a, b) => (a < b ? 1 : -1));

  return numbers;
}

function sortFlowersByZone(flowers) {
  flowers.sort((a, b) => (a.zone > b.zone ? 1 : -1));

  return flowers;
}

function sortByLength(strings) {
  strings.sort((a, b) => (a.length > b.length ? 1 : -1));

  return strings;
}

module.exports = {
  sortWords,
  sortNumbers,
  largestFirst,
  sortFlowersByZone,
  sortByLength,
};
