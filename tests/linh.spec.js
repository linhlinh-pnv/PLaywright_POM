import { test, expect } from '@playwright/test';

test('test1', async ({ page, context }) => {

  // await context.tracing.start(
  //   {
  //     snapshots: true,
  //     screenshots: true
  //   })
  await page.goto('https://www.saucedemo.com/');
  await page.pause();
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('a').filter({ hasText: '1' }).click();

  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();


  
});