"use strict";
exports.__esModule = true;
exports.Bird = void 0;
var Bird = /** @class */ (function () {
    function Bird() {
    }
    Bird.prototype.walk = function () {
        console.log("".concat(this.constructor.name, " can walk"));
    };
    return Bird;
}());
exports.Bird = Bird;
