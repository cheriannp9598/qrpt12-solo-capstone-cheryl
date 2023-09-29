import {BasePage} from './basePage';
import {seesTest} from './seesObjectPage';
const page = new seesTest(); 
const fs = require('fs')
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

test('testing the contact button', async () => {
    await page.navigate();
    await page.getElement(page.contactUsButton);
    await page.click(page.contactUsButton);
    let contactUsButtonurl = await page.driver.getCurrentUrl();
  expect (contactUsButtonurl).toBe("https://www.sees.com/contact-us");
  await page.driver.quit();
  
  });