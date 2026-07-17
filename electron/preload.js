const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('apex', {
  minimize: () => ipcRenderer.send('window-minimize'),
  maximize: () => ipcRenderer.send('window-maximize'),
  hideToTray: () => ipcRenderer.send('window-hide-to-tray'),
  close: () => ipcRenderer.send('window-close'),
  getVersion: () => ipcRenderer.invoke('get-app-version'),
  openExternal: (url) => ipcRenderer.send('open-external', url),
  openApexForge: () => ipcRenderer.send('open-apex-forge'),

  // settings / desktop
  getMainSettings: () => ipcRenderer.invoke('get-main-settings'),
  setMainSettings: (partial) => ipcRenderer.invoke('set-main-settings', partial),
  setAlwaysOnTop: (v) => ipcRenderer.send('set-always-on-top', v),
  setStartWithWindows: (v) => ipcRenderer.send('set-start-with-windows', v),
  setHotkey: (accel) => ipcRenderer.invoke('set-hotkey', accel),
  notify: (payload) => ipcRenderer.send('show-notification', payload),
  setTrayTimes: (payload) => ipcRenderer.send('set-tray-times', payload),
  onWindowState: (cb) => {
    const handler = (_e, state) => cb(state);
    ipcRenderer.on('window-state', handler);
    return () => ipcRenderer.removeListener('window-state', handler);
  },
  onVisibility: (cb) => {
    const handler = (_e, visible) => cb(visible);
    ipcRenderer.on('window-visibility', handler);
    return () => ipcRenderer.removeListener('window-visibility', handler);
  },
  onToggleWidget: (cb) => {
    const handler = () => cb();
    ipcRenderer.on('toggle-widget-mode', handler);
    return () => ipcRenderer.removeListener('toggle-widget-mode', handler);
  },
  isMaximized: () => ipcRenderer.invoke('is-maximized'),

  // sports data feed
  getSportsCatalog: () => ipcRenderer.invoke('get-sports-catalog'),
  refreshSportsCatalog: () => ipcRenderer.invoke('refresh-sports-catalog'),
  onSportsCatalog: (cb) => {
    const handler = (_e, catalog) => cb(catalog);
    ipcRenderer.on('sports-catalog', handler);
    return () => ipcRenderer.removeListener('sports-catalog', handler);
  },

  // updates
  checkForUpdates: () => ipcRenderer.invoke('check-for-updates'),
  downloadUpdate: () => ipcRenderer.invoke('download-update'),
  openUpdatePage: () => ipcRenderer.send('open-update-page'),
  onUpdateAvailable: (cb) => {
    const handler = (_e, info) => cb(info);
    ipcRenderer.on('update-available', handler);
    return () => ipcRenderer.removeListener('update-available', handler);
  },
  onUpdateNotAvailable: (cb) => {
    const handler = (_e, info) => cb(info);
    ipcRenderer.on('update-not-available', handler);
    return () => ipcRenderer.removeListener('update-not-available', handler);
  },
  onUpdateProgress: (cb) => {
    const handler = (_e, info) => cb(info);
    ipcRenderer.on('update-progress', handler);
    return () => ipcRenderer.removeListener('update-progress', handler);
  },
  onUpdateError: (cb) => {
    const handler = (_e, info) => cb(info);
    ipcRenderer.on('update-error', handler);
    return () => ipcRenderer.removeListener('update-error', handler);
  },
});
