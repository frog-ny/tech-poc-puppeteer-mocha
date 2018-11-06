const { expect } = require('chai');

describe('sample test', function() {
  let page;

  before (async function() {
    this.timeout(5000);
    page = await browser.newPage();
    await page.goto('http://localhost:3000/test'); // needs to map to the http-server and exposed port
  });

  after (async () => {
    await page.close();
  });

  it('should have one button', async function() {
    this.timeout(5000);
    const BUTTON_SELECTOR = '.counter-button';
    const title = await page.title();

    const button = await page.waitFor(BUTTON_SELECTOR);

    expect(await page.$$(BUTTON_SELECTOR)).to.have.lengthOf(1);
  });
});
