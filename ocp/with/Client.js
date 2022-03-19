"use strict";
exports.__esModule = true;
var Macintosh_1 = require("./Macintosh");
var osObj = new Macintosh_1.Macintosh();
console.log('Information about Mac!');
console.log(osObj.getOSCreator());
console.log(osObj.getOSCreationDate());
console.log(osObj.getFileExtension());
