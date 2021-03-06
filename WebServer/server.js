const express = require("express");
const hbs = require("hbs");
const fs = require("fs");

const port = process.env.PORT || 3000;

var app = express();

hbs.registerPartials(__dirname + "/views/partials");

app.set("view engine", "hbs");

//app.use(express.static(__dirname + "/public"));

//middlewires
app.use((req, res, next) => {
  var now = new Date().toString();
  var log = `${now}: ${req.method}: ${req.url}`;
  console.log(log);
  // fs.appendFile("server.log", log + "\n", err => {
  //   if (err) {
  //     console.log("Unable to append to server.log");
  //   }
  // });
  next();
});

// app.use((req, res, next) => {
//   res.render("maintenance");
// });

app.use(express.static("public"));

hbs.registerHelper("getCurrentYear", () => {
  return new Date().getFullYear();
});

hbs.registerHelper("screamIt", text => {
  return text.toUpperCase();
});

app.get("/", (req, res) => {
  //res.send("<h1>Hello express!</h1>");
  // res.send({
  //   name: "Ashik",
  //   likes: ["Biking", "Cities"]
  // });

  res.render("home.hbs", {
    pageTitle: "Some  page",
    welcome: "Welcome to the world of JS"
  });
});

app.get("/about", (req, res) => {
  res.render("about.hbs", {
    pageTitle: "About page"
  });
});

app.get("/bad", (req, res) => {
  res.send({
    message: "This is bad!"
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
