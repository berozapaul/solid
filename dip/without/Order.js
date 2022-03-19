"use strict";
exports.__esModule = true;
exports.Desktop = void 0;
var Order = /** @class */ (function () {
    function Desktop() {
    }
    Desktop.prototype.useUSB = function () {
        console.log("USB port is ready for your PC!");
    };
    ;
    Desktop.prototype.useLAN = function () {
        console.log("LAN port is ready for your PC!");
    };
    ;
    Desktop.prototype.usePS2 = function () {
        console.log("PS2 port is ready for your PC!");
    };
    ;
    Desktop.prototype.useVGA = function () {
        console.log("VGA port is ready for your PC!");
    };
    ;
    return Desktop;
}());
exports.Desktop = Order;
