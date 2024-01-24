// Goal of the function is to be passed an object with key-value pairs of "game name": { wins: int, lost: int } and find the sum of all win ints
function getTotalWins(games) {
  let totalWins = 0;

  for (const currentGame in games) {
    const gameWins = games[currentGame].wins;
    totalWins += gameWins;
  }

  return totalWins;
}

const games = {
  "Magic The Gathering Arena": { wins: 44, lost: 99 },
  "Black Jack": { wins: 34, lost: 29 },
};

const totalWins = getTotalWins(games);
console.log(totalWins); // Output: 10
