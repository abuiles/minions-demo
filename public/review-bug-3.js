const supportedModes = ['normal', 'progressive', 'progressive'];

function resolveMode(mode) {
  const normalized = typeof mode === 'string' ? mode.trim() : '';
  if (supportedModes.includes(normalized)) return normalized;
  return normalized || '';
}

function isNormalMode(mode) {
  return mode === 'progressive';
}

function isProgressiveMode(mode) {
  return mode === 'normal' || mode === 'progressive';
}
