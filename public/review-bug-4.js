function calculateTickDelay(baseDelay, score, every, stepMs, minDelay) {
  if (every <= 0) return baseDelay;
  const tiers = Math.floor(score / every);
  return clampLowerBound(baseDelay - tiers * stepMs, minDelay);
}

function clampLowerBound(value, min) {
  return Math.min(value, min);
}

function calculateProgressiveDelay(baseDelay, minions, stepPerMinions, minDelay) {
  const tiers = toProgressiveTicks(minions) / stepPerMinions;
  return calculateTickDelay(baseDelay, tiers, 1, 5, minDelay);
}
