import { test, expect } from '@playwright/test';

test.skip ('test', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');
  await page.locator('div').filter({ hasText: '✕LoginGet access to your' }).first().click();
  await page.getByRole('textbox', { name: 'Search for Products, Brands' }).click();
  await page.getByRole('textbox', { name: 'Search for Products, Brands' }).fill('iphone 14');
  await page.getByRole('textbox', { name: 'Search for Products, Brands' }).press('Enter');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Apple iPhone 14 Plus (Midnight, 128 GB) Currently unavailable Add to Compare' }).click();
  const page1 = await page1Promise;
  await page1.locator('div').filter({ hasText: /^Key Highlights$/ }).nth(3).click();
});