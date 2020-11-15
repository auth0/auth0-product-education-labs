# Regular Web Application

The Regular Web App is a simple express application that is intended to be used as a starting point for hands on labs.

## Environment Variables

| Variable           | Value                                | Config        | Vercel Only | Default |
| ------------------ | ------------------------------------ | ------------- | ----------- | ------- |
| ISSUER_BASE_URL    | https://your-tenant.region.auth0.com | issuerBaseUrl | ❌          | ❌      |
| API_URL            | url for expenses api                 | apiUrl        | ❌          | ❌      |
| CLIENT_ID          | application client id from Auth0     | clientId      | ❌          | ❌      |
| CLIENT_SECRET      | application client secret from Auth0 | clientSecret  | ❌          | ❌      |
| VERCEL_URL         | value supplied by Vercel             |               | ✅          | ✅      |
| VERCEL_GITHUB_REPO | value supplied by Vercel             |               | ✅          | ✅      |
| VERCEL_GITHUB_ORG  | value supplied by Vercel             |               | ✅          | ✅      |
| PORT               | **7000**                             | port          | ❌          | ✅      |

### Notes

- [Vercel Deployment URLs](../../README.md#vercel-deployment-urls)
- [URLs in Environment Variables](../../README.md#vercel-environment-variable-urls)
- **API_URL** will need to be a publically accessable url when deploying to Vercel.

## Version 1.0

This version of the regular web app is the starting place used in A0FUN-M02-L01 Create an Application.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fauth0%2Fauth0-product-education-labs%2Ftree%2Fmaster%2Fapps%2Fregular-web-app-express%2Fv1.0&env=ISSUER_BASE_URL,CLIENT_ID,VERCEL_URL,VERCEL_GITHUB_REPO,VERCEL_GITHUB_ORG&project-name=web-app&repository-name=web-app)

### Run Local:

```bash
ISSUER_BASE_URL=https://your-tenant.region.auth0.com \
CLIENT_ID=your-app-client-id  \
npm run web-app:start
```

### Changes

#### Step 1

Add the following require statement to the top of the index.js file to get the `auth` middlware from the express openid connect node module.

```javascript
const { auth } = require("express-openid-connect");
```

Add the following middleware use statement to the location specificed in the index.js file.

```javascript
app.use(
  auth({
    secret: SESSION_SECRET,
    auth0Logout: true,
    baseURL: APP_URL,
  })
);
```

Save the file and load the application in browser.
Note that you are sent to Auth0 immediately with out seeing the index page.

#### Step 2

Update the `auth` middleware configuration to add `authRequired: false`.

```javascript
app.use(
  auth({
    secret: SESSION_SECRET,
    authRequired: false, // 👈 added config value
    auth0Logout: true,
    baseURL: APP_URL,
  })
);
```

This will cause the middlware to allow requests through to the defined routes. Meaning, we need to explicitly mark each private route as requiring authentication.

Update the require statement at the top of the index.js file to get the `requiresAuth` middleware.

```javascript
//  👇 added
const { auth, requiresAuth } = require("express-openid-connect");
```

Locate both the `/expenses` and `/user` routes and add the `requiresAuth` middlware directly to the routes.

```javascript
app.get("/user", requiresAuth(), (req, res) => {
  ...
});
```

```javascript
app.get("/expenses", requiresAuth(), async (req, res, next) => {
  ...
});
```

## Version 2.0

This version of the regular web app is the starting place used in A0FUN-M02-L01 Create an Application.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fauth0%2Fauth0-product-education-labs%2Ftree%2Fmaster%2Fapps%2Fregular-web-app-express%2Fv2.0&env=ISSUER_BASE_URL,CLIENT_ID,VERCEL_URL,VERCEL_GITHUB_REPO,VERCEL_GITHUB_ORG&project-name=web-app&repository-name=web-app)

### Run Local:

```bash
ISSUER_BASE_URL=https://your-tenant.region.auth0.com \
CLIENT_ID=your-app-client-id  \
API_URL=http://localhost:5000 \
npm run web-app:v2:start
```

### Changes

#### Step 1
