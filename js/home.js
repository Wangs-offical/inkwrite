const { app, BrowserWindow } = require('electron');
const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    newWindow: (code) => ipcRenderer.send('newWindow', code)
})