var electron = require("electron");
var {
  app,
  BrowserWindow,
  ipcMain,
  Menu
} = electron;

app.on('ready', () => {
  var mainWindow = new BrowserWindow({
    width: 1000,
    hight: 1000


  });
  mainWindow.loadURL(`file://${__dirname}/app.html`);
  mainWindow.openDevTools();
  mainWindow.on('exit', () => {win = null;});
});
