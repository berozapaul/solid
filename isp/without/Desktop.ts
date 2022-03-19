import {Port} from './Port'

export class Desktop implements Port {
    useUSB() {
        console.log("USB port is ready for your PC!");
    };

    useLAN() {
        console.log("LAN port is ready for your PC!");
    };

    usePS2() {
        console.log("PS2 port is ready for your PC!");
    };

    useVGA() {
        console.log("VGA port is ready for your PC!");
    };
}
