const {BrowserWindow} = require('electron');
const {app} = require('electron');


app.on('ready', () => {

  // Create appWindow
  let appWindow = new BrowserWindow({
    width: 1366,
    height: 768
  });

  // Close appWindow
  appWindow.on('closed', () => {
    appWindow = null;
  });

  // Load appWindow content
  appWindow.loadURL(`file://${__dirname}/index.html`);

});
