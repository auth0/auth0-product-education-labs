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

#### Step 1

Replace the comment in `index.html` with the follwing script reference.

```html
<script src="https://cdn.auth0.com/js/auth0-spa-js/1.1.0/auth0-spa-js.production.js"></script>
```

Replace the comment in `app.js` with the following code.

```javascript
const domain = process.env.AUTH0_DOMAIN;
const client_id = process.env.CLIENT_ID;

window.auth0Client = await createAuth0Client({
  domain,
  client_id,
});
```

Replace next comment in `app.js` with the following code.
