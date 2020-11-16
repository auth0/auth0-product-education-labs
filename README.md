![Auth0 Open Source Software](https://cdn.auth0.com/resources/oss-source-large-2x.png)

# Auth0 Product Education Labs

A set of tools and example applications for Product Education courses.

## Index

1. Apps

   - [Regular Web App](apps/regular-web-app-express/README.md)
   - [Single Page App](apps/single-page-app-vanillajs/README.md)

1. APIs

   - [Expenses API](apis/expenses-api-express/README.md)

1. Tools

   - [Initial Deploy](tools/initial-deploy/README.md)

1. [Execution Environment](#execution-environment)
1. [Issue Reporting](#issue-reporting)
1. [Contributing](#contributing)
1. [Author](#author)
1. [License](#license)

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
