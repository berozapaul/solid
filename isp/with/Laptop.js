"use strict";
exports.__esModule = true;
exports.Laptop = void 0;
var Laptop = /** @class */ (function () {
    function Laptop() {
    }
    Laptop.prototype.useUSB = function () {
        console.log("USB port is ready for your Laptop!");
    };
    ;
    Laptop.prototype.useLAN = function () {
        console.log("LAN port is ready for your Laptop!");
    };
    ;
    return Laptop;
}());
exports.Laptop = Laptop;
