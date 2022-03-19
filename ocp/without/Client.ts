import { OperatingSystem } from "./OperatingSystem";

const osObj = new OperatingSystem();
console.log('Information about Mac!');

console.log(osObj.getOSCreator('Macintosh'));
console.log(osObj.getCreatedDate('Macintosh'));
console.log(osObj.getFilesExtention('Macintosh'));
