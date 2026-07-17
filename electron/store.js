const fs = require('fs');
const path = require('path');
const { app } = require('electron');

const FILE = () => path.join(app.getPath('userData'), 'apex-main-settings.json');

const DEFAULTS = {
  bounds: null,
  alwaysOnTop: false,
  hotkey: 'CommandOrControl+Alt+T',
  startWithWindows: false,
  hour12: false,
  trayCityIds: [],
  reminders: [],
};

function read() {
  try {
    const p = FILE();
    if (!fs.existsSync(p)) return { ...DEFAULTS };
    return { ...DEFAULTS, ...JSON.parse(fs.readFileSync(p, 'utf8')) };
  } catch {
    return { ...DEFAULTS };
  }
}

function write(data) {
  try {
    fs.writeFileSync(FILE(), JSON.stringify(data, null, 2), 'utf8');
  } catch (e) {
    console.error('store write failed', e);
  }
}

function update(partial) {
  const next = { ...read(), ...partial };
  write(next);
  return next;
}

module.exports = { read, write, update, DEFAULTS };
