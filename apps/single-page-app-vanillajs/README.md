# Single Page App Vanilla JS

The Single Page App is intended to be used as a starting place as a starting point for hands on labs.

## Environment Variables

| Variable           | Value                            | Vercel Only | Default |
| ------------------ | -------------------------------- | ----------- | ------- |
| AUTH0_DOMAIN       | your-tenant.region.auth0.com     | ❌          | ❌      |
| CLIENT_ID          | application client id from Auth0 | ❌          | ❌      |
| API_URL            | url for expenses api             | ❌          | ❌      |
| VERCEL_URL         | value supplied by Vercel         | ✅          | ✅      |
| VERCEL_GITHUB_REPO | value supplied by Vercel         | ✅          | ✅      |
| VERCEL_GITHUB_ORG  | value supplied by Vercel         | ✅          | ✅      |
| PORT               | **8000**                         | ❌          | ✅      |

### Notes

- [Vercel Deployment URLs](#vercel-deployment-urls)
- [URLs in Environment Variables](#vercel-environment-variable-urls)
- **API_URL** will need to be a publically accessable url when deploying to Vercel.

## Version 1.0

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fauth0%2Fauth0-product-education-labs%2Ftree%2Fmaster%2Fapps%2Fsingle-page-app-vanillajs%2Fv1.0&env=AUTH0_DOMAIN,CLIENT_ID,API_URL,VERCEL_URL,VERCEL_GITHUB_REPO,VERCEL_GITHUB_ORG&project-name=single-page-app&repository-name=single-page-app)

### Run Local:

```bash
AUTH0_DOMAIN=your-tenant.region.auth0.com \
CLIENT_ID=your-app-client-id  \
API_URL=http://url-to-expenses-api
npm run spa:start
```

### Changes

Replace the comment in `index.html` with the follwing script reference.

```html
<script src="https://cdn.auth0.com/js/auth0-spa-js/1.13.5/auth0-spa-js.production.js"></script>
```

Replace the comment in `app.js` with the following code.

```javascript
const domain = window.env.AUTH0_DOMAIN;
const client_id = window.env.CLIENT_ID;
const redirect_uri = window.env.APP_URL;

window.auth0Client = await createAuth0Client({
  domain,
  client_id,
  redirect_uri,
});
```

Replace the first comment in `router.js` with the following code.

```javascript
if (new URLSearchParams(window.location.search).has("code")) {
  await window.auth0Client.handleRedirectCallback();
  window.history.replaceState({}, document.title, "/");
}
```

Replace the second comment in `router.js` with the following code.

```javascript
if (await window.auth0Client.isAuthenticated())
  window.user = await window.auth0Client.getUser();
```

Replace the first comment in `Navbar.js` with the following.

```javascript
const isAuthenticated = await window.auth0Client.isAuthenticated();
```

Replace the second comment in the `Navbar.js` with the following.

```javascript
await window.auth0Client.loginWithRedirect();
```

Replace the third comment in the `Navbar.js` with the following.

```javascript
window.auth0Client.logout({
  returnTo: window.env.APP_URL,
});
```

Replace the comment in `Expenses.js` with the following.

```javascript
allowAccess: async () => window.auth0Client.isAuthenticated(),
```

Add the following line to the client creation in `app.js`.

```javascript
window.auth0Client = await createAuth0Client({
  domain,
  client_id,
  redirect_uri,
  cacheLocation: "localstorage", // 👈 Added
});
```

## Version 2.0

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fauth0%2Fauth0-product-education-labs%2Ftree%2Fmaster%2Fapps%2Fsingle-page-app-vanillajs%2Fv2.0&env=AUTH0_DOMAIN,CLIENT_ID,API_URL,VERCEL_URL,VERCEL_GITHUB_REPO,VERCEL_GITHUB_ORG&project-name=single-page-app&repository-name=single-page-app)

### Run Local:

```bash
AUTH0_DOMAIN=your-tenant.region.auth0.com \
CLIENT_ID=your-app-client-id  \
API_URL=http://url-to-expenses-api
npm run spa:v2:start
```

### Changes

Add the following api options to `app.js` after the environment variables.

```javascript
window.auth0Client = await createAuth0Client({
  domain,
  client_id,
  redirect_uri,
  cacheLocation: "localstorage",
  audience: "https://expenses-api", // 👈 Added
  scope: "read:reports", // 👈 Added
});
```

Update the getReports function in `services/expensesApi.js` with the following.

```javascript
const token = await window.auth0Client.getTokenSilently();
const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
};

const res = await fetch(`${window.env.API_URL}/reports`, options);
const json = await res.json();
return json;
```
