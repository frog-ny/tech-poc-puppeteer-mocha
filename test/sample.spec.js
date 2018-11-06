const { expect } = require('chai');

describe('sample test', () => {
  let page;

  before (async () => {
    page = await browser.newPage();
    await page.goto('http://localhost:8080/test');
  });

  after (async () => {
    await page.close();
  });

  it('should have one button', async () => {
    const BUTTON_SELECTOR = '.counter-button';
    const title = await page.title();

    const button = await page.waitFor(BUTTON_SELECTOR);

    expect(await page.$$(BUTTON_SELECTOR)).to.have.lengthOf(1);
  });
});
