This repo contains a simple login form which takes the user to a logged in webpage. The code for the pages can be found under the `public` folder.

As well as a test using [nightwatch](https://nightwatchjs.org/) that opens the login form webpage, fills in the user name and password, clicks on submit, waits for logged in page to be visible.

The login form takes randomly 1-10 seconds to submit while the tests expects he page to load within 5 seconds. That means the test can fail and succeed randomly.

The tests can be found in the 'tests' folder.

Website: [link to deployed site](https://testtest-678bb.firebaseapp.com/)

Repo: [link to github repo](https://github.com/havard024/nightwatch-test)

# Prerequisites

- git [git homepage](https://git-scm.com/) unless you want to download the repo as zip.
- node [node installation instructions from nightwatch](https://nightwatchjs.org/gettingstarted/installation/#install-node-js)
                                                   

# Get Started
1. Clone repo: `https://github.com/havard024/nightwatch-test.git` or download as zip from [repo](https://github.com/havard024/nightwatch-test)
2. Install dependencies: `npm install`
2. Run tests: `npm test`

