"use strict";
exports.__esModule = true;
var Desktop_1 = require("./Desktop");
var Laptop_1 = require("./Laptop");
var desktopObj = new Desktop_1.Desktop();
desktopObj.useUSB();
var laptopObj = new Laptop_1.Laptop();
laptopObj.usePS2();
