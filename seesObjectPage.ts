import {By, until, WebDriver, WebElement} from 'selenium-webdriver';
import { elementTextContains } from 'selenium-webdriver/lib/until';
import { BasePage } from './basePage';

export class seesTest extends BasePage{     
    headerbar: By = By.xpath('//div[@class="header-utility-inner"]');
    homeButton: By = By.xpath('(//a[@*])[31]')
   xTellMeButton: By = By.xpath('//button[@id="bx-close-inside-2150103"]');
    okButton: By = By.xpath('//button[@class="account-button yes ui-button ui-corner-all ui-widget"]');
    fundraisingButton: By = By.xpath('(//a[@class="fa-hide nav-warn"])[3]'); 
    corporateGiftingButton: By = By.xpath('(//a[@class="nav-warn"])[4]')
    findAShopButton : By = By.xpath('//div[@class="multiline"]');
    fallButton: By = By.xpath('(//li[@class="mi-l1 cat c__fall-treats has-kids"])[2]');
    halloweenButton: By =By.xpath('//a[text()="Halloween"]')
    diaDeLosMuertosButton: By = By.xpath('(//a[text()="Día de los Muertos"])[3]')
    chocolateButton: By = By.xpath('//a[text()="Chocolate & Candy"]');
    candyButton: By = By.xpath(' (//li[@class="mi-l1 cat c__candy has-kids"])[1]');
    BuildABoxButton: By = By.xpath('(//a[text()="Build A Box"])[2]');
    giftsAndMerchButton: By = By.xpath('//a[text()="Gifts & Merch"]');
    searchBox: By = By.xpath('//input[@id="d-search"]');
    magnifyingButton: By = By.xpath(' //button[@class="search-btn plain-button"]');
    contactUsButton: By = By.xpath(' //div[@class="contact-us"]');
    enterZipCodeBox: By = By.xpath('//input[@class="search-input ui-autocomplete-input"]'); 
    
   
    zipMagnifyingButton: By = By.xpath('//div[@class="search-submit-wrap gaq-link right"]');
    xButton: By = By.xpath(' //button[@id="bx-close-inside-2150125"]');
    noThanksButton: By = By.xpath(' (//button[@type="reset"])[1]');
    constructor(){   
    super({url:"https://www.sees.com"});
    }
};