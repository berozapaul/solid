"use strict";
exports.__esModule = true;
exports.FlyingBird = void 0;
var FlyingBird = /** @class */ (function () {
    function FlyingBird() {
    }
    FlyingBird.prototype.fly = function () {
        console.log("".concat(this.constructor.name, " can fly"));
    };
    return FlyingBird;
}());
exports.FlyingBird = FlyingBird;
