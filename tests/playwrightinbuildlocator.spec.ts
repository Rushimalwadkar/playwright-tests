import {test, expect} from '@playwright/test';
import dotenv from "dotenv";
dotenv.config();
const userID :String = process.env.userID ||'';
const pass = process.env.pass;
test.describe('locators' , () =>{

    test ('openWebside', async ({page}) => {

        await page.goto("https://practicetestautomation.com/practice-test-login/"),{
            waitUntil: 'domcontentloaded'
        }
        let username = await page.getByRole('textbox',{name:"username"});
        let password = await page.getByRole('textbox',{name:"Password"});
        let submit = await page.getByRole('button',{name:"submit"});
        let error = await page.locator('#error');
        await page.fill("username",userID);
        await page.fill("Password" , pass);
        await submit.click();
         await expect(error).toContainText('Your username is invalid!');
    })

})
