import {Port} from './Port'

export class Laptop implements Port {
    useUSB() {
        console.log("USB port is ready for your Laptop!");
    };

    useLAN() {
        console.log("LAN port is ready for your Laptop!");
    };
}
