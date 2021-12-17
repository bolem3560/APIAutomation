const constants = require('../constants/config_constants');

const reportMetadataWindows = {
  device: constants.WINDOWS,
  platform: {
    name: constants.WINDOWS,
    version: constants.WINDOWS_10,
  },
};

const reportMetadataMac = {
  device: constants.MAC,
  platform: {
    name: constants.OSX,
    version: constants.MAC,
  },

};

const localWindowsChrome = {
  browserName: constants.CHROME,
  'cjson:metadata': reportMetadataWindows,
};

const localWindowsFF = {
  browserName: constants.FIREFOX,
  'cjson:metadata': reportMetadataWindows,
};

const localWindowsEdge = {
  browserName: constants.EDGE,
  'cjson:metadata': reportMetadataWindows,
};

const localMacChrome = {
  browserName: constants.CHROME,
  'cjson:metadata': reportMetadataMac,
};




const localMacFF = {
  browserName: constants.FIREFOX,
  'cjson:metadata': reportMetadataMac,
};

const localMacSafari = {
  browserName: constants.SAFARI,
  'cjson:metadata': reportMetadataMac,
};





const localBrowserConfig = {
  windows: {
    chrome: [localWindowsChrome],
    firefox: [localWindowsFF],
    edge: [localWindowsEdge],
  },
  mac: {
    chrome: [localMacChrome],
    firefox: [localMacFF],
    safari: [localMacSafari],

  },
};


module.exports.getBrowserConfig = (os, browserName) => {
  return localBrowserConfig[os][browserName];
};

module.exports.getDrivers = () => ({
  chrome: {
    version: '93.0.4577.63',
  },
  edge: '',
  firefox: ''
});

module.exports.getReportOptions = () => ({
  jsonDir: './reports/cucumber-json/',
  reportPath: './reports/cucumber-html/',
  openReportInBrowser: true,
  disableLog: true,
  pageTitle: 'automation-Test',
  reportName: 'automation-html-report',
  displayDuration: true,
  customData: {
    title: 'Run info',
    data: [
      { label: 'Environment', value: 'test' },
      { label: 'Project', value: 'automationTest' },
      { label: 'Release', value: '1.0.0' },
      { label: 'Cycle', value: 'Sprint 0' },
    ],
  },
  customStyle: './utils/customStyle.css',
  pageFooter: '<div style="margin:0 auto;width:50%;padding:10px;">'
    + '<p>Automation Test</p></div>',
});