const express = require("express");
const { createServer } = require("http");
const morgan = require("morgan");
const request = require("request-promise");
const session = require("express-session");
const { auth, requiresAuth } = require("express-openid-connect");
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

app.use(
  session({
    secret: secret,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(
  auth({
    baseURL: appUrl,
    secret: secret,
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
    const expenses = await request(`${API_URL}/reports`, {
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
  console.log(err);
  res.status(err.error.status || 500);
  res.render("error", {
    statusCode: err.error.status || 500,
    errorMessage: err.error.message,
  });
});

createServer(app).listen(port, () => {
  console.log(`listening on ${port}`);
});
