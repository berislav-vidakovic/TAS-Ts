import type { Page } from '@playwright/test';

export class GamesPage {
  constructor(private page: Page) {}

  async open() {
    console.log('Browsing GAMES page https://gamesjclient.barryonweb.com/ ...');
    await this.page.goto('https://gamesjclient.barryonweb.com/');
    console.log('... Test passed!');
  }
}
