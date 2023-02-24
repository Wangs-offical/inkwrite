// 导入模块
const { app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')

function handleSetTitle (eveKnt, title) {
    const webContents = event.sender
    if (event.sender){
        const editPage = new BrowserWindow({
            width: 1000,
            height: 600,
        })

        editPage.loadFile('./html/edit.html')
    }
}

// 创建主页页面
const index = () => {
    const win = new BrowserWindow({
        width: 1000,
        height: 600,

        webPreferences: {
            preload: path.join(__dirname, './js/home.js')
        }
    })

    win.loadFile('home.html')
}

// 设置初始页面为主页
app.whenReady().then(() => {
    ipcMain.on('set-title', handleSetTitle)
    index()
})

// 退出
app.on('window-all-closed', () => {
    app.quit()
})

app.whenReady().then(() => {
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) app.quit()
    })
})
