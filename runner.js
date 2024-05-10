const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');
const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjdlODIyMDcwLTQ3OWMtNDNlMC05OWU2LTkxNmUyZThlNDliZi0xNzE1MzcwNTE5MDgzIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiZTBmMGYyZjQtYjkyYS00MTU3LThkNTktMWJmMmZkYjg1NWM5IiwidHlwZSI6InQifQ.CweogIcsLBe47JkUEYCgXB2n8WAQM2EqEb021udXJ_Y'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
