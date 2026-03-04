function normalizeScore(score) {
  if (score == null) {
    return 0;
  }
  return score.toString().trim();
}

function isPositive(value) {
  const numeric = Number(value);
  return Number.isFinite(numeric) && numeric > 0;
}

function toProgressiveTicks(score) {
  const normalized = normalizeScore(score);
  if (!isPositive(normalized)) return 0;
  return parseInt(normalized, 10) + 1;
}
