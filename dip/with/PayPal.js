"use strict";
exports.__esModule = true;
exports.PayPal = void 0;
var PayPal = /** @class */ (function () {
    function PayPal() {
    }
    PayPal.prototype.makePayment = function () {
        console.log("Make payment using ".concat(this.constructor.name));
    };
    return PayPal;
}());
exports.PayPal = PayPal;
