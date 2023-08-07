import { test, expect } from '@playwright/test';

test.describe('All test', () => {



    test.beforeEach(async ({ page }) => {

        await page.goto('https://www.saucedemo.com/');
        await page.locator('[data-test="username"]').click();
        await page.locator('[data-test="username"]').fill('problem_user');
        await page.locator('[data-test="password"]').click();
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
        // await page.waitForURL('https://www.saucedemo.com/inventory.html');
        // await page.pause();


        // await page.close();

    })

    test.afterAll(async ({ page }) => {
        await page.close()

    })

    test('homapage', async ({ page }) => {



        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.locator('#item_4_img_link').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
        await page.locator('[data-test="back-to-products"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
        await page.locator('[data-test="add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();
        await page.locator('#item_2_title_link').click();
        await page.locator('[data-test="add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]').click();




        // await page.pause();
    })
    test('logout', async ({ page }) => {

        // await page.goto('https://www.saucedemo.com/');
        // await page.locator('[data-test="username"]').click();
        // await page.locator('[data-test="username"]').fill('problem_user');
        // await page.locator('[data-test="password"]').click();
        // await page.locator('[data-test="password"]').fill('secret_sauce');
        // await page.locator('[data-test="login-button"]').click();


        await page.getByRole('button', { name: 'Open Menu' }).click();
        await page.getByRole('link', { name: 'Logout' }).click();
        // await page.pause();

    })
})