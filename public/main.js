const { app, BrowserWindow, ipcMain, ipcRenderer, BrowserView, Tray, Menu, Notification, session } = require('electron');
const { setupTitlebar, attachTitlebarToWindow } = require("custom-electron-titlebar/main");
const path = require('path');
const electron = require('electron');
const { autoUpdater } = require('electron-updater');
const log = require('electron-log');

let mainWindow;
let tray;
const appPath = path.resolve(app.getPath('exe'));
const isDev = false;

const startURL = isDev
    ? 'http://localhost:3000'
    : `file://${path.join(__dirname, '../build/index.html')}`;

if (!isDev) {
    app.setLoginItemSettings({
        openAtLogin: true,
        path: appPath
    });
}

if (process.platform === 'win32') {
    app.setAppUserModelId(app.name)
}

function createTray() {
    tray = new Tray(path.join(__dirname, '../src/assets/img/logo.png'));

    const contextMenu = Menu.buildFromTemplate([
        { label: 'Open Multichat', click: () => mainWindow.show() },
        { label: 'Exit Program', click: () => app.quit() }
    ]);

    tray.setToolTip('Multichat');
    tray.setContextMenu(contextMenu);

    tray.on('click', () => mainWindow.show());
}

app.on('ready', () => {

    createTray();

    mainWindow = new BrowserWindow({
        width: 1150,
        height: 750,
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            sandbox: false,
            preload: path.join(__dirname, 'preload.js'),
            webviewTag: true
        },
        frame: true,
        icon: path.join(__dirname, '../src/assets/img/logo.png'),
    });

    mainWindow.loadURL(startURL);

    mainWindow.on('closed', () => {
        mainWindow = null;
    });

    mainWindow.on('close', (event) => {
        if (!app.isQuitting) {
            event.preventDefault();
            mainWindow.hide();
        }
    });

    autoUpdater.checkForUpdatesAndNotify();

});

ipcMain.on('close-main-window', (event) => {
    if (!app.isQuitting) {
        event.preventDefault();
        mainWindow.hide();
    }
});

app.on('before-quit', () => {
    app.isQuitting = true;
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

ipcMain.on('check-for-updates', async (event) => {
    try {
        const updateInfo = await autoUpdater.checkForUpdatesAndNotify();
        if (updateInfo) {
            event.sender.send('update-available'); // Send message back to renderer
        }
    } catch (error) {
        console.error('Error checking for updates:', error);
    }
});


autoUpdater.on('update-available', (info) => {
    log.info('Update available.');
});

autoUpdater.on('update-downloaded', (info) => {
    log.info('Update downloaded; will install now');
    autoUpdater.quitAndInstall();
});