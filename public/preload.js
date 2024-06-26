const { contextBridge, ipcRenderer } = require('electron');
const { Titlebar } = require("custom-electron-titlebar");

contextBridge.exposeInMainWorld('ipcRenderer', {
    send: (channel, data) => ipcRenderer.send(channel, data)
});
