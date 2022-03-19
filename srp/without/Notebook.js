"use strict";
exports.__esModule = true;
exports.Notebook = void 0;
var Notebook = /** @class */ (function () {
    function Notebook() {
        this.notes = [];
        this.password = '';
        this.theme = 'LIGHT';
        this.fontSize = 14;
    }
    Notebook.prototype.createNewNote = function (text) {
        if (text === void 0) { text = ""; }
        var newNoteObj = { id: '12345', text: text };
        this.notes.push(newNoteObj);
    };
    Notebook.prototype.showNote = function (nodeId) {
        var targetNote = this.notes.filter(function (item) { return item.id === nodeId; });
        console.log(targetNote);
    };
    Notebook.prototype.showAllNotes = function () {
        this.notes.forEach(function (note) {
            console.log(note);
        });
    };
    Notebook.prototype.deleteNote = function (nodeId) {
        // @ts-ignore
        var index = this.notes.findIndex(function (item) { return item.id === nodeId; });
        this.notes.splice(0, 1);
    };
    return Notebook;
}());
exports.Notebook = Notebook;
// export class Notebook {
//     public readonly notes: Note[];
//     private password: string;
//     private theme: "LIGHT" | "DARK";
//     private fontSize: number;
//
//     constructor() {
//         this.notes = [];
//         this.password = "";
//         this.theme = "LIGHT";
//         this.fontSize = 14;
//     }
//
//     public createNewNote(text: string = ""): void {
//         const newNote: Note = { id: new Date().toISOString(), text };
//         this.notes.push(newNote);
//     }
//
//     public deleteAllNotes(): void {
//         this.notes.length = 0;
//     }
//
//     public deleteNote(noteId: string): void {
//         // @ts-ignore
//         const targetNote = this.notes.find(({ id }) => id === noteId);
//         const targetNoteIndex = this.notes.indexOf(targetNote);
//         this.notes.splice(targetNoteIndex, 1);
//     }
//
//     public showNote(noteId: string): void {
//         // @ts-ignore
//         const targetNote = this.notes.find(({ id }) => id === noteId);
//         console.log(targetNote.text);
//     }
//
//     public editNote(noteId: string, newText: string): void {
//         // @ts-ignore
//         const targetNote = this.notes.find(({ id }) => id === noteId);
//         const targetNoteIndex = this.notes.indexOf(targetNote);
//         this.notes[targetNoteIndex].text = newText;
//     }
//
//     public changePassword(newPassword: string): void {
//         if (newPassword.length >= 8 && newPassword.length <= 32) {
//             this.password = newPassword;
//         }
//     }
//
//     public toggleTheme(): void {
//         if (this.theme === "LIGHT") {
//             this.theme = "DARK";
//         } else {
//             this.theme = "LIGHT";
//         }
//     }
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
