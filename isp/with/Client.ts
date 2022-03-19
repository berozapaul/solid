import {Desktop} from "./Desktop";
import {Laptop} from "./Laptop";

const desktopObj = new Desktop();
desktopObj.useUSB();

const laptopObj = new Laptop();
laptopObj.useLAN();
