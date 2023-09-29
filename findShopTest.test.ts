import {BasePage} from './basePage';
import {seesTest} from './seesObjectPage';
const page = new seesTest(); 
const fs = require('fs')
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
  
}

test('testing find a shop', async () => {
    await page.navigate();
    await page.getElement(page.findAShopButton);
    await page.click(page.findAShopButton);
    await page.click(page.noThanksButton);
    await page.getElement(page.enterZipCodeBox);
    await page.setInput(page.enterZipCodeBox,'88888\n');
   
    //await page.getElement(page.magnifyingButton);

    //await page.click(page.magnifyingButton);
    //await page.click(page.enterZipCodeBox);
    //await page.getElement(page.enterZipCodeBox);
    await page.setInput(page.enterZipCodeBox,'97132\n');
    //await page.getElement(page.magnifyingButton);
    //await page.click(page.magnifyingButton);
    //await page.getElement(page.enterZipCodeBox);
    await page.setInput(page.enterZipCodeBox,'Riverton,Ut\n');
    //await page.getElement(page.magnifyingButton);
    //await page.click(page.magnifyingButton);
    //await page.getElement(page.enterZipCodeBox);
    await page.setInput(page.enterZipCodeBox,'Newberg,Or\n');
    //await page.getElement(page.magnifyingButton);
    //await page.click(page.magnifyingButton);
    
  
     await page.driver.quit();

});