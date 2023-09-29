import {BasePage} from './basePage';
import {seesTest} from './seesObjectPage';
const page = new seesTest(); 
const fs = require('fs')
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

test('testing the search bar', async () => {
    await page.navigate();
    await page.click(page.noThanksButton)
    await page.getElement(page.searchBox);
    await page.setInput(page.searchBox,'butter');
    await page.click(page.magnifyingButton);
    await page.navigate();
    await page.getElement(page.searchBox);
    await page.setInput(page.searchBox,'caramel');
    await page.getElement(page.magnifyingButton);
    await page.click(page.magnifyingButton);
    await page.driver.quit();
    
});