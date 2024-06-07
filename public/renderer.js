const { ipcRenderer } = require('electron');

ipcRenderer.on('chat-created', (event, chatView) => {
  const chatContainer = document.getElementById('chat-container');
  chatContainer.appendChild(chatView.element);
  chatView.element.classList.add('chat-container', 'chat-view');
});
