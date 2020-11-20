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

## Version 3.0

This version of the regular web app is the starting place used in A0FUN-M06-L01 Create an Working with APIs.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fauth0%2Fauth0-product-education-labs%2Ftree%2Fmaster%2Fapps%2Fregular-web-app-express%2Fv3.0&env=ISSUER_BASE_URL,CLIENT_ID,API_URL,VERCEL_URL,VERCEL_GITHUB_REPO,VERCEL_GITHUB_ORG&project-name=web-app&repository-name=web-app)

### Run Local:

```bash
ISSUER_BASE_URL=https://your-tenant.region.auth0.com \
CLIENT_ID=your-app-client-id  \
CLIENT_SECRET=your-app-client-secret \
API_URL=http://localhost:5000 \
npm run web-app:v3:start
```

### Changes

#### Step 1

Add the CLIENT_SECRET environment variable to the Vercel project manually if needed.

Update the auth middleware configuration object to include the code response type and the expenses api audience.

```javascript
app.use(
  auth({
    secret: SESSION_SECRET,
    authRequired: false,
    auth0Logout: true,
    baseURL: APP_URL,
    // 👇 add this 👇
    authorizationParams: {
      response_type: "code",
      audience: "https://expenses-api",
    },
    // 👆 add this 👆
  })
);
```

Update the expenses route handler to use the access token to authroize the api request.

```javascript
app.get("/expenses", requiresAuth(), async (req, res, next) => {
  try {
    // 👇 get the token from the request 👇
    const { token_type, access_token } = req.oidc.accessToken;
    // 👇 then send it as an authorization header 👇
    const expenses = await axios.get(`${API_URL}/reports`, {
      headers: {
        Authorization: `${token_type} ${access_token}`,
      },
    });
    // 👆 end of changes 👆
    res.render("expenses", {
      user: req.oidc && req.oidc.user,
      expenses: expenses.data,
    });
  } catch (err) {
    next(err);
  }
});
```
