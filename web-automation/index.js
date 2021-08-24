const puppeteer = require('puppeteer');

(async() => {
  const browser = await puppeteer.launch({ headless: false});
  const page = await browser.newPage();
  await page.goto('https://cj-dev-portal.ses.vonnue.dev/');
  await page.screenshot({path: 'screen1.png'});
    await browser.waitForTarget(() => false);
  await browser.close();
})();
