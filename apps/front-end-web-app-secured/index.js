const express = require("express");
const { createServer } = require("http");
const morgan = require("morgan");
const request = require("request-promise");
const session = require("express-session");
const { auth, requiresAuth } = require("express-openid-connect");

const port = process.env.PORT || 7000;
const apiUrl = process.env.API_URL;
let appUrl = `http://localhost:${port}`;

if (process.env && process.env.NODE_ENV === "production") {
  const projectName = process.env.VERCEL_GITHUB_REPO;
  appUrl = `https://${projectName}.vercel.app`;
}

const app = express();

app.set("view engine", "ejs");

app.use(morgan("combined"));

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(
  auth({
    baseURL: appUrl,
    authRequired: false,
    auth0Logout: true,
  })
);

app.get("/", (req, res) => {
  res.render("home", { user: req.oidc && req.oidc.user });
});

app.get("/user", requiresAuth(), (req, res) => {
  res.render("user", { user: req.oidc && req.oidc.user });
});

app.get("/expenses", requiresAuth(), async (req, res, next) => {
  try {
    const expenses = await request(`${apiUrl}/reports`, {
      json: true,
    });

    res.render("expenses", {
      user: req.oidc && req.oidc.user,
      expenses,
    });
  } catch (err) {
    next(err);
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(err);
});

createServer(app).listen(port, () => {
  console.log(`listening on ${port}`);
});
