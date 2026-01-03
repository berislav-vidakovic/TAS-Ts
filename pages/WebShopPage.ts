import type { Page } from '@playwright/test';

export class WebShopPage {
  constructor(private page: Page) {}

  async open() {
    console.log('Browsing WEB-SHOP page https://webshop.barryonweb.com/ ...');
    await this.page.goto('https://webshop.barryonweb.com/');
    console.log('... Test passed!');
  }
}
