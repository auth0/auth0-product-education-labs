const {
  ISSUER_BASE_URL,
  ALLOWED_AUDIENCES,
  NODE_ENV = "development",
  VERCEL_URL,
  VERCEL_GITHUB_REPO,
  VERCEL_GITHUB_ORG,
  PORT = 5000,
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
  allowedAudiences: ALLOWED_AUDIENCES,
  port: PORT,
};
