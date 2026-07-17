const {
  app,
  BrowserWindow,
  Tray,
  Menu,
  nativeImage,
  ipcMain,
  screen,
  shell,
  globalShortcut,
  Notification,
} = require('electron');
const path = require('path');
const fs = require('fs');
const store = require('./store');

const isDev = process.argv.includes('--dev');
let mainWindow = null;
let widgetWindow = null;
let tray = null;
let isQuitting = false;
let trayTimes = []; // { name, time, id }
let reminderTimer = null;

const WINDOW_WIDTH = 1180;
const WINDOW_HEIGHT = 740;

function getIconPath() {
  const ico = path.join(__dirname, '..', 'assets', 'icon.ico');
  const png = path.join(__dirname, '..', 'assets', 'icon.png');
  if (fs.existsSync(ico)) return ico;
  if (fs.existsSync(png)) return png;
  return null;
}

function createTrayIcon() {
  const trayPng = path.join(__dirname, '..', 'assets', 'tray.png');
  const iconPath = fs.existsSync(trayPng) ? trayPng : getIconPath();
  if (iconPath) {
    const img = nativeImage.createFromPath(iconPath);
    if (!img.isEmpty()) {
      return process.platform === 'win32' ? img.resize({ width: 16, height: 16 }) : img;
    }
  }
  return nativeImage.createEmpty();
}

function applyBounds(win, bounds) {
  if (!bounds || typeof bounds !== 'object') return;
  try {
    const { x, y, width, height } = bounds;
    if ([x, y, width, height].every((n) => typeof n === 'number')) {
      win.setBounds({ x, y, width: Math.max(width, 640), height: Math.max(height, 420) });
    }
  } catch {
    /* ignore */
  }
}

function persistBounds() {
  if (!mainWindow || mainWindow.isDestroyed()) return;
  if (mainWindow.isMaximized()) return;
  store.update({ bounds: mainWindow.getBounds() });
}

