const { BrowserWindow } = require("electron");
const isDev = require("electron-is-dev");
const dirPath = require("path");
const url = require("url");

const startUrl = url.format({
  pathname: dirPath.join(__dirname, "../index.html"),
  protocol: "file:",
  slashes: true,
});

const createWindow = (height, width, path = "", parent = undefined) => {
  const customWindow = new BrowserWindow({
    height,
    width,
    parent,
    webPreferences: {
      preload: dirPath.join(__dirname, "./preload/preload.js"),
    },
  });
  if (path === "") {
    customWindow.loadURL(isDev ? `http://localhost:3000` : startUrl);
  } else {
    customWindow.loadURL(
      isDev ? `http://localhost:3000/#/${path}` : startUrl + "#/" + path
    );
  }
  if (isDev) {
    customWindow.webContents.openDevTools();
  }
  return customWindow;
};

module.exports = createWindow;
