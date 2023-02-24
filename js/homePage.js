const diaLogMessage = function (title,bodyText,chickMessage) {
    const NOTIFICATION_TITLE = title
    const NOTIFICATION_BODY = bodyText
    const CLICK_MESSAGE = chickMessage

    new Notification(NOTIFICATION_TITLE, {body: NOTIFICATION_BODY})
        .onclick = () => document.getElementById("output").innerText = CLICK_MESSAGE
}

window.addEventListener('DOMContentLoaded', () => {
    let openFile = document.getElementsByClassName("openFile");

    for (let i = 0;i<openFile.length;i++){
        openFile[i].onclick = function () {
            diaLogMessage("123",'按钮已点击',"12333")
            window.electronAPI.newWindow(200)
            // 创建编辑器页面
            // const editPage = new BrowserWindow({
            //     width: 1000,
            //     height: 600,
            // })
            //
            // editPage.loadFile('./html/edit.html')
        }
    }
})