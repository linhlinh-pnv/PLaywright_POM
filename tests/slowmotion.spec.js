import { test, expect, chromium } from '@playwright/test'

test('Slow motion', async () => {
    const browser = await chromium.launch({
        slowMo: 500,
        headless: false,
    });
    const context = await browser.newContext({
        recordVideo: {
            dir: 'video/',
            size: { width: 800, height: 600 }
        }
    });
    const page = await context.newPage();

    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();

    await context.close();
})