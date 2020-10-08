# Auth0 Product Education Labs

## Tools

### Initial Deploy

The initial deploy tool is intended to be used as a test deployment between GitHub and Vercel.

### Required Environment Variables

No environment variables are needed for initial deploy.

#### Run Local:

```bash
npm run initial-deploy:start
```

#### Vercel Deploy:

```
https://vercel.com/new/git/external
  ?repository-url=https%3A%2F%2Fgithub.com%2Fauth0%2Fauth0-product-education-labs%2Ftree%2Fmaster%2Ftools%2Finitial-deploy
  &project-name=initial-deploy
  &repository-name=initial-deploy
```

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fauth0%2Fauth0-product-education-labs%2Ftree%2Fmaster%2Ftools%2Finitial-deploy&project-name=initial-deploy&repository-name=initial-deploy)

## APIs

## Expenses API - Secured

The Expenses API is a simple api that is secured using the express-oauth2-bearer module.

### Required Environment Variables

| Variable          | Value                                | Default |
| ----------------- | ------------------------------------ | ------- |
| ISSUER_BASE_URL   | https://your-tenant.region.auth0.com | ❌      |
| ALLOWED_AUDIENCES | **https://expenses-api**             | ✅      |
| PORT              | **5000**                             | ✅      |

#### Run Local:

```bash
ISSUER_BASE_URL=https://your-tenant.region.auth0.com \
npm run expenses-api:secure:start
```

#### Vercel Deploy:

```
https://vercel.com/new/git/external
  ?repository-url=https%3A%2F%2Fgithub.com%2Fauth0%2Fauth0-product-education-labs%2Ftree%2Fmaster%2Fapis%2Fexpenses-api-secured
  &env=
    ISSUER_BASE_URL,
    VERCEL_URL,
    ALLOWED_AUDIENCES=https://expenses-api
  &project-name=expenses-api
  &repository-name=expenses-api
```

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fauth0%2Fauth0-product-education-labs%2Ftree%2Fmaster%2Fapis%2Fexpenses-api-secured&env=ISSUER_BASE_URL,ALLOWED_AUDIENCES=https://expenses-api,VERCEL_URL&project-name=expenses-api&repository-name=expenses-api)
