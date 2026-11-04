import {test, expect} from '@playwright/test';

test.describe('Open websites', () =>{
    test ('flipkart open' , async ({page}) => {
        await page.goto("https://flipkart.com");
    })

test('open youtube' , async ({page}) => {
    await page.goto("https://youtube.com");
})

test('Open Amazon' , async({page})=> {
    await page.goto("https://amazon.in");
})
})