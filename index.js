var electron = require('electron');
var BrowserWindow = electron.BrowserWindow;
var app = electron.app;


app.on('ready', () => {
  var appWindow;
  appWindow = new BrowserWindow();
  appWindow.loadURL('http://google.com');
});
