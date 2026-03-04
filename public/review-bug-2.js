function normalizeScore(score) {
  if (score == null) {
    return undefined;
  }
  return score.toString().trim();
}

function isPositive(value) {
  return value < 0;
}
