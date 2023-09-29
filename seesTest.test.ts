import {BasePage} from './basePage';
import {seesTest} from './seesObjectPage';
const page = new seesTest(); 
const fs = require('fs')
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

describe("navigate testing sees candy web page", ()=> {
test('testing the headerBar', async () => {
    await page.navigate();
    await page.click(page.xTellMeButton)
    await page.getElement(page.fundraisingButton);
    await page.click(page.fundraisingButton);
    await sleep(1500);
    await page.getElement(page.corporateGiftingButton);
    await page.click(page.corporateGiftingButton);
    await page.getElement(page.homeButton);
    await page.click(page.homeButton);
        await page.getElement(page.findAShopButton);
        await page.click(page.findAShopButton);
        await page.driver.quit();
  });
  });

