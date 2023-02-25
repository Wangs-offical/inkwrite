const { app, BrowserWindow } = require('electron');
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    openEdit: (code) => ipcRenderer.send('openEdit', code),
    newEssay : (code) => ipcRenderer.send('newEssay', code)

})