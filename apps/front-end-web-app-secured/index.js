const express = require("express");
const { createServer } = require("http");
const morgan = require("morgan");
const request = require("request-promise");
const session = require("express-session");
const { auth, requiresAuth } = require("express-openid-connect");

const {
  NODE_ENV = "development",
  PORT = 7000,
  API_URL,
  SESSION_SECRET,
  VERCEL_GITHUB_REPO,
  VERCEL_GITHUB_ORG,
} = process.env;

let appUrl = `http://localhost:${PORT}`;

if (NODE_ENV === "production") {
  appUrl = `https://${VERCEL_GITHUB_REPO}.${VERCEL_GITHUB_ORG.toLowerCase()}.vercel.app`;
}

const app = express();

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
    baseURL: appUrl,
    secret: SESSION_SECRET,
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
  console.log(`listening on ${PORT}`);
});
