# Expenses API Express

The Expenses API is a simple API that is intended to be used as a starting point for hands on labs.

## Environment Variables

| Variable              | Value                                | Config           | Vercel Only | Default |
| --------------------- | ------------------------------------ | ---------------- | ----------- | ------- |
| ISSUER_BASE_URL       | https://your-tenant.region.auth0.com | issuerBaseUrl    | ❌          | ❌      |
| ALLOWED_AUDIENCES     | **https://expenses-api**             | allowedAudiences | ❌          | ✅      |
| VERCEL_URL            | value supplied by Vercel             |                  | ✅          | ✅      |
| VERCEL_GITHUB_REPO    | value supplied by Vercel             |                  | ✅          | ✅      |
| VERCEL_GITHUB_ORG     | value supplied by Vercel             |                  | ✅          | ✅      |
| VERCEL_GIT_COMMIT_REF | value supplied by Vercel             |                  | ✅          | ✅      |
| PORT                  | **5000**                             | port             | ❌          | ✅      |

### Notes

- [Vercel Deployment URLs](https://github.com/auth0/auth0-product-education-labs/blob/main/README.md#vercel-deployment-urls)
- [URLs in Environment Variables](https://github.com/auth0/auth0-product-education-labs/blob/main/README.md#vercel-environment-variable-urls)

## Version 1.0

This version of the expense api is the starting place used in A0FUN-M06-L01 Working with APIs.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fauth0%2Fauth0-product-education-labs%2Ftree%2Fmain%2Fapis%2Fexpenses-api-express%2Fv1.0&env=ISSUER_BASE_URL,ALLOWED_AUDIENCES,VERCEL_URL,VERCEL_GITHUB_REPO,VERCEL_GITHUB_ORG,VERCEL_GIT_COMMIT_REF&project-name=expenses-api&repository-name=expenses-api)

### Run Local:

```bash
ISSUER_BASE_URL=https://your-tenant.region.auth0.com \
npm run expenses-api:start
```

### Required Scopes

| Endpoint   | Secure | Scopes |
| ---------- | ------ | ------ |
| `/`        | ❌     |        |
| `/total`   | ❌     |        |
| `/reports` | ❌     |        |

### Changes

#### Step 1

Add the following require statement to the top of the index.js file to get the `auth` middlware from the express-oauth2-bearer node module.

```javascript
const { auth } = require("express-oauth2-bearer");
```

Add the following middleware use statement to the location specificed in the index.js file.

```javascript
// 👆 public routes above 👆
app.use(auth());
// 👇 private routes below 👇
```

## Version 2.0

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fauth0%2Fauth0-product-education-labs%2Ftree%2Fmain%2Fapis%2Fexpenses-api-express%2Fv2.0&env=ISSUER_BASE_URL,ALLOWED_AUDIENCES,VERCEL_URL,VERCEL_GITHUB_REPO,VERCEL_GITHUB_ORG,VERCEL_GIT_COMMIT_REF&project-name=expenses-api&repository-name=expenses-api)

### Run Local:

```bash
ISSUER_BASE_URL=https://your-tenant.region.auth0.com \
npm run expenses-api:v2:start
```

### Required Scopes

| Endpoint   | Secure | Scopes |
| ---------- | ------ | ------ |
| `/`        | ❌     |        |
| `/total`   | ❌     |        |
| `/reports` | ✅     |        |

## Version 3.0

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fauth0%2Fauth0-product-education-labs%2Ftree%2Fmain%2Fapis%2Fexpenses-api-express%2Fv3.0&env=ISSUER_BASE_URL,ALLOWED_AUDIENCES,VERCEL_URL,VERCEL_GITHUB_REPO,VERCEL_GITHUB_ORG,VERCEL_GIT_COMMIT_REF&project-name=expenses-api&repository-name=expenses-api)

### Run Local:

```bash
ISSUER_BASE_URL=https://your-tenant.region.auth0.com \
npm run expenses-api:v3:start
```

### Required Scopes

| Endpoint   | Secure | Scopes         |
| ---------- | ------ | -------------- |
| `/`        | ❌     |                |
| `/total`   | ❌     |                |
| `/reports` | ✅     | `read:reports` |
