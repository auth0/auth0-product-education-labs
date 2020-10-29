const express = require("express");
const { createServer } = require("http");
const morgan = require("morgan");
const {
  appUrl,
  apiUrl,
  checkUrl,
  issuerBaseUrl,
  clientId,
  secret,
  port,
} = require("./env-config");

const app = express();

app.use(checkUrl());

app.set("view engine", "ejs");

app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.render("home", { user: req.openid && req.openid.user });
});

app.get("/expenses", (req, res) => {
  res.render("expenses", {
    expenses: [
      {
        date: new Date(),
        description: "Coffee for a Coding Dojo session.",
        value: 42,
      },
    ],
  });
});

createServer(app).listen(port, () => {
  console.log(`listening on ${port}`);
});
