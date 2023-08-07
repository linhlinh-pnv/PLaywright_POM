import {test,expect} from '@playwright/test'

test('Selector',async ({page})=>{

    await page.goto('https://www.saucedemo.com/');
    await page.pause();

    await page.click('id=user-name');
    await page.locator('id=user-name').fill('Linhs');
    await page.locator(['id=user-name']).fill('Linhs')


});