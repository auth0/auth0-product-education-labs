(async function () {
  const NODE_ENV = process.env.NODE_ENV;
  const VERCEL_GITHUB_ORG = process.env.VERCEL_GITHUB_ORG;
  const VERCEL_GITHUB_REPO = process.env.VERCEL_GITHUB_REPO;
  let appUrl = "http://localhost:5000";

  if (NODE_ENV === "production") {
    appUrl = `https://${VERCEL_GITHUB_REPO}.${VERCEL_GITHUB_ORG.toLowerCase()}.vercel.app`;
  }

  const expensesLink = document.getElementById("expenses-link");
  const profilePicture = document.getElementById("profile-picture");
  const userFullname = document.getElementById("user-fullname");
  const logInButton = document.getElementById("log-in");
  const logOutButton = document.getElementById("log-out");

  logInButton.onclick = async () => {
    await window.auth0Client.loginWithRedirect({
      redirect_uri: `${appUrl}/#callback`,
    });
  };

  logOutButton.onclick = () => {
    window.auth0Client.logout({
      returnTo: appUrl,
    });
  };

  const isAuthenticated = await window.auth0Client.isAuthenticated();
  if (isAuthenticated) {
    const user = await auth0Client.getUser();
    profilePicture.src = user.picture;
    userFullname.innerText = user.name;

    logOutButton.style.display = "inline-block";
  } else {
    logInButton.style.display = "inline-block";
  }
})();
