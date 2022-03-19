import {PaymentMethods} from "./PaymentMethods";

export class PayPal implements PaymentMethods{
    makePayment(): void {
        console.log(`Make payment using ${this.constructor.name}`);
    }
}
