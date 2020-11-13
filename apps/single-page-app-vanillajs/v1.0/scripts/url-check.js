(function () {
  const VERCEL_URL = process.env.VERCEL_URL;
  const VERCEL_GITHUB_ORG = process.env.VERCEL_GITHUB_ORG;
  const VERCEL_GITHUB_REPO = process.env.VERCEL_GITHUB_REPO;

  if (VERCEL_URL) {
    const appUrl = `https://${VERCEL_GITHUB_REPO}.${VERCEL_GITHUB_ORG.toLowerCase()}.vercel.app`;

    if (!appUrl.includes(window.location.host)) {
      window.location = appUrl;
    }
  }
})();
