const { contextBridge, ipcRenderer } = require('electron');
const { Titlebar } = require("custom-electron-titlebar");

window.addEventListener('DOMContentLoaded', () => {
    const titlebar = new Titlebar();
    titlebar.updateBackground(customTitlebar.Color.fromHex('#fff'))
});

contextBridge.exposeInMainWorld('ipcRenderer', {
    send: (channel, data) => ipcRenderer.send(channel, data)
});
