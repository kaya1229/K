const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 600,
    height: 800,
    transparent: true, // 배경 투명
    frame: false,      // 상단 바 제거
    alwaysOnTop: true, // 항상 위에 표시
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);
