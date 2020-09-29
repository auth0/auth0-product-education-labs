const express = require("express");
const http = require("http");
const { auth, requiredScopes } = require("express-oauth2-bearer");

const app = express();

/*
 * This method is here to allow a
 * successful response on root requests.
 * This stops content security policy
 * from preventing the user to make
 * requests via the browsers console.
 */
app.get("/", (req, res) => {
  res.status(200).end();
});
// **************************

app.use(auth());

app.get("/reports", requiredScopes("read:reports"), (req, res) => {
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
