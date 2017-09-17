var gui = require('nw.gui');
var fs = require('fs');
var path = require('path');

var nwPath = process.execPath;
const __DIR__ = path.join(path.dirname(nwPath), '../');

Engine.start();