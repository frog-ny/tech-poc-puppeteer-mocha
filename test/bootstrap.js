const puppeteer = require('puppeteer');
const { expect } = require('chai');
const _ = require('lodash');
const globalVariables = _.pick(global, ['browser', 'expect']);

// puppeteer opts
const opts = {
  headless: true,
  slowMo: 100,
  args: ['--no-sandbox'],
  timeout: 10000
};

before (async () => {
  global.expect = expect;
  global.browser = await puppeteer.launch(opts);
});

after (() => {
  browser.close();

  global.browser = globalVariables.browser;
  global.expect = globalVariables.expect;
});
