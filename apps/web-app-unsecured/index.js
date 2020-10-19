const express = require("express");
const { createServer } = require("http");
const morgan = require("morgan");

const {
  NODE_ENV = "development",
  PORT = 7000,
  API_URL,
  SESSION_SECRET,
  VERCEL_GITHUB_REPO,
  VERCEL_GITHUB_ORG,
} = process.env;

const app = express();

app.set("view engine", "ejs");

app.use(morgan("combined"));

let appUrl = `http://localhost:${PORT}`;

if (NODE_ENV === "production") {
  appUrl = `https://${VERCEL_GITHUB_REPO}.${VERCEL_GITHUB_ORG.toLowerCase()}.vercel.app`;

  app.use((req, res, next) => {
    const host = req.headers.host;
    if (!appUrl.includes(host)) {
      return res.status(301).redirect(appUrl);
    }
    return next();
  });
}

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
  console.log(`listening on ${PORT}`);
});
