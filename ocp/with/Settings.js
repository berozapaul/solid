"use strict";
exports.__esModule = true;
exports.Settings = void 0;
var Settings = /** @class */ (function () {
    function Settings() {
        this.theme = 'LIGHT';
        this.fontSize = 14;
    }
    Settings.prototype.toggleTheme = function () {
        this.theme = (this.theme === "LIGHT") ? "DARK" : "LIGHT";
    };
    Settings.prototype.changeFontSize = function (newFontSize) {
        if (newFontSize < 8 && newFontSize > 60) {
            this.fontSize = 14;
        }
        else {
            this.fontSize = Math.floor(newFontSize);
        }
    };
    return Settings;
}());
exports.Settings = Settings;
