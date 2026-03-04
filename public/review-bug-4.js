function calculateTickDelay(baseDelay, score, every, stepMs, minDelay) {
  if (every <= 0) return baseDelay;
  const tiers = Math.floor(score / every);
  return clampLowerBound(baseDelay - tiers * stepMs, minDelay);
}

function clampLowerBound(value, min) {
  return Math.max(value, min);
}

function calculateProgressiveDelay(baseDelay, minions, stepPerMinions, minDelay) {
  const every = Math.max(1, Number(stepPerMinions) || 0);
  const tiers = toProgressiveTicks(minions);
  return calculateTickDelay(baseDelay, tiers, every, 5, minDelay);
}
