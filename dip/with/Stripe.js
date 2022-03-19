"use strict";
exports.__esModule = true;
exports.Stripe = void 0;
var Stripe = /** @class */ (function () {
    function Stripe() {
    }
    Stripe.prototype.makePayment = function () {
        console.log("Make payment using ".concat(this.constructor.name));
    };
    return Stripe;
}());
exports.Stripe = Stripe;
