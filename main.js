const { app, BrowserWindow } = require('electron')

app.whenReady().then(() => {
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) app.quit()
    })
})
const createWindow = () => {
    const win = new BrowserWindow({
        width: 1280,
        height: 800,
    })

    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', () => {
    app.quit()
})

