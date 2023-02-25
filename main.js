// 导入模块
const { app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')
const fs = require('fs')

function openEdit (event) {
    const webContents = event.sender
    if (event.sender){

        const editPage = new BrowserWindow({
            width: 1000,
            height: 600,
        })

        editPage.loadFile('./html/edit.html')
    }
}

// 新建文章
function newEssay(event){
    const webContents = event.sender
    if (event.sender){
        fs.writeFileSync(path.join(__dirname, './json/file.json'), '# First file to test drag and drop')

        const editPage = new BrowserWindow({
            width: 1000,
            height: 600,

            webPreferences: {
                preload: path.join(__dirname, './js/edit.js')
            }
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
    ipcMain.on('openEdit', openEdit)
    ipcMain.on('newEssay', newEssay)

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
