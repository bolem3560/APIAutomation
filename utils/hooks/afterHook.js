import cucumberJson from 'wdio-cucumberjs-json-reporter'
const { After } = require('cucumber');

After((scenarioResult) => {

  if (scenarioResult.result.status === 'failed') {
    cucumberJson.attach(browser.takeScreenshot(), 'image/png');

  }
  return scenarioResult.result.status;
});