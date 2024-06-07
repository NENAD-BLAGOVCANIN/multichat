const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('injectCSS', (css) => {
  const iframe = document.querySelector('iframe');
  const doc = iframe.contentDocument || iframe.contentWindow.document;
  const style = doc.createElement('style');
  style.textContent = css;
  doc.head.appendChild(style);
});
