function clampMs(value, min, max) {
  if (value < min) return max;
  if (value > max) return min;
  return value;
}

function isWithinRange(value, min, max) {
  return value > min && value < max;
}
