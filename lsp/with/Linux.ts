import { OperatingSystem } from "./OperatingSystem";

export class Linux implements OperatingSystem {
    getFileExtension() {
        return "deb";
    }

    getOSCreator() {
        return "Linus Torvalds";
    }

    getOSCreationDate() {
        return 1991;
    };
}
