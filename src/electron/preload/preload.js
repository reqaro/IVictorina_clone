const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
  ///////////////////////////
  //events to FRONT
  receiveSpectatorScreen: (callback) =>
    ipcRenderer.on("message:new_screen", (event, new_screen) =>
      callback(new_screen)
    ),
  receiveOpenFileData: (callback) => {
    ipcRenderer.on("message:file-open", (event, data) => callback(data));
  },
  goToMainPage: (callback) => {
    ipcRenderer.on("go:toMainPage", (event, pathToMain) => callback(pathToMain));
  },
  receiveInitialState: (callback) =>
    // ipcRenderer.on("toRenderer:set-initial-state", (event, tempFileData) => {
    ipcRenderer.on("toRenderer:set-initial-state", (event, data) =>
      callback(data)
    ),
  ///////////////////////////
  //events to ELECTRON-BACK
  openSpectatorsWindow: () => {
    ipcRenderer.invoke("open:spectators-window");
  },
  closeSpectatorsWindow: () => {
    ipcRenderer.invoke("close:spectators-window");
  },
  changeSpectatorScreen: (new_screen) => {
    ipcRenderer.invoke("send:spectators-change-screen", new_screen);
  },
  openFileSelect: () => {
    ipcRenderer.invoke("open:open-file");
  },
  setInitialState: () => {
    ipcRenderer.invoke("toMain:set-initial-state");
  },
  ////////////////   Change status logic/////////////
  // toClient
  receiveRoutePath: (callback) => {
    ipcRenderer.on("toRenderer:status", (event, gameStatus) =>
      callback(gameStatus)
    );
  },

  receiveAction: (callback) => {
    ipcRenderer.on("toRenderer:synchronize-store", (event, action) =>
      callback(action)
    );
  },

  /////////////////////
  //  toMain
  setGameStatus: (gameStatus) => {
    ipcRenderer.invoke("toMain:status", gameStatus);
  },
  synchronizeStore: (action) => {
    ipcRenderer.invoke("toMain:synchronize-store", action);
  },
  /////////////////////////////
});
