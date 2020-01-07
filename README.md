# cypress-gh-action-subfolders [![renovate-app badge][renovate-badge]][renovate-app] ![CI status](https://github.com/bahmutov/cypress-gh-action-subfolders/workflows/E2E/badge.svg?branch=master)

> Example using Cypress GitHub Action when Cypress is installed in a subfolder

Uses [cypress-io/github-action](https://github.com/cypress-io/github-action), see [.github/workflows/test.yml](.github/workflows/test.yml).

Folder structure

```text
root/
  e2e/
    (code for installing and running Cypress tests)
    package.json
    package-lock.json
    cypress.json
    cypress

  (code for running the "app" with "npm start")
  package.json
  yarn.lock
```

[renovate-badge]: https://img.shields.io/badge/renovate-app-blue.svg
[renovate-app]: https://renovateapp.com/
