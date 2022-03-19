import { Notebook } from "./Notebook";
import { Settings } from "./Settings";

const noteObj = new Notebook();
console.log('Creating one new node!');
noteObj.createNewNote('I am the first ever node');

const settingsObj = new Settings();
noteObj.settings.push(settingsObj);
console.log(noteObj);

console.log('All nodes!');
noteObj.showAllNotes();
