"use strict";
exports.__esModule = true;
exports.Bird = void 0;
var Bird = /** @class */ (function () {
    function Bird() {
    }
    Bird.prototype.fly = function () {
        console.log("".concat(this.constructor.name, " can fly"));
    };
    return Bird;
}());
exports.Bird = Bird;
