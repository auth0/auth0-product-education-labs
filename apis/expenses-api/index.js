const express = require("express");
const http = require("http");
const { auth, requiredScopes } = require("express-oauth2-bearer");

const app = express();

app.use(auth());

app.get("/", requiredScopes("read:reports"), (req, res) => {
  console.log(new Date(req.auth.claims.iat * 1000));
  res.send([
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
  ]);
});

http.createServer(app).listen(5000, () => {
  console.log(`listening on 5000`);
});
