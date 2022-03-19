import {PaymentMethods} from "./PaymentMethods";

export class Stripe implements PaymentMethods{
    makePayment(): void {
        console.log(`Make payment using ${this.constructor.name}`);
    }
}
