(function () {
  const { NODE_ENV, VERCEL_GITHUB_REPO, VERCEL_GITHUB_ORG } = process.env;

  if (NODE_ENV === "production") {
    const appUrl = `https://${VERCEL_GITHUB_REPO}.${VERCEL_GITHUB_ORG.toLowerCase()}.vercel.app`;

    if (!appUrl.includes(window.location.host)) {
      window.location = appUrl;
    }
  }
})();
