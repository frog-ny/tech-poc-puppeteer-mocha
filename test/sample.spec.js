const { expect } = require('chai');

describe('button test', function() {
  let page;

  before (async function() {
    page = await browser.newPage();
    await page.goto('http://localhost:3000/test'); // needs to map to the http-server and exposed port
  });

  after (async () => {
    await page.close();
  });

  it('should have one custom element', async function() {
    const COUNTER_SELECTOR = 'exa-counter';

    await page.waitFor(COUNTER_SELECTOR);

    // const counter = await page.$$eval(COUNTER_SELECTOR, e => e.getAttribute('value'));
    const counter = await page.$$(COUNTER_SELECTOR);

    expect(counter).to.have.lengthOf(1);
  });
  
  it('should have one button', async function() {
    const BUTTON_SELECTOR = '.counter-button';

    await page.waitFor(BUTTON_SELECTOR);

    expect(await page.$$(BUTTON_SELECTOR)).to.have.lengthOf(1);
  });

  it('should display the counter', async function() {
    const COUNT_SELECTOR = '.counter-count';

    await page.waitFor(COUNT_SELECTOR);

    expect(await page.$$(COUNT_SELECTOR)).to.have.lengthOf(1);
  });

  it('count should be zero to begin', async function() {
    const COUNTER_SELECTOR = 'exa-counter';

    await page.waitFor(COUNTER_SELECTOR);

    const counter = await page.$$eval(COUNTER_SELECTOR, (e) => {
      return e[0].getAttribute('value');
    });

    expect(counter).to.eql(0);
  });
});
