
const express = require("express");
const app = express();
const data = require("./data.js");
const path = require("path");
const mustacheExpress = require("mustache-express");

app.engine("mustache", mustacheExpress());
app.set("views", ".");
app.set("view engine", "mustache");

app.use("/css", express.static("public"));
app.listen(3000, function(){
  console.log("Successfully started express application.")
});

app.get("/", function(req, res){
  res.render("index", data);
});

app.get("/users/:id", function(req, res){
  let id = req.params.id;
  let user = data.users[id];
  res.render("user", user)
});
