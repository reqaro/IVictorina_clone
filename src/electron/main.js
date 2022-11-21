// Модули для управления приложением и создания окна
const { app, BrowserWindow, ipcMain, dialog } = require("electron");
const path = require("path");
const url = require("url");
const isDev = require("electron-is-dev");
const fs = require("fs");
const createWindow = require("./createWindow");

const COMMON_WIDTH = 1024;
const COMMON_HEIGHT = 768;
//electron windows vars
let mainWindow;
let spectatorsWindow;

//app-electron when ready:
app.whenReady().then(() => {
  mainWindow = createWindow(COMMON_HEIGHT, COMMON_WIDTH);
  // hostWindow = new AppWindow(COMMON_HEIGHT, COMMON_WIDTH);

  ipcMain.handle("open:spectators-window", () => {
      spectatorsWindow = createWindow(
        COMMON_HEIGHT,
        COMMON_WIDTH,
        "game",
        // "quiz-loop/#/welcome",
      );

      const parentPosition = mainWindow.getPosition();
      spectatorsWindow.setPosition(
        parentPosition[0] + 46,
        parentPosition[1] + 43
      );
      spectatorsWindow.setTitle("IRLIX ВикторИИнна - Окно зрителей");

      spectatorsWindow.on("close", function () {
        const pathToMain = "/";
        mainWindow.webContents.send("go:toMainPage", pathToMain);
      });
  });

  ipcMain.handle("close:spectators-window", () => {
      spectatorsWindow.close();
  });

  let tempFileData = {};
  ipcMain.handle("open:open-file", () => {
    const result = dialog.showOpenDialogSync(mainWindow, {
      properties: ["openFile"],
      filters: [{ name: "JSON", extensions: ["json"] }],
    });
    const path = result[0];
    const data = fs.readFileSync(path, "utf8");
    mainWindow.webContents.send("message:file-open", data);
    tempFileData = JSON.parse(data);
  });

  ipcMain.handle("send:spectators-change-screen", (event, new_screen) => {
    mainWindow.webContents.send("message:new_screen", new_screen);
    spectatorsWindow.webContents.send("message:new_screen", new_screen);
  });

  ipcMain.handle("send:colour", (event, colour) => {
    spectatorsWindow.webContents.send("message:colour", colour);
  });

  ipcMain.handle("toMain:set-initial-state", (event) => {
    spectatorsWindow.webContents.send(
      "toRenderer:set-initial-state",
      tempFileData
    );
  });

  ipcMain.handle("toMain:synchronize-store", (e, action) => {
    spectatorsWindow.webContents.send("toRenderer:synchronize-store", action);
  });

  /////// change gameStatus logic
  ipcMain.handle("toMain:status", (e, gameStatus) => {
    spectatorsWindow.webContents.send("toRenderer:status", gameStatus);
  });
  /////////////////////

  app.on("activate", function () {
    // На MacOS обычно пересоздают окно в приложении,
    // после того, как на иконку в доке нажали и других открытых окон нету.
    if (BrowserWindow.getAllWindows().length === 0) {
      mainWindow = createWindow(600, 800);
    }
  });
  mainWindow.on("close", function () {
    // Закрываем окно зрителей если закрыли основное окно
    spectatorsWindow.close();
  });
});

// Выйти когда все окна закрыты
app.on("window-all-closed", function () {
  // Для приложений и строки меню в macOS является обычным делом оставаться
  // активными до тех пор, пока пользователь не выйдет окончательно используя Cmd + Q
  if (process.platform !== "darwin") app.quit();
});
