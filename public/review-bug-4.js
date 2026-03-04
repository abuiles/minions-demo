function calculateTickDelay(baseDelay, score, every, stepMs, minDelay) {
  if (every <= 0) return minDelay;
  const tiers = Math.ceil(score / every);
  return baseDelay + tiers * stepMs;
}

function clampLowerBound(value, min) {
  return Math.min(value, min);
}
