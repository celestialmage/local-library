function printNames(names) {
  names.forEach((names) => console.log(names));
}

function logTreeType(trees) {
  trees.forEach((trees) => console.log(trees.type));
}

function totalPoints(points) {
  let pointTotal = 0;

  points.forEach((point) => {
    pointTotal += point;
  });

  return pointTotal;
}

function buildSentence(words) {
  let sentence = "";
  words.forEach((word) => (sentence += word + " "));
  return sentence;
}

function logPercentages(decimals) {
  decimals.forEach((decimal) => console.log(`${decimal * 100}%`));
}

// const decimals = [0.75, 0.91, 0.48, 0.23, 0.99, 0.83, 1.1];

// logPercentages(decimals);

module.exports = {
  printNames,
  logTreeType,
  totalPoints,
  buildSentence,
  logPercentages,
};
