import {Port} from './Port'

export class Laptop implements Port {
    useUSB() {
        console.log("USB port is ready for your Laptop!");
    };

    useLAN() {
        console.log("LAN port is ready for your Laptop!");
    };

    usePS2() {
        throw new Error("Laptop has not any PS2 port!");
    };

    useVGA() {
        throw new Error("Laptop has not any VGA port!");
    };
}
