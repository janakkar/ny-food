import { browser, element, by } from 'protractor';

export class NyFoodPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('nyf-root h1')).getText();
  }
}
