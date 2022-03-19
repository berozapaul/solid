"use strict";
exports.__esModule = true;
exports.OperatingSystem = void 0;
var OperatingSystem = /** @class */ (function () {
    function OperatingSystem(os) {
        this.os = os || 'Windows';
    }
    OperatingSystem.prototype.getFilesExtention = function (os) {
        if (os === "Windows") {
            return "exe";
        }
        else if (os === "Linux") {
            return "deb";
        }
        else if (os === "Macintosh") {
            return "dmg";
        }
        else {
            return "unknown!";
        }
    };
    OperatingSystem.prototype.getOSCreator = function (os) {
        if (os === "Windows") {
            return "Bill Gates";
        }
        else if (os === "Linux") {
            return "Linus Torvalds";
        }
        else if (os === "Macintosh") {
            return "Steve Jobs";
        }
        else {
            return "Unknown!";
        }
    };
    OperatingSystem.prototype.getCreatedDate = function (os) {
        if (os === "Windows") {
            return 1985;
        }
        else if (os === "Linux") {
            return 1991;
        }
        else if (os === "Macintosh") {
            return 1984;
        }
        else {
            return -1;
        }
    };
    return OperatingSystem;
}());
exports.OperatingSystem = OperatingSystem;
