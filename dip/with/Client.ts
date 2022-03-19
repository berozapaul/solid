import {Order} from "./Order";
import {Stripe} from "./Stripe";
import {PayPal} from "./PayPal";

const orderObj = new Order('123');
const stripeObj = new Stripe();
orderObj.initPayment(stripeObj);

const paypalObj = new PayPal();
orderObj.initPayment(paypalObj);
