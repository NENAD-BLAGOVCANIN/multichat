const { app, BrowserWindow, ipcMain, ipcRenderer, BrowserView, Tray, Menu, Notification, session } = require('electron');
const { setupTitlebar, attachTitlebarToWindow } = require("custom-electron-titlebar/main");
const path = require('path');
const electron = require('electron');

setupTitlebar();

let mainWindow;
let tray;
const NOTIFICATION_TITLE = 'Read New Messages'
const NOTIFICATION_BODY = 'Checkout your new messages on Multichat.'
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


function showNotification() {
    new Notification({
        title: NOTIFICATION_TITLE,
        body: NOTIFICATION_BODY,
        icon: path.join(__dirname, '../src/assets/img/logo.png'),
    }).show();
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
        titleBarStyle: 'hidden',
        titleBarOverlay: true,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            sandbox: false,
            preload: path.join(__dirname, 'preload.js'),
            // webSecurity: true,
            // allowFileAccess: false,
            webviewTag: true
        },
        frame: true,
        autoHideMenuBar: true,
        icon: path.join(__dirname, '../src/assets/img/logo.png'),
    });

    attachTitlebarToWindow(mainWindow);

    mainWindow.setMenuBarVisibility(false)
    mainWindow.loadURL(startURL);

    showNotification();

    mainWindow.on('closed', () => {
        mainWindow = null;
    });

    mainWindow.on('close', (event) => {
        if (!app.isQuitting) {
            event.preventDefault();
            mainWindow.hide();
        }
    });

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