import {BasePage} from './basePage';
import {seesTest} from './seesObjectPage';
const page = new seesTest(); 
const fs = require('fs')
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}


test('testing the nav bar', async () => {
    await page.navigate();
    await page.getElement(page.fallButton);
    await page.click(page.fallButton);
    await page.getElement(page.halloweenButton);
    await page.click(page.halloweenButton);
    await page.getElement(page.diaDeLosMuertosButton);
    await page.click(page.diaDeLosMuertosButton);
    await page.click(page.noThanksButton);
    //await page.navigate();
    //await page.getElement(page.homeButton);
    //await page.click(page.homeButton);
    await page.getElement(page.chocolateButton);
    await page.click(page.chocolateButton);
    await page.getElement(page.BuildABoxButton);
    await page.click(page.BuildABoxButton);
    //await page.getElement(page.homeButton);
    //await page.click(page.homeButton);
    await page.getElement(page.giftsAndMerchButton);
    await page.click(page.giftsAndMerchButton);
    await page.driver.quit();
  
  });
    
  
