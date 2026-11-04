import {test, expect} from '@playwright/test';

test.skip('test', async ({page}) => {
  await page.goto('https://www.flipkart.com/');
})

test.only ('test3', async ({page}) => {
    await page.goto('https://www.flipkart.com/');
})


test.only('test2', async ({page}) => {
  await page.goto('https://www.flipkart.com/');
})

