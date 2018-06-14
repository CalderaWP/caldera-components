# Caldera Components
[![Build Status](https://travis-ci.org/calderawp/caldera-components.svg?branch=master)](https://travis-ci.org/calderawp/caldera-components)
[![Coverage Status](https://coveralls.io/repos/github/calderawp/caldera-components/badge.svg?branch=master)](https://coveralls.io/github/calderawp/caldera-components?branch=master)

🌋 [Documentation](http://calderalabs.org/caldera-components/)

## What Is This?
UI components for Caldera Forms admin, Caldera Forms 2.0 front-end

## Why Is This?
[See goals](http://calderalabs.org/caldera-components/#goals)

## How To Use This

### Install
`npm i -D @caldera-labs/components`

### Basic Usage Examples


## How To Develop This

### Development Requirements
* [npm](https://www.npmjs.com/get-npm)
* [Yarn](https://yarnpkg.com/lang/en/docs/install/#mac-stable)
* [Git]()

### Testing
[See testing documentation](http://calderalabs.org/caldera-components/manual/testing.html)


### Scripts

#### Develop
* `yarn start`
    - Runs linter and compiles for production
    - Starts test app server

#### Tests
* `yarn test`
    - Run test watcher
* `npm test:once` 
    - Run tests once

#### Lint Code
* `yarn lint`
    - Run linter and fixer watch
* `yarn lint:fix`
    - Lint and fix code once
* `yarn lint:once`
    - Lint code once


#### Generate Documentation
* `npm run documentation`
    - Generates documentation from inline docs
    - Generates documentation from markdown files in /manual

#### Release To npm
Must be [logged in as project maintainer via npm cli](https://docs.npmjs.com/cli/adduser)

* `yarn release`
    - Release a patch update
    - Increments third position of a version. 1.0.1 -> 1.0.2
* `yarn release:minor`
    - Release a minor update
    - Increments second position of a version. 1.0.1 -> 1.1.0 
* `yarn release:major`
    - Release a major update
    - Increments second position of a version. 1.0.1 -> 2.0.0 
    
These commands run the tests and linter, and if they pass, re-compiles source, rebuilds docs, updates the version using [npm version](https://docs.npmjs.com/cli/version), adds a git tag, makes a git commit for the version change and updates the module on npm.
