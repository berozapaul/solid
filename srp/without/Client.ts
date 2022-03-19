import { Notebook } from "./Notebook";

const noteObj = new Notebook();
console.log('Creating one new node!');
noteObj.createNewNote('I am the first ever node');
console.log(noteObj);
console.log('All nodes!');
noteObj.showAllNotes();
console.log('Deleting the created node!');
noteObj.deleteNote('12345');
console.log('All nodes!');
noteObj.showAllNotes();
