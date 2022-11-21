const { ipcMain } = require("electron");

const { BrowserWindow } = require("electron");
const isDev = require("electron-is-dev");
const dirPath = require("path");
const url = require("url");

class AppWindow {
  startUrl;
  customWindow;
  constructor(height, width, path = "", parent = undefined) {
    this.startUrl = url.format({
      pathname: dirPath.join(__dirname, "../index.html"),
      protocol: "file:",
      slashes: true,
    });
    this.customWindow = new BrowserWindow({
      height,
      width,
      parent,
      webPreferences: {
        preload: dirPath.join(__dirname, "./preload/preload.js"),
      },
    });
    if (path === "") {
      this.customWindow.loadURL(
        isDev ? `http://localhost:3000` : this.startUrl
      );
    } else {
      this.customWindow.loadURL(
        isDev ? `http://localhost:3000/#/${path}` : this.startUrl + "#/" + path
      );
    }
    return this.customWindow;
  }

  getPosition() {
    let position = this.customWindow.getPosition();
    return position;
  }

  setPosition(x, y) {
    this.customWindow.setPosition(x, y);
  }

  setTitle(title) {
    this.customWindow.setTitle(title);
  }

  on(eventType, callback) {
    ipcMain.handle(eventType, callback);
  }
  send(eventType, payload) {
    this.customWindow.webContents.send(eventType, payload);
  }
}

module.exports = AppWindow;
