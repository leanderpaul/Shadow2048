const { app, BrowserWindow } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");

let mainWindow;
let isPrimaryInstance = app.requestSingleInstanceLock();
if (!isPrimaryInstance) app.quit();

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 396,
        height: 580,
        resizable: false,
        show: false
    });
    require("./menu");
    mainWindow.loadURL(
        isDev
            ? "http://localhost:3000"
            : `file://${path.join(__dirname, "../build/index.html")}`
    );
    // mainWindow.webContents.openDevTools({ mode: 'undocked' })
    mainWindow.on("closed", () => (mainWindow = null));
    mainWindow.on("ready-to-show", () => mainWindow.show());
}

function focusPrimaryInstance() {
    if (mainWindow) {
        if (mainWindow.isMinimized()) mainWindow.restore();
        mainWindow.focus();
    }
}

app.on("ready", createWindow);

app.on("second-instance", focusPrimaryInstance);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
});
