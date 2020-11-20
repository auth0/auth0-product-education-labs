![Auth0 Open Source Software](https://cdn.auth0.com/resources/oss-source-large-2x.png)

# Expenses API Express - The Expenses API is a simple api that is intended to be used as a starting point for hands on labs.

## Environment Variables

| Variable           | Value                                | Config           | Vercel Only | Default |
| ------------------ | ------------------------------------ | ---------------- | ----------- | ------- |
| ISSUER_BASE_URL    | https://your-tenant.region.auth0.com | issuerBaseUrl    | ❌          | ❌      |
| ALLOWED_AUDIENCES  | **https://expenses-api**             | allowedAudiences | ❌          | ✅      |
| VERCEL_URL         | value supplied by Vercel             |                  | ✅          | ✅      |
| VERCEL_GITHUB_REPO | value supplied by Vercel             |                  | ✅          | ✅      |
| VERCEL_GITHUB_ORG  | value supplied by Vercel             |                  | ✅          | ✅      |
| PORT               | **5000**                             | port             | ❌          | ✅      |

### Notes

- [Vercel Deployment URLs](../../README.md#vercel-deployment-urls)
- [URLs in Environment Variables](../../README.md#vercel-environment-variable-urls)

## Version 2.0

This version of the expense api reflects the midpoint for the state of the api in the A0FUN-M06-L01 Working with APIs lab.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fauth0%2Fauth0-product-education-labs%2Ftree%2Fmaster%2Fapis%2Fexpenses-api-express%2Fv2.0&env=ISSUER_BASE_URL,ALLOWED_AUDIENCES,VERCEL_URL,VERCEL_GITHUB_REPO,VERCEL_GITHUB_ORG&project-name=expenses-api&repository-name=expenses-api)

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
