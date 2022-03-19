"use strict";
exports.__esModule = true;
exports.Order = void 0;
var Order = /** @class */ (function () {
    function Order(orderId) {
        this.orderId = orderId;
    }
    Order.prototype.initPayment = function (paymentObj) {
        paymentObj.makePayment();
    };
    return Order;
}());
exports.Order = Order;
