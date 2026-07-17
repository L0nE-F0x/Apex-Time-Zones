const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('apex', {
  minimize: () => ipcRenderer.send('window-minimize'),
  maximize: () => ipcRenderer.send('window-maximize'),
  hideToTray: () => ipcRenderer.send('window-hide-to-tray'),
  close: () => ipcRenderer.send('window-close'),
  getVersion: () => ipcRenderer.invoke('get-app-version'),
  openExternal: (url) => ipcRenderer.send('open-external', url),

  // settings / desktop
  getMainSettings: () => ipcRenderer.invoke('get-main-settings'),
  setMainSettings: (partial) => ipcRenderer.invoke('set-main-settings', partial),
  setAlwaysOnTop: (v) => ipcRenderer.send('set-always-on-top', v),
  setStartWithWindows: (v) => ipcRenderer.send('set-start-with-windows', v),
  setHotkey: (accel) => ipcRenderer.invoke('set-hotkey', accel),
  notify: (payload) => ipcRenderer.send('show-notification', payload),
  setTrayTimes: (payload) => ipcRenderer.send('set-tray-times', payload),
  openWidget: () => ipcRenderer.send('open-widget'),
  closeWidget: () => ipcRenderer.send('close-widget'),
  setWidgetMode: (v) => ipcRenderer.send('set-widget-mode', v),
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
});
