var app = require('app');
var BrowserWindow = require('browser-window');

// Report crashes to our server
require('crash-reporter').start();

// Keep a global reference to the winod object, if you don't, the window will
// be close automatically when the javscript object is GCed.
var mainWindow = null;

// Quite when all windows are closed.
app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});


// This method will be called when Electron has done everything
// initialization and read for creating browser windows.
app.on('ready', function() {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 600});

  // and load the index.html of the app.
  mainWindow.loadUrl('file://' + __dirname + '/index.html');

  // Open the devtools.
  mainWindow.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
});
