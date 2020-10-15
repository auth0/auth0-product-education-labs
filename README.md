![Auth0 Open Source Software](https://cdn.auth0.com/resources/oss-source-large-2x.png)

# Auth0 Product Education Labs

A set of tools and example applications for Product Education courses.

## Index

1. [Apps](#apps)

   - [Web App - Unsecured](#web-app---unsecured)
   - [Front End Web App - Secured](#front-end-web-app---secured)
   - [Front End SPA App - Unsecured](#front-end-spa-app---unsecured)

1. [APIs](#apis)

   - [Expenses API - Secured](#expenses-api---secured)
   - [Expenses API - Unsecured](#expenses-api---unsecured)

1. [Tools](#tools)

   - [Initial Deploy](#initial-deploy)

1. [Execution Environment](#execution-environment)
1. [Issue Reporting](#issue-reporting)
1. [Contributing](#contributing)
1. [Author](#author)
1. [License](#license)

## Apps

### Web App - Unsecured

The Unsecured Web App is a simple express application that is intended to be used as a starting point for hands on labs.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fauth0%2Fauth0-product-education-labs%2Ftree%2Fmaster%2Fapps%2Fweb-app-unsecured&env=ISSUER_BASE_URL,CLIENT_ID,APP_SESSION_SECRET,NODE_ENV,VERCEL_URL,VERCEL_GITHUB_REPO,VERCEL_GITHUB_ORG&project-name=web-app-unsecured&repository-name=web-app-unsecured)

#### Environment Variables

| Variable           | Value                                | Vercel Only | Default |
| ------------------ | ------------------------------------ | ----------- | ------- |
| ISSUER_BASE_URL    | https://your-tenant.region.auth0.com | ❌          | ❌      |
| CLIENT_ID          | application client id from Auth0     | ❌          | ❌      |
| APP_SESSION_SECRET | openssl rand -hex 32                 | ❌          | ✅      |
| NODE_ENV           | production                           | ✅          | ❌      |
| VERCEL_URL         | value supplied by Vercel             | ✅          | ✅      |
| VERCEL_GITHUB_REPO | value supplied by Vercel             | ✅          | ✅      |
| VERCEL_GITHUB_ORG  | value supplied by Vercel             | ✅          | ✅      |
| PORT               | **7000**                             | ❌          | ✅      |

#### Run Local:

```bash
ISSUER_BASE_URL=https://your-tenant.region.auth0.com \
CLIENT_ID=your-app-client-id  \
npm run web-app:start
```

### Front End Web App - Secured

The Secured Front End Web App is a simple express application that is intended to be used as a starting point for hands on labs.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fauth0%2Fauth0-product-education-labs%2Ftree%2Fmaster%2Fapps%2Ffront-end-web-app-secured&env=ISSUER_BASE_URL,CLIENT_ID,SESSION_SECRET,API_URL,NODE_ENV,VERCEL_URL,VERCEL_GITHUB_REPO,VERCEL_GITHUB_ORG&project-name=front-end-web-app-secured&repository-name=front-end-web-app-secured)

#### Environment Variables

| Variable           | Value                                | Vercel Only | Default |
| ------------------ | ------------------------------------ | ----------- | ------- |
| ISSUER_BASE_URL    | https://your-tenant.region.auth0.com | ❌          | ❌      |
| CLIENT_ID          | application client id from Auth0     | ❌          | ❌      |
| SESSION_SECRET     | openssl rand -hex 32                 | ❌          | ✅      |
| API_URL            | url for expenses api                 | ❌          | ❌      |
| NODE_ENV           | production                           | ✅          | ❌      |
| VERCEL_URL         | value supplied by Vercel             | ✅          | ✅      |
| VERCEL_GITHUB_REPO | value supplied by Vercel             | ✅          | ✅      |
| VERCEL_GITHUB_ORG  | value supplied by Vercel             | ✅          | ✅      |
| PORT               | **7000**                             | ❌          | ✅      |

#### Run Local:

```bash
ISSUER_BASE_URL=https://your-tenant.region.auth0.com \
CLIENT_ID=your-app-client-id  \
API_URL=http://url-to-expenses-api \
npm run front-end-web-app:secure:start
```

### Front End SPA App - Unsecured

The Web SPA Application is intended to be used as a starting place for the learner to implement OIDC based Web Sign-In in a single page application.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fauth0%2Fauth0-product-education-labs%2Ftree%2Fmaster%2Fapps%2Ffront-end-spa-app-unsecured&env=AUTH0_DOMAIN,CLIENT_ID,API_URL,NODE_ENV,VERCEL_URL,VERCEL_GITHUB_REPO,VERCEL_GITHUB_ORG&project-name=front-end-spa-app-unsecured&repository-name=front-end-spa-app-unsecured)

#### Environment Variables

| Variable           | Value                                | Vercel Only | Default |
| ------------------ | ------------------------------------ | ----------- | ------- |
| AUTH0_DOMAIN       | https://your-tenant.region.auth0.com | ❌          | ❌      |
| CLIENT_ID          | application client id from Auth0     | ❌          | ❌      |
| API_URL            | url for expenses api                 | ❌          | ❌      |
| NODE_ENV           | production                           | ✅          | ❌      |
| VERCEL_URL         | value supplied by Vercel             | ✅          | ✅      |
| VERCEL_GITHUB_REPO | value supplied by Vercel             | ✅          | ✅      |
| VERCEL_GITHUB_ORG  | value supplied by Vercel             | ✅          | ✅      |
| PORT               | **8000**                             | ❌          | ✅      |

#### Run Local:

```bash
AUTh0_DOMAIN=https://your-tenant.region.auth0.com \
CLIENT_ID=your-app-client-id  \
API_URL=http://url-to-expenses-api
npm run front-end-spa-app:start
```

## APIs

### Expenses API - Secured

The Expenses API is a simple api that is secured using the [express-oauth2-bearer](https://github.com/auth0/express-oauth2-bearer) module.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fauth0%2Fauth0-product-education-labs%2Ftree%2Fmaster%2Fapis%2Fexpenses-api-secured&env=ISSUER_BASE_URL,ALLOWED_AUDIENCES,NODE_ENV,VERCEL_URL,VERCEL_GITHUB_REPO,VERCEL_GITHUB_ORG&project-name=expenses-api-secured&repository-name=expenses-api-secured)

#### Environment Variables

| Variable           | Value                                | Vercel Only | Default |
| ------------------ | ------------------------------------ | ----------- | ------- |
| ISSUER_BASE_URL    | https://your-tenant.region.auth0.com | ❌          | ❌      |
| ALLOWED_AUDIENCES  | **https://expenses-api**             | ❌          | ✅      |
| NODE_ENV           | production                           | ✅          | ❌      |
| VERCEL_URL         | value supplied by Vercel             | ✅          | ✅      |
| VERCEL_GITHUB_REPO | value supplied by Vercel             | ✅          | ✅      |
| VERCEL_GITHUB_ORG  | value supplied by Vercel             | ✅          | ✅      |
| PORT               | **5000**                             | ❌          | ✅      |

#### Required Scopes

| Endpoint   | Secure | Scopes         |
| ---------- | ------ | -------------- |
| `/`        | ❌     |                |
| `/total`   | ❌     |                |
| `/reports` | ✅     | `read:reports` |

#### Run Local:

```bash
ISSUER_BASE_URL=https://your-tenant.region.auth0.com \
npm run expenses-api:secure:start
```

### Expenses API - Unsecured

The Unsecured Expenses API is a simple api that is intended to be used as a starting point for hands on labs.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fauth0%2Fauth0-product-education-labs%2Ftree%2Fmaster%2Fapis%2Fexpenses-api-unsecured&env=ISSUER_BASE_URL,ALLOWED_AUDIENCES,NODE_ENV,VERCEL_URL,VERCEL_GITHUB_REPO,VERCEL_GITHUB_ORG&project-name=expenses-api-unsecured&repository-name=expenses-api-unsecured)

#### Environment Variables

| Variable           | Value                                | Vercel Only | Default |
| ------------------ | ------------------------------------ | ----------- | ------- |
| ISSUER_BASE_URL    | https://your-tenant.region.auth0.com | ❌          | ❌      |
| ALLOWED_AUDIENCES  | **https://expenses-api**             | ❌          | ✅      |
| NODE_ENV           | production                           | ✅          | ❌      |
| VERCEL_URL         | value supplied by Vercel             | ✅          | ✅      |
| VERCEL_GITHUB_REPO | value supplied by Vercel             | ✅          | ✅      |
| VERCEL_GITHUB_ORG  | value supplied by Vercel             | ✅          | ✅      |
| PORT               | **5000**                             | ❌          | ✅      |

#### Required Scopes

| Endpoint   | Secure | Scopes |
| ---------- | ------ | ------ |
| `/`        | ❌     |        |
| `/total`   | ❌     |        |
| `/reports` | ❌     |        |

#### Run Local:

```bash
ISSUER_BASE_URL=https://your-tenant.region.auth0.com \
npm run expenses-api:start
```

## Tools

### Initial Deploy

The initial deploy tool is intended to be used as a test deployment between GitHub and Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fauth0%2Fauth0-product-education-labs%2Ftree%2Fmaster%2Ftools%2Finitial-deploy&project-name=initial-deploy&repository-name=initial-deploy)

#### Environment Variables

No environment variables are needed for initial deploy.

#### Run Local:

```bash
npm run initial-deploy:start
```

## Execution Environment

The tools and examples in this repository can be run in a number of ways. Each are specific to the task you are trying to accomplish. They are presented here in order or invasiveness to your local machine. For learners, the intention is to use Vercel.

- [Vercel](https://vercel.com) - using a cloud based hosting environment
- GitHub [Codespaces](https://github.com/features/codespaces) - using a cloud based IDE and runtime
- [VS Code Remote Development](https://code.visualstudio.com/docs/remote/remote-overview) - using [Docker Desktop](https://www.docker.com/products/docker-desktop) to isolate development in a local container. This avoids needing to install developer runtimes on your local machine while allowing to you continue working locally.
- Local - using your local development environment

### Running in Vercel

Vercel is a cloud based hosting service. Each individual tool and sample application can be deployed to Vercel by clicking the blue Deploy button.

A wizard dialog will guide you through the deployment process.

### Running in Codespaces

The overall repository and each individual tool or sample includes a devcontainer definition. GitHub Codespaces can utilize it to create a completely web based IDE and execution environment. No installs are needed.

To use, from the GitHub project page:

1. Click the green **Code** button.
1. Click the **Open with Codespaces** menu option.
1. Click the **New codespace** button.

The Codespace will be created and the project will load into the web based VS Code IDE.

**Note:** Once the Codespace is created, you do not need to create it again. Simply select it from the Codespace menu.

### Running Locally in Docker

The overall repository and each individual tool or sample includes a devcontainer definition. This is to facilitate the use of a self contained docker image containing all the development dependencies.

1. Install [Docker Desktop](https://www.docker.com/products/docker-desktop).

- Right-click on the Docker task bar item and update **Settings / Preferences > Shared Drives / File Sharing** with any source code locations you want to open in a container.

1. Install [VS Code](https://code.visualstudio.com/).
1. Install the [Remote Development Extension Pack](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack).
1. Open the root directory of the repository in VS Code.
1. Click **Reopen In Container** on the remote development notification dialog.

<p align="center">
    <img src="docs/images/remote-dev-dialog.png?raw=true"/>
</p>

### Running Locally

All of the tools and sample applications can be run locally assuming dependecies are installed on the local machine. To prepare for local execution run `npm install` and then `npm run init` from the root of the repository.

##### Dependencies

Project assumes a working nodejs environment and has been tested using the following versions.

| Tool                      | Version  | Install                                            |
| ------------------------- | -------- | -------------------------------------------------- |
| Node.js                   | v12.15.0 | https://nodejs.org/dist/v12.19.0/node-v12.19.0.pkg |
| NPM                       | v6.14.8  | npm install npm@latest -g                          |
| NVM <sup>(optional)</sup> | v0.36.0  | https://github.com/nvm-sh/nvm                      |

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. Please do not report security vulnerabilities on the public GitHub issue tracker. The [Responsible Disclosure Program](https://auth0.com/whitehat) details the procedure for disclosing security issues.

For auth0 related questions/support please use the [Support Center](https://support.auth0.com/).

## Contributing

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

Please review our [Code of Conduct](docs/CODE_OF_CONDUCT.md) and [Contributing](docs/CONTRIBUTING.md) guidelines.

## Author

[Auth0](https://auth0.com)

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
