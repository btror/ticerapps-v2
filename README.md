# ticerapps-v2

View live at [ticerapps.com](https://ticerapps.com).

## About

Welcome to version 2 of my developer website. This version represents a complete overhaul from its [predecessor](https://github.com/btror/ticerapps), now powered by [Angular](https://angular.io/). Version 2 delivers an enhanced user experience, streamlined development framework, and automation for tests, builds, and deployment. If you're interested in exploring the previous version, built with [React](https://react.dev/), you can still find it [here](https://github.com/btror/ticerapps).

## Development Process

Clone this repository and install required packages via `npm i`.

Start a dev server at `http://localhost:4200` via `ng serve -o`.

Run unit tests via `npm run test`.

## Automation

Create a pull request to merge your branch into `main`. Merging is possible after a successful CI process and 2 approving reviews.

After merging, a new CI and build process is triggered automatically. Once the build finishes successfully, the new changes are deployed to [ticerapps.com](https://ticerapps.com).

Production files are pushed to the `gh-pages` branch automatically.

## Requirements

- [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.
- [npm](https://docs.npmjs.com/cli/v9/commands/npm-install) and [NodeJS](https://nodejs.org/en/download) version 18.16.0
- (optional) [ticerapps-backend](https://github.com/btror/ticerapps-backend) Flask Application
    - This allows users to directly send an email on contact form submission and is not required. If it is not running the form submission behavior will change and an email application will open on form submission with the form data auto-populated in the email body.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
