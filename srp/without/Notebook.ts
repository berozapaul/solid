import { Note } from './Note';

export class Notebook {
    public readonly notes: Note[];
    private theme: "LIGHT" | "DARK";
    private fontSize: number;

    constructor() {
        this.notes = [];
        this.theme = 'LIGHT';
        this.fontSize = 14;
    }

    public createNewNote(text: string = ""): void {
        const newNoteObj = {id: '12345', text};
        this.notes.push(newNoteObj);
    }

    public showNote(nodeId: string): void {
        const targetNote = this.notes.filter(item => item.id === nodeId)
        console.log(targetNote);
    }

    public showAllNotes(): void {
        this.notes.forEach((note) => {
            console.log(note);
        });
    }

    public deleteNote(nodeId: string): void {
        // @ts-ignore
        const index = this.notes.findIndex(item => item.id === nodeId)
        this.notes.splice(index, 1);
    }

    public deleteAllNotes(): void {
        this.notes.length = 0;
    }

    public editNote(noteId: string, newText: string): void {
        // @ts-ignore
        const index = this.notes.findIndex(({ id }) => id === noteId);
        this.notes[index].text = newText;
    }

    public toggleTheme(): void {
        this.theme = (this.theme === "LIGHT") ?  "DARK" : "LIGHT";
    }
}

//
//     public changeFontSize(newFontSize: number): void {
//         if (newFontSize < 8) {
//             this.fontSize = 8;
//         } else if (newFontSize > 60) {
//             this.fontSize = 60;
//         } else {
//             this.fontSize = Math.floor(newFontSize);
//         }
//     }
// }
