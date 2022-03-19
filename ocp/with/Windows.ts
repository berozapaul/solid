import { OperatingSystem } from "./OperatingSystem";

export class Windows implements OperatingSystem {
    getFileExtension() {
        return "exe";
    }

    getOSCreator() {
        return "Bill Gates";
    }

    getOSCreationDate() {
        return 1985;
    };
}
