const {app,BrowserWindow,Menu} = require('electron');
const path = require('path')

function createWindows()
{
    Menu.setApplicationMenu(null);
    const win = new BrowserWindow({
        width:400,
        height:400,
        webPreferences:{
            preload: path.join(__dirname,'preload.js')
        }
    })
    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindows()
})

app.on('window-all-closed',() => {
    if(process.platform !== 'darwin') app.quit;
})