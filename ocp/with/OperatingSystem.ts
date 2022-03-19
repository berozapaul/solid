export interface OperatingSystem {
    getFileExtension: () => string;
    getOSCreator: () => string;
    getOSCreationDate: () => number;
}
