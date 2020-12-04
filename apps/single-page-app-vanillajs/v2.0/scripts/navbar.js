(async function ({ appUrl }) {
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
})(window.env);
