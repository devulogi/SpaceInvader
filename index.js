const express = require("express");
const favicon = require("serve-favicon");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(function (req, res) {
  res.status(200).render("index");
});

app.listen(process.env.PORT);
