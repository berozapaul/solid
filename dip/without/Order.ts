import {Stripe} from "./Stripe";


export class Order {
    private orderId: string;

    constructor(orderId: string) {
        this.orderId = orderId;
    }

    initStripePayment(): void {
        const stripeObj = new Stripe()
        stripeObj.makePayment();
    }
}
