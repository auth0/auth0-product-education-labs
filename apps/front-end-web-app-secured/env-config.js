const {
  ISSUER_BASE_URL,
  API_URL,
  CLIENT_ID,
  SESSION_SECRET = "e6de1374433dde92a5bae567b56b01de32ad0d4f0115b7675f5b985720210f4c",
  VERCEL_URL,
  VERCEL_GITHUB_REPO,
  VERCEL_GITHUB_ORG,
  PORT = 7000,
} = process.env;

const appUrl = VERCEL_URL
  ? `https://${VERCEL_GITHUB_REPO}.${VERCEL_GITHUB_ORG.toLowerCase()}.vercel.app`
  : `http://localhost:${PORT}`;

function checkUrl() {
  return (req, res, next) => {
    const host = req.headers.host;
    if (!appUrl.includes(host)) {
      return res.status(301).redirect(appUrl);
    }
    return next();
  };
}

console.log("----------------------------------");
console.log(`appUrl: ${appUrl}`);
console.log(`apiUrl: ${API_URL}`);
console.log(`issuerBaseUrl: ${ISSUER_BASE_URL}`);
console.log(`clientId: ${CLIENT_ID}`);
console.log(`secret: ${SESSION_SECRET}`);
console.log("----------------------------------");

module.exports = {
  appUrl,
  apiUrl: API_URL,
  checkUrl,
  issuerBaseUrl: ISSUER_BASE_URL,
  clientId: CLIENT_ID,
  secret: SESSION_SECRET,
  port: PORT,
};