function createWindow() {
  const settings = store.read();
  const display = screen.getPrimaryDisplay();
  const { width: sw, height: sh } = display.workAreaSize;

  mainWindow = new BrowserWindow({
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
    minWidth: 720,
    minHeight: 480,
    x: Math.round((sw - WINDOW_WIDTH) / 2),
    y: Math.round((sh - WINDOW_HEIGHT) / 2),
    show: false,
    frame: false,
    backgroundColor: '#05080f',
    resizable: true,
    maximizable: true,
    fullscreenable: true,
    skipTaskbar: false,
    hasShadow: true,
    title: 'ApexTimeZones',
    icon: getIconPath() || undefined,
    alwaysOnTop: !!settings.alwaysOnTop,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: false,
      webSecurity: true,
      devTools: isDev,
    },
  });

  if (settings.bounds) applyBounds(mainWindow, settings.bounds);

  if (!isDev) {
    // suppress noisy console in prod unless needed
  } else {
    mainWindow.webContents.on('console-message', (_e, level, message, line, sourceId) => {
      console.log(`[renderer:${level}] ${message} (${sourceId}:${line})`);
    });
  }

  mainWindow.webContents.on('did-fail-load', (_e, code, desc, url) => {
    console.error('Failed to load', code, desc, url);
  });

  mainWindow.loadFile(path.join(__dirname, '..', 'src', 'index.html'));

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
    mainWindow.focus();
    emitVisibility(true);
  });

  mainWindow.on('close', (e) => {
    if (!isQuitting) {
      e.preventDefault();
      persistBounds();
      mainWindow.hide();
      emitVisibility(false);
    } else {
      persistBounds();
    }
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  mainWindow.on('maximize', () => emitWindowState());
  mainWindow.on('unmaximize', () => emitWindowState());
  mainWindow.on('show', () => emitVisibility(true));
  mainWindow.on('hide', () => emitVisibility(false));
  mainWindow.on('minimize', () => emitVisibility(false));
  mainWindow.on('restore', () => emitVisibility(true));
  mainWindow.on('resize', () => {
    clearTimeout(mainWindow._boundsTimer);
    mainWindow._boundsTimer = setTimeout(persistBounds, 400);
  });
  mainWindow.on('move', () => {
    clearTimeout(mainWindow._boundsTimer);
    mainWindow._boundsTimer = setTimeout(persistBounds, 400);
  });

  if (isDev) {
    mainWindow.webContents.openDevTools({ mode: 'detach' });
  }
}

function emitWindowState() {
  if (!mainWindow || mainWindow.isDestroyed()) return;
  mainWindow.webContents.send('window-state', {
    maximized: mainWindow.isMaximized(),
    alwaysOnTop: mainWindow.isAlwaysOnTop(),
  });
}

function emitVisibility(visible) {
  if (!mainWindow || mainWindow.isDestroyed()) return;
  mainWindow.webContents.send('window-visibility', visible);
}

function toggleWindow() {
  if (!mainWindow) {
    createWindow();
    return;
  }
  if (mainWindow.isVisible()) {
    if (mainWindow.isFocused()) {
      persistBounds();
      mainWindow.hide();
      emitVisibility(false);
    } else {
      mainWindow.show();
      mainWindow.focus();
      emitVisibility(true);
    }
  } else {
    mainWindow.show();
    mainWindow.focus();
    emitVisibility(true);
  }
}

function buildTrayMenu() {
  const settings = store.read();
  const timeItems = trayTimes.slice(0, 6).map((t) => ({
    label: `${t.name}: ${t.time}`,
    enabled: false,
  }));

  return Menu.buildFromTemplate([
    {
      label: 'Open ApexTimeZones',
      click: () => {
        if (!mainWindow) createWindow();
        else {
          mainWindow.show();
          mainWindow.focus();
          emitVisibility(true);
        }
      },
    },
    {
      label: 'Toggle mini widget',
      click: () => {
        if (mainWindow && !mainWindow.isDestroyed()) {
          mainWindow.webContents.send('toggle-widget-mode');
          mainWindow.show();
        }
      },
    },
    { type: 'separator' },
    ...(timeItems.length
      ? [{ label: 'Pinned times', enabled: false }, ...timeItems, { type: 'separator' }]
      : []),
    {
      label: 'Always on Top',
      type: 'checkbox',
      checked: !!settings.alwaysOnTop,
      click: (item) => {
        store.update({ alwaysOnTop: item.checked });
        if (mainWindow) mainWindow.setAlwaysOnTop(item.checked);
      },
    },
    {
      label: 'Start with Windows',
      type: 'checkbox',
      checked: !!settings.startWithWindows,
      click: (item) => {
        applyStartWithWindows(item.checked);
      },
    },
    { type: 'separator' },
    {
      label: 'Quit',
      click: () => {
        isQuitting = true;
        app.quit();
      },
    },
  ]);
}

function updateTrayTooltip() {
  if (!tray) return;
  if (!trayTimes.length) {
    tray.setToolTip('ApexTimeZones — Global time at a glance');
    return;
  }
  const line = trayTimes
    .slice(0, 4)
    .map((t) => `${t.name} ${t.time}`)
    .join(' · ');
  tray.setToolTip(`ApexTimeZones\n${line}`);
}

function refreshTrayMenu() {
  if (!tray) return;
  tray.setContextMenu(buildTrayMenu());
  updateTrayTooltip();
}

function createTray() {
  tray = new Tray(createTrayIcon());
  refreshTrayMenu();
  tray.on('click', () => toggleWindow());
  tray.on('double-click', () => toggleWindow());
}

function applyStartWithWindows(enabled) {
  store.update({ startWithWindows: !!enabled });
  try {
    app.setLoginItemSettings({
      openAtLogin: !!enabled,
      path: process.execPath,
      args: [],
    });
  } catch (e) {
    console.error('setLoginItemSettings', e);
  }
}

function registerHotkey(accel) {
  globalShortcut.unregisterAll();
  const key = accel || store.read().hotkey || 'CommandOrControl+Alt+T';
  try {
    const ok = globalShortcut.register(key, () => toggleWindow());
    if (!ok) console.warn('Hotkey registration failed', key);
    store.update({ hotkey: key });
    return ok;
  } catch (e) {
    console.error('hotkey error', e);
    return false;
  }
}

function createWidgetWindow() {
  if (widgetWindow && !widgetWindow.isDestroyed()) {
    widgetWindow.show();
    return;
  }
  widgetWindow = new BrowserWindow({
    width: 360,
    height: 420,
    minWidth: 280,
    minHeight: 200,
    frame: false,
    alwaysOnTop: true,
    resizable: true,
    skipTaskbar: true,
    backgroundColor: '#05080f',
    show: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: false,
    },
  });
  widgetWindow.loadFile(path.join(__dirname, '..', 'src', 'index.html'), {
    query: { widget: '1' },
  });
  widgetWindow.once('ready-to-show', () => widgetWindow.show());
  widgetWindow.on('closed', () => {
    widgetWindow = null;
  });
}

