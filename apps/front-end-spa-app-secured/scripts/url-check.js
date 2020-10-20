(function () {
  const NODE_ENV = process.env.NODE_ENV;
  const VERCEL_GITHUB_ORG = process.env.VERCEL_GITHUB_ORG;
  const VERCEL_GITHUB_REPO = process.env.VERCEL_GITHUB_REPO;

  if (NODE_ENV === "production") {
    const appUrl = `https://${VERCEL_GITHUB_REPO}.${VERCEL_GITHUB_ORG.toLowerCase()}.vercel.app`;

    if (!appUrl.includes(window.location.host)) {
      window.location = appUrl;
    }
  }
})();
