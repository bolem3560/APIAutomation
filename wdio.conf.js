const { generate } = require('multiple-cucumber-html-reporter');
const { removeSync } = require('fs-extra');
const yargs = require('yargs');
const chai = require('chai');
const browserConfig = require('./utils/browser');
const constants = require('./constants/config_constants');


const parseCmdArgs = () => yargs.argv;
const getCmdArgs = () => parseCmdArgs();
const getBrowser = () => getCmdArgs().browserName || constants.CHROME;
const getOS = () => getCmdArgs().os || constants.WINDOWS;
const getThreadCount = () => getCmdArgs().threadCount || 1;
exports.config = {
    specs: ['./features/**/*.feature'],
    suites: [],
    exclude: [
        // 'path/to/excluded/files'
    ],

    maxInstances: getThreadCount(),
    skipSeleniumInstall: false,
    capabilities: browserConfig.getBrowserConfig(getOS(), getBrowser()),
    sync: true,
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://www.johnlewis.com/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [['selenium-standalone', {

        installArgs: {
            drivers: browserConfig.getDrivers(),
        },
        args: {
            drivers: browserConfig.getDrivers(),
        },
    }]],
    framework: 'cucumber',
    reporters: [['cucumberjs-json', {
        jsonFolder: './reports/cucumber-json',
    }]],

    cucumberOpts: {
        requireModule:['@babel/register'],
        // <string[]> (file/dir) require files before executing features
        require: ['./step-definitions/**/*.js'],
        // <boolean> show full backtrace for errors
        backtrace: false,
        // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        requireModule: [],
        // <boolean> invoke formatters without executing steps
        dryRun: false,
        // <boolean> abort the run on first failure
        failFast: false,
        // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
        format: ['pretty'],
        // <boolean> hide step definition snippets for pending steps
        snippets: true,
        // <boolean> hide source uris
        source: true,
        // <string[]> (name) specify the profile to use
        profile: [],
        // <boolean> fail if there are any undefined or pending steps
        strict: false,
        // <string> (expression) only execute the features or scenarios with tags matching the expression
        tagExpression: '',
        // <number> timeout for step definitions
        timeout: 60000,
        // <boolean> Enable this config to treat undefined definitions as warnings.
        ignoreUndefinedDefinitions: false
    },
    onPrepare: async () => {
        removeSync('./reports/cucumber-json/');
        removeSync('.tmp/');
        removeSync('./reports/cucumber-html/');
    },
    before: async () => {
        global.assert = chai.assert;
        browser.setWindowSize(2360, 1770);
        browser.setTimeout({ pageLoad: 10000 });
    },
    afterScenario: () => {
        browser.deleteCookies();
    },
    onComplete: async () => {
        generate(browserConfig.getReportOptions());
    },

}
