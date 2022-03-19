
export class Order {
    private orderId: string;

    constructor(orderId: string) {
        this.orderId = orderId;
    }

    initPayment(paymentObj: any): void {
        paymentObj.makePayment();
    }
}
