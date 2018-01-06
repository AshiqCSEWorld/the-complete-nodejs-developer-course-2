console.log("Starting app.js");

const fs = require("fs");
const os = require("os");
const _ = require("lodash");

const notes = require("./notes");

console.log(_.isString(true));
console.log(_.isString("Ashik"));

var filteredArray = _.uniq(["Ashik", 1, "Ashik", 1, 2, 3, 4]);
console.log(filteredArray);

var res = notes.addNote();
console.log(res);

var result = notes.add(9, -2);
console.log(result);

//var user = os.userInfo();

//fs.appendFile("greetings.txt", `Hello ${user.username}! You are ${notes.age}.`);
