const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');
cypress.run({
  browser: 'chrome'
})
.then((results) => {
  const args = {
    target: process.env.TARGET_TOKEN_CRHOME,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
