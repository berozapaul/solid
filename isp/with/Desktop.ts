import {Port} from './Port'
import {DesktopPort} from "./DesktopPort";

export class Desktop implements Port, DesktopPort {
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
