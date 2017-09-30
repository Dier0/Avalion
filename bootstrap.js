var gui  = require('nw.gui');
var win  = gui.Window.get();
var fs   = require('fs');
var path = require('path');

var nwPath    = process.execPath;
const __DIR__ = path.join(path.dirname(nwPath), '../');

Boot.createFolders();
Boot.createConfigFile();

var config = Config.get();

Engine.start();