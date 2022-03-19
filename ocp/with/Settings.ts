import { Note } from './Note';

export class Settings {
    private theme: "LIGHT" | "DARK";
    private fontSize: number;

    constructor() {
        this.theme = 'LIGHT';
        this.fontSize = 14;
    }

    public toggleTheme(): void {
        this.theme = (this.theme === "LIGHT") ?  "DARK" : "LIGHT";
    }

    public changeFontSize(newFontSize: number): void {
        if (newFontSize < 8 && newFontSize > 60) {
            this.fontSize = 14;
        } else {
            this.fontSize = Math.floor(newFontSize);
        }
    }
}


