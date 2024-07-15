const { contextBridge, ipcRenderer, shell } = require('electron');
const { Titlebar } = require("custom-electron-titlebar");

contextBridge.exposeInMainWorld('ipcRenderer', {
    send: (channel, data) => ipcRenderer.send(channel, data)
});

contextBridge.exposeInMainWorld('electron', {
    shell: shell,
});