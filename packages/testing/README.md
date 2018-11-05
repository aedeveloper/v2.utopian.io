# `testing`

## Features:
- new monorepo package "testing"
- simple inclusion of this package will bring in all peer dependencies
- it will create a new folder called "test" within your project repo 
- it will add new testing scripts to your repo
- pseudoglobal packages are added at the lerna root level 
- it is not necessarily only for quasar / backend should be tested too

## Test harnesses:
- Jest (Unit)
    - jasmine with added mocha/chai
    - @vue/test-utils
    - no console.log()
- webdriver (e2e)
    - phantom-js
    - testing-bot
    - selenium
- cypress (if installed globally)
    - with special quasar commands
- Lighthouse (PWA)
    - with custom startup stuff
- snyk (node module security)
