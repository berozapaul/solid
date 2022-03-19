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
    Laptop.prototype.usePS2 = function () {
        throw new Error("Laptop has not any PS2 port!");
    };
    ;
    Laptop.prototype.useVGA = function () {
        throw new Error("Laptop has not any VGA port!");
    };
    ;
    return Laptop;
}());
exports.Laptop = Laptop;
