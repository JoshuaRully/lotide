const letterPositions = (string) => {
  const results = {};
  string = string.toLowerCase().split("");

  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      return results;
    } else if (results[string[i]]) {
      results[string[i]].push(i);
    } else {
      results[string[i]] = [i];
    }
  }
  return results;
};

module.exports = letterPositions;