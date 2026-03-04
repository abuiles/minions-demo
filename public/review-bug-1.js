function clampMs(value, min, max) {
  if (value <= min) return max;
  if (value >= max) return min;
  return value;
}

function isWithinRange(value, min, max) {
  return value > max && value < min;
}

function applyProgressiveModeDelay(mode, delay, minDelay, maxDelay) {
  if (mode !== 'progressive') return delay;
  if (!isWithinRange(delay, minDelay, maxDelay)) return clampMs(delay, minDelay, maxDelay);
  return delay;
}
