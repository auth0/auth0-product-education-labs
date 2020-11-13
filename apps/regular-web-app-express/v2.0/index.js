const express = require("express");
const { createServer } = require("http");
const morgan = require("morgan");
const request = require("request-promise");
const session = require("express-session");
const { auth, requiresAuth } = require("express-openid-connect");
const {
  checkUrl,
  APP_URL, // Public URL for this app
  API_URL, // URL for Expenses API
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

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(
  auth({
    issuerBaseURL: ISSUER_BASE_URL, // may be ommited
    baseURL: APP_URL,
    clientID: CLIENT_ID, // may be ommited
    secret: SESSION_SECRET, // may be ommited
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

createServer(app).listen(PORT, () => {
  console.log(`WEB APP: ${APP_URL}`);
});
