![Auth0 Open Source Software](https://cdn.auth0.com/resources/oss-source-large-2x.png)

# Auth0 Product Education Labs

A set of tools and example applications for Product Education courses.

## Index

1. [Apps](#apps)

   - [Regular Web App](#regular-web-app)
   - [Single Page App](#single-page-app)

1. [APIs](#apis)

   - [Expenses API](#expenses-api)

1. [Tools](#tools)

   - [Initial Deploy](#initial-deploy)

1. [Execution Environment](#execution-environment)
1. [Issue Reporting](#issue-reporting)
1. [Contributing](#contributing)
1. [Author](#author)
1. [License](#license)

## Apps

### Regular Web App

The Regular Web App is a simple express application that is intended to be used as a starting point for hands on labs.

#### Environment Variables

| Variable           | Value                                | Config        | Vercel Only | Default |
| ------------------ | ------------------------------------ | ------------- | ----------- | ------- |
| ISSUER_BASE_URL    | https://your-tenant.region.auth0.com | issuerBaseUrl | ❌          | ❌      |
| CLIENT_ID          | application client id from Auth0     | clientId      | ❌          | ❌      |
| VERCEL_URL         | value supplied by Vercel             |               | ✅          | ✅      |
| VERCEL_GITHUB_REPO | value supplied by Vercel             |               | ✅          | ✅      |
| VERCEL_GITHUB_ORG  | value supplied by Vercel             |               | ✅          | ✅      |
| PORT               | **7000**                             | port          | ❌          | ✅      |

##### Notes

- [Vercel Deployment URLs](#vercel-deployment-urls)
- [URLs in Environment Variables](#vercel-environment-variable-urls)

#### Version 1.0

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fauth0%2Fauth0-product-education-labs%2Ftree%2Fmaster%2Fapps%2Fregular-web-app-express%2Fv1.0&env=ISSUER_BASE_URL,CLIENT_ID,VERCEL_URL,VERCEL_GITHUB_REPO,VERCEL_GITHUB_ORG&project-name=web-app&repository-name=web-app)

#### Run Local:

```bash
ISSUER_BASE_URL=https://your-tenant.region.auth0.com \
CLIENT_ID=your-app-client-id  \
npm run web-app:start
```

### Single Page App

The Single Page App is intended to be used as a starting place as a starting point for hands on labs.

#### Environment Variables

| Variable           | Value                            | Vercel Only | Default |
| ------------------ | -------------------------------- | ----------- | ------- |
| AUTH0_DOMAIN       | your-tenant.region.auth0.com     | ❌          | ❌      |
| CLIENT_ID          | application client id from Auth0 | ❌          | ❌      |
| API_URL            | url for expenses api             | ❌          | ❌      |
| VERCEL_URL         | value supplied by Vercel         | ✅          | ✅      |
| VERCEL_GITHUB_REPO | value supplied by Vercel         | ✅          | ✅      |
| VERCEL_GITHUB_ORG  | value supplied by Vercel         | ✅          | ✅      |
| PORT               | **8000**                         | ❌          | ✅      |

##### Notes

- [Vercel Deployment URLs](#vercel-deployment-urls)
- [URLs in Environment Variables](#vercel-environment-variable-urls)
- **API_URL** will need to be a publically accessable url when deploying to Vercel.

#### Version 1.0

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fauth0%2Fauth0-product-education-labs%2Ftree%2Fmaster%2Fapps%2Fsingle-page-app-vanillajs%2Fv1.0&env=AUTH0_DOMAIN,CLIENT_ID,API_URL,VERCEL_URL,VERCEL_GITHUB_REPO,VERCEL_GITHUB_ORG&project-name=single-page-app&repository-name=single-page-app)

##### Run Local:

```bash
AUTH0_DOMAIN=your-tenant.region.auth0.com \
CLIENT_ID=your-app-client-id  \
API_URL=http://url-to-expenses-api
npm run spa:start
```

## APIs

### Expenses API

The Expenses API is a simple api that is intended to be used as a starting point for hands on labs.

#### Environment Variables

| Variable           | Value                                | Config           | Vercel Only | Default |
| ------------------ | ------------------------------------ | ---------------- | ----------- | ------- |
| ISSUER_BASE_URL    | https://your-tenant.region.auth0.com | issuerBaseUrl    | ❌          | ❌      |
| ALLOWED_AUDIENCES  | **https://expenses-api**             | allowedAudiences | ❌          | ✅      |
| VERCEL_URL         | value supplied by Vercel             |                  | ✅          | ✅      |
| VERCEL_GITHUB_REPO | value supplied by Vercel             |                  | ✅          | ✅      |
| VERCEL_GITHUB_ORG  | value supplied by Vercel             |                  | ✅          | ✅      |
| PORT               | **5000**                             | port             | ❌          | ✅      |

##### Notes

- [Vercel Deployment URLs](#vercel-deployment-urls)
- [URLs in Environment Variables](#vercel-environment-variable-urls)

#### Version 1.0

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fauth0%2Fauth0-product-education-labs%2Ftree%2Fmaster%2Fapis%2Fexpenses-api-express%2Fv1.0&env=ISSUER_BASE_URL,ALLOWED_AUDIENCES,VERCEL_URL,VERCEL_GITHUB_REPO,VERCEL_GITHUB_ORG&project-name=expenses-api&repository-name=expenses-api)

##### Run Local:

```bash
ISSUER_BASE_URL=https://your-tenant.region.auth0.com \
npm run expenses-api:start
```

##### Required Scopes

| Endpoint   | Secure | Scopes |
| ---------- | ------ | ------ |
| `/`        | ❌     |        |
| `/total`   | ❌     |        |
| `/reports` | ❌     |        |

#### Version 2.0

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fauth0%2Fauth0-product-education-labs%2Ftree%2Fmaster%2Fapis%2Fexpenses-api-express%2Fv2.0&env=ISSUER_BASE_URL,ALLOWED_AUDIENCES,VERCEL_URL,VERCEL_GITHUB_REPO,VERCEL_GITHUB_ORG&project-name=expenses-api&repository-name=expenses-api)

##### Run Local:

```bash
ISSUER_BASE_URL=https://your-tenant.region.auth0.com \
npm run expenses-api:v2:start
```

##### Required Scopes

| Endpoint   | Secure | Scopes |
| ---------- | ------ | ------ |
| `/`        | ❌     |        |
| `/total`   | ❌     |        |
| `/reports` | ✅     |        |

#### Version 3.0

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fauth0%2Fauth0-product-education-labs%2Ftree%2Fmaster%2Fapis%2Fexpenses-api-express%2Fv3.0&env=ISSUER_BASE_URL,ALLOWED_AUDIENCES,VERCEL_URL,VERCEL_GITHUB_REPO,VERCEL_GITHUB_ORG&project-name=expenses-api&repository-name=expenses-api)

##### Run Local:

```bash
ISSUER_BASE_URL=https://your-tenant.region.auth0.com \
npm run expenses-api:v3:start
```

##### Required Scopes

| Endpoint   | Secure | Scopes         |
| ---------- | ------ | -------------- |
| `/`        | ❌     |                |
| `/total`   | ❌     |                |
| `/reports` | ✅     | `read:reports` |

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

Vercel is a cloud based hosting service. Each individual tool and sample application can be deployed to Vercel by clicking the blue Deploy button. A wizard dialog will guide you through the deployment process.

#### Vercel Environment Variable URLs

When prompted for a url in the Vercel deployment wizard, it is important to include a scheme remove any trailing slash.

| Example                 | Valid |
| ----------------------- | ----- |
| http://example.com/api  | ✅    |
| https://example.com/api | ✅    |
| http://example.com/api/ | ❌    |
| example.com/api         | ❌    |

#### Vercel Deployment URLs

Each deployment to Vercel is assigned a unique immutable deployment URL. It is then aliased to a production URL that is based on the Vercel project name. If a project already exists on Vercel with a given project name, the production URL will have appended random text to make it unique.

This causes a problem when attempting to configure some settings like `baseURL` in the `express-openid-connect` node module. For example, you may start on the production url of **https://myapp.vercel.app**, login using Auth0 and be retured to a completely different url of **https://myapp-sdfsdf.vercel.app**.

To avoid this situation, these example applications attempt to use another option for the **baseURL** value that contains both the **VERCEL_GITHUB_REPO** and **VERCEL_GITHUB_ORG** environment variables.

##### Example

Given a **VERCEL_GITHUB_REPO** value of `my-repo` and **VERCEL_GITHUB_ORG** value of `auth0` these URLs are mapped by Vercel.

| URL                                                               | Meets Expectation |
| ----------------------------------------------------------------- | ----------------- |
| https://my-repo.auth0.vercel.app                                  | ✅                |
| https://my-repo-4m8guzwu.vercel.app                               | ❌                |
| https://my-repo.vercel.app                                        | ❌                |
| https://front-end-web-app-secured-git-master.notmyself.vercel.app | ❌                |

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
