const express = require("express");
const { createServer } = require("http");
const morgan = require("morgan");
const {
  checkUrl,
  APP_URL, // Public URL for this app
  ISSUER_BASE_URL, // Auth0 Tenant Url
  CLIENT_ID, // Auth0 Web App Client
  SESSION_SECRET, // Cookie Encryption Key
  PORT,
} = require("./env-config");

const app = express();

// Used to normalize URL in Vercel
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

createServer(app).listen(PORT, () => {
  console.log(`WEB APP: ${APP_URL}`);
});
