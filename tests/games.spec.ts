import { test } from '@playwright/test';
import { GamesPage } from '../pages/GamesPage.js';

test('Test Case: Open games page', async ({ page }) => {
  const gPage = new GamesPage(page);
  await gPage.open();
});
