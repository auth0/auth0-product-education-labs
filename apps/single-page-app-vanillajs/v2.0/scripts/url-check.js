(function (window) {
  const VERCEL_URL = process.env.VERCEL_URL;
  const VERCEL_GITHUB_ORG = process.env.VERCEL_GITHUB_ORG;
  const VERCEL_GITHUB_REPO = process.env.VERCEL_GITHUB_REPO;
  let apiUrl = process.env.API_URL || "http://localhost:5000";
  let appUrl = "http://localhost:8000";

  if (VERCEL_URL) {
    appUrl = `https://${VERCEL_GITHUB_REPO}.${VERCEL_GITHUB_ORG.toLowerCase()}.vercel.app`;
  }

  window.env = {
    appUrl,
    apiUrl,
  };

  if (!appUrl.includes(window.location.host)) {
    window.location = appUrl;
  }
})(window);
