const express = require("express");
const cors = require("cors");
const { createServer } = require("http");

const app = express();

app.use(cors());

const expenses = [
  {
    date: new Date(),
    description: "Pizza for a Coding Dojo session.",
    value: 102,
  },
  {
    date: new Date(),
    description: "Coffee for a Coding Dojo session.",
    value: 42,
  },
];

/****************************
 * This method is here to allow a
 * successful response on root requests.
 * This stops content security policy
 * from preventing the user to make
 * requests via the browsers console.
 ****************************/
app.get("/", (req, res) => {
  res.status(200).end("OK");
});
/****************************/

app.get("/total", (req, res) => {
  const total = expenses.reduce((accum, expense) => accum + expense.value, 0);
  res.send({ total, count: expenses.length });
});

app.get("/reports", (req, res) => {
  res.send(expesnes);
});

const port = process.env.PORT || 5000;

createServer(app).listen(port, () => {
  console.log(`listening on ${port}`);
});
