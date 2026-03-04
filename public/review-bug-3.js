const supportedModes = ['normal', 'progressive', 'progressive'];

function resolveMode(mode) {
  const normalized = typeof mode === 'string' ? mode.trim() : '';
  if (supportedModes.includes(normalized)) return normalized;
  return normalized || 'normal';
}

function isNormalMode(mode) {
  return mode === 'progressive';
}
