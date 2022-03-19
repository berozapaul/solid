import { OperatingSystem } from "./OperatingSystem";

export class Macintosh implements OperatingSystem {
    getFileExtension() {
        return "dmg";
    }

    getOSCreator() {
        return "Steve Jobs";
    }

    getOSCreationDate() {
        return 1984;
    };
}
