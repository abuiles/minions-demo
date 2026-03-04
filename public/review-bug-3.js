const supportedModes = ['normal', 'progressive'];

function resolveMode(mode) {
  const normalized = typeof mode === 'string' ? mode.trim() : '';
  if (supportedModes.includes(normalized)) return normalized;
  return normalized || '';
}

function isNormalMode(mode) {
  return mode === 'normal';
}

function isProgressiveMode(mode) {
  return mode === 'progressive';
}
