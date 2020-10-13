const express = require("express");
const { createServer } = require("http");
const morgan = require("morgan");

const app = express();

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

const port = process.env.PORT || 7000;

createServer(app).listen(port, () => {
  console.log(`listening on ${port}`);
});
