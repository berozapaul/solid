import {Order} from "./Order";

const orderObj = new Order('123');
orderObj.initStripePayment(); // Violation of DIP principle
