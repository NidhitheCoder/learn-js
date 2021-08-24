const puppeteer = require('puppeteer');

(async() => {
  const browser = await puppeteer.launch({ headless: false});
  const page = await browser.newPage();
  await page.goto('https://cj-dev-portal.ses.vonnue.dev/',  {
    waitUntil: 'networkidle2',
  });
  await page.screenshot({path: 'screen1.png'});
    // await browser.waitForTarget(() => false);
  const result = await page.evaluate(() => {
    console.log('haiii');
    const btns = document.querySelectorAll('a button');
    const buttons = [...btns];
    // console.log('haiii');
    let loginBtn = buttons[2];
    // console.log(loginBtn);
    // loginBtn.addEventListener('click', () => {
    //   console.log('login clicked');
    // })
    return loginBtn;
  });

  console.log(result);
  await browser.close();
})();
