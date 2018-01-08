//const fs = require("fs");
//const _ = require("lodash");
const notes = require("./notes");
const yargs = require("yargs");

const titleOptions = {
  describe: "Title of note",
  demand: true,
  alias: "t"
};

const bodyOptions = {
  describe: "Body of the note",
  demand: true,
  alias: "b"
};

const argv = yargs
  .command("add", "Add a new note", {
    title: titleOptions,
    body: bodyOptions
  })
  .command("list", "List all notes")
  .command("read", "Read a note", {
    title: titleOptions
  })
  .command("remove", "remove a note", {
    title: titleOptions
  })
  .help().argv;
var command = argv._[0];

// console.log("command: ", command);
// // console.log("Process",process.argv);
// console.log("Yargs ", argv);

if (command === "add") {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log("note created");
    notes.logNote(note);
  } else {
    console.log("note title taken");
  }
} else if (command === "list") {
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes} note(s).`);
  allNotes.forEach(note => {
    notes.logNote(note);
  });
} else if (command === "read") {
  var note = notes.getNote(argv.title);

  if (note) {
    console.log("Note found");
    notes.logNote(note);
  } else {
    console.log("Note not found");
  }
} else if (command === "remove") {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? "Note was Removed" : "Note not found";
  console.log(message);
} else {
  console.log("Command not recognized");
}
