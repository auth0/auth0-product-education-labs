const {
  ISSUER_BASE_URL,
  CLIENT_ID,
  SESSION_SECRET,
  NODE_ENV = "development",
  VERCEL_URL,
  VERCEL_GITHUB_REPO,
  VERCEL_GITHUB_ORG,
  PORT = 7000,
} = process.env;

const appUrl =
  NODE_ENV === "production"
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

module.exports = {
  appUrl,
  checkUrl,
  issuerBaseUrl: ISSUER_BASE_URL,
  clientId: CLIENT_ID,
  secret: SESSION_SECRET,
  port: PORT,
};
