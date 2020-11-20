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

## Version 4.0

This version of the regular web app is the starting place used in IDFUN-M02-L02 Create an Working with APIs.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fauth0%2Fauth0-product-education-labs%2Ftree%2Fmaster%2Fapps%2Fregular-web-app-express%2Fv4.0&env=ISSUER_BASE_URL,CLIENT_ID,CLIENT_SECRET,API_URL,VERCEL_URL,VERCEL_GITHUB_REPO,VERCEL_GITHUB_ORG&project-name=web-app&repository-name=web-app)

### Run Local:

```bash
ISSUER_BASE_URL=https://your-tenant.region.auth0.com \
CLIENT_ID=your-app-client-id  \
CLIENT_SECRET=your-app-client-secret \
API_URL=http://localhost:5000 \
npm run web-app:v4:start
```

### Changes

#### Step 1

Update the auth middleware configuration object to include the code response type and the expenses api audience.

```javascript
app.use(
  auth({
    secret: SESSION_SECRET,
    authRequired: false,
    auth0Logout: true,
    baseURL: APP_URL,
    authorizationParams: {
      response_type: "code id_token",
      audience: "https://expenses-api",
      // 👇 add this 👇
      scope: "openid profile email read:reports",
      // 👆 add this 👆
    },
  })
);
```
