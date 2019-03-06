const puppeteer = require('puppeteer');

const test = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.on('console', msg => {
    console.log(msg._text);
  })
  await page.goto('http://localhost:8080/lessons/lesson1/quiz');
  for (let i = 0; i < 10; i++) {
    await page.waitForSelector('.response');
    await page.click('.response');
    await page.waitForSelector('.neutral');
    await page.click('.neutral');
    await page.waitForSelector('.button');
    await page.click('.button');
  }
  await page.waitForSelector('.progress-circle');
  // await browser.close();
}

test();