import { Note } from './Note';
import { Settings } from './Settings';

export class Notebook {
    public readonly notes: Note[];
    public readonly settings: Settings[];

    constructor() {
        this.notes = [];
        this.settings = [];
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
}