function setupIpc() {
  ipcMain.on('window-minimize', () => {
    if (mainWindow) mainWindow.minimize();
  });

  ipcMain.on('window-maximize', () => {
    if (!mainWindow) return;
    if (mainWindow.isMaximized()) mainWindow.unmaximize();
    else mainWindow.maximize();
    emitWindowState();
  });

  ipcMain.on('window-hide-to-tray', () => {
    if (mainWindow) {
      persistBounds();
      mainWindow.hide();
      emitVisibility(false);
    }
  });

  ipcMain.on('window-close', () => {
    if (mainWindow) {
      persistBounds();
      mainWindow.hide();
      emitVisibility(false);
    }
  });

  ipcMain.handle('get-app-version', () => app.getVersion());
  ipcMain.handle('is-maximized', () => !!(mainWindow && mainWindow.isMaximized()));

  ipcMain.handle('get-main-settings', () => store.read());
  ipcMain.handle('set-main-settings', (_e, partial) => store.update(partial || {}));

  ipcMain.on('set-always-on-top', (_e, v) => {
    store.update({ alwaysOnTop: !!v });
    if (mainWindow) mainWindow.setAlwaysOnTop(!!v);
    refreshTrayMenu();
  });

  ipcMain.on('set-start-with-windows', (_e, v) => {
    applyStartWithWindows(!!v);
    refreshTrayMenu();
  });

  ipcMain.handle('set-hotkey', (_e, accel) => {
    const ok = registerHotkey(accel);
    return { ok, hotkey: store.read().hotkey };
  });

  ipcMain.on('show-notification', (_e, payload) => {
    if (!Notification.isSupported()) return;
    const n = new Notification({
      title: payload?.title || 'ApexTimeZones',
      body: payload?.body || '',
      icon: getIconPath() || undefined,
    });
    n.on('click', () => {
      if (mainWindow) {
        mainWindow.show();
        mainWindow.focus();
      }
    });
    n.show();
  });

  ipcMain.on('set-tray-times', (_e, payload) => {
    if (Array.isArray(payload)) {
      trayTimes = payload;
      refreshTrayMenu();
    }
  });

  ipcMain.on('open-widget', () => createWidgetWindow());
  ipcMain.on('close-widget', () => {
    if (widgetWindow && !widgetWindow.isDestroyed()) widgetWindow.close();
  });

  ipcMain.on('set-widget-mode', () => {
    /* renderer handles CSS mode; optional separate window */
  });

  ipcMain.on('open-external', (_e, url) => {
    if (typeof url === 'string' && /^https?:\/\//i.test(url)) {
      shell.openExternal(url);
    }
  });
}

function startReminderWatcher() {
  clearInterval(reminderTimer);
  reminderTimer = setInterval(() => {
    const settings = store.read();
    const reminders = settings.reminders || [];
    if (!reminders.length) return;
    const now = Date.now();
    let changed = false;
    const next = reminders.map((r) => {
      if (r.fired || !r.fireAt) return r;
      const fireAt = Number(r.fireAt);
      if (now >= fireAt && now < fireAt + 120000) {
        if (Notification.isSupported()) {
          new Notification({
            title: r.title || 'Upcoming event',
            body: r.body || 'Event starting soon',
            icon: getIconPath() || undefined,
          }).show();
        }
        changed = true;
        return { ...r, fired: true };
      }
      return r;
    });
    if (changed) store.update({ reminders: next });
  }, 30000);
}

const gotLock = app.requestSingleInstanceLock();
if (!gotLock) {
  app.quit();
} else {
  app.on('second-instance', () => {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.show();
      mainWindow.focus();
      emitVisibility(true);
    }
  });

  app.whenReady().then(() => {
    setupIpc();
    createTray();
    createWindow();
    registerHotkey(store.read().hotkey);
    const s = store.read();
    if (s.startWithWindows) applyStartWithWindows(true);
    startReminderWatcher();

    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow();
      else if (mainWindow) {
        mainWindow.show();
        mainWindow.focus();
      }
    });
  });
}

app.on('before-quit', () => {
  isQuitting = true;
  globalShortcut.unregisterAll();
  clearInterval(reminderTimer);
});

app.on('will-quit', () => {
  globalShortcut.unregisterAll();
});

app.on('window-all-closed', () => {
  // Keep tray app alive on Windows
});
