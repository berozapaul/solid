"use strict";
exports.__esModule = true;
exports.Notebook = void 0;
var Notebook = /** @class */ (function () {
    function Notebook() {
        this.notes = [];
        this.settings = [];
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
        this.notes.splice(index, 1);
    };
    Notebook.prototype.deleteAllNotes = function () {
        this.notes.length = 0;
    };
    Notebook.prototype.editNote = function (noteId, newText) {
        // @ts-ignore
        var index = this.notes.findIndex(function (_a) {
            var id = _a.id;
            return id === noteId;
        });
        this.notes[index].text = newText;
    };
    return Notebook;
}());
exports.Notebook = Notebook;
