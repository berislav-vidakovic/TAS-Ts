import { test } from '@playwright/test';
import { WebShopPage } from '../pages/WebShopPage.js';

test('Test Case: open webshop page', async ({ page }) => {
  const wsPage = new WebShopPage(page);
  await wsPage.open();
});
