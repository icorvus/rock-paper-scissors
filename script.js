function computerPlay() {
  // Returns pseudorandomly 'Rock' or 'Paper' or 'Scissors'

  const possibleResults = ['Rock', 'Paper', 'Scissors'];

  // This math expression below takes values from 0 to 2
  // and uses it to choose the final result
  return possibleResults[Math.floor(Math.random() * possibleResults.length)];
}