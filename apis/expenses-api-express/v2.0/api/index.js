const express = require("express");
const cors = require("cors");
const { createServer } = require("http");
const { auth } = require("express-oauth2-jwt-bearer");
const {
  checkUrl,
  APP_URL, // Public URL for this app
  ISSUER_BASE_URL, // Auth0 Tenant Url
  AUDIENCE, // Auth0 API Audience List
  PORT,
} = require("./env-config");

const app = express();

// Used to normalize URL in Vercel
app.use(checkUrl());

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

// 👆 public routes above 👆
app.use(auth());
// 👇 private routes below 👇

app.get("/reports", (req, res) => {
  res.send(expenses);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    status: err.status,
    message: err.message,
  });
});

createServer(app).listen(PORT, () => {
  console.log(`API: ${APP_URL}`);
});
