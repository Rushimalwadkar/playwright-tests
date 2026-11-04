import {test, expect} from '@playwright/test';

test.skip('test', async ({page}) => {
  await page.goto('https://www.flipkart.com/');
})

test('test3', async ({page}) => {
    await page.goto('https://www.flipkart.com/');
})


test('test2', async ({page}) => {
  await page.goto('https://www.flipkart.com/');
})
