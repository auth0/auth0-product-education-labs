const {
  ISSUER_BASE_URL,
  ALLOWED_AUDIENCES,
  VERCEL_URL,
  VERCEL_GITHUB_REPO,
  VERCEL_GITHUB_ORG,
  PORT = 5000,
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
console.log(`issuerBaseUrl: ${ISSUER_BASE_URL}`);
console.log(`allowedAudiences: ${ALLOWED_AUDIENCES}`);
console.log("----------------------------------");

module.exports = {
  appUrl,
  checkUrl,
  issuerBaseUrl: ISSUER_BASE_URL,
  allowedAudiences: ALLOWED_AUDIENCES,
  port: PORT,
};
