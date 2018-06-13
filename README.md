# Caldera Components


[![Build Status](https://travis-ci.org/calderawp/caldera-components.svg?branch=master)](https://travis-ci.org/calderawp/caldera-components)
[![Coverage Status](https://coveralls.io/repos/github/calderawp/caldera-components/badge.svg?branch=master)](https://coveralls.io/github/calderawp/caldera-components?branch=master)

🌋 [Documentation](http://calderalabs.org/caldera-components/)

### Usage

## Install
`npm i -D @caldera-labs/components`

### Development Requirements
* [npm](https://www.npmjs.com/get-npm)
* [Yarn](https://yarnpkg.com/lang/en/docs/install/#mac-stable)
* [Git]()
* [Flow](https://flow.org/en/docs/install/)


## Testing
[See testing documentation]()


## Scripts

### Develop
* `yarn start`
    - Runs linter and compiles for production
    - Starts test app server

### Tests
*`yarn test`
    - Run test watcher
* `npm test:once` 
    - Run tests once

### Type-checking With Flow
* `yarn flow`

### Lint Code
* `yarn lint`
    - Run linter and fixer watch
* `yarn lint:fix`
    - Lint and fix code once
* `yarn lint:once`
    - Lint code once


### Generate Documentation
* `npm run documentation`
    - Generates documentation from inline docs
    - Generates documentation from markdown files in /manual

### Release To npm
Must be [logged in as project maintainer via npm cli](https://docs.npmjs.com/cli/adduser)

* `yarn release`