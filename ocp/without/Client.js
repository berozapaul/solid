"use strict";
exports.__esModule = true;
var OperatingSystem_1 = require("./OperatingSystem");
var osObj = new OperatingSystem_1.OperatingSystem();
console.log('Information about Mac!');
console.log(osObj.getOSCreator('Macintosh'));
console.log(osObj.getCreatedDate('Macintosh'));
console.log(osObj.getFilesExtention('Macintosh'));
