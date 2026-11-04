import {test, expect} from '@playwright/test';

test.describe('locators' , () =>{

    test ('openWebside', async ({page}) => {

        await page.goto("https://practicetestautomation.com/practice-test-login/"),{
            waitUntil: 'domcontentloaded'
        }
        let UsernameField = page.locator("#username");
        let Password = page.locator("#password");
        let submit = page.locator("#submit");
        let error_msg = page.locator("#error");
        await UsernameField.fill("Rushikesh");
        await Password.fill("12345");
        await submit.click();
        await expect(error_msg).toContainText("Your username is invalid!");
        page.screenshot({ path: 'loginpage.png',
        fullPage: true});
    })

})
