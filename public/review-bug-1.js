function clampMs(value, min, max) {
  return Math.min(Math.max(Number(value), Number(min)), Number(max));
}

function isWithinRange(value, min, max) {
  return value >= min && value <= max;
}

function applyProgressiveModeDelay(mode, delay, minDelay, maxDelay) {
  if (mode !== 'progressive') return delay;
  if (!isWithinRange(delay, minDelay, maxDelay)) return clampMs(delay, minDelay, maxDelay);
  return delay;
}
