import { test, expect } from '@playwright/test';

test('first', async ({ page, context }) => {

    // await context.tracing.start(
    //   {
    //     snapshots: true,
    //     screenshots: true
    //   })
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.pause();
    await page.click("//input[@name='username']");
    await page.locator("//input[@name='username']").fill('Admin');
    await page.click("//input[@name='password']");
    await page.locator("//input[@name='password']").fill('admin123');
    await page.click("//button[@type='submit']");
    const locator=page.locator ("//h6[contains(text(),Dashboard)]");
    await expect(locator).toHaveText(/Dashboard/);

});

test('second', async ({ page, context }) =>{


})


// import { test, page, expect } from '@playwright/test'
// test ('Demo login test ', async({page})=>{
//    await page.goto('https://www.odoo.com/vi_VN')
//    await page.locator('text=Đăng Nhập').click()
//    await page.click('//*[@id="login"]')
//    await page.locator('//*[@id="login"]').fill('dieu.y23@student.passerellesnumeriques.org')
//    await page.click('//*[@id="password"]')
//    await page.locator('//*[@id="password"]').fill('Dieu2002Bee')
//    await page.click("//button[contains(text(),'Đăng nhập')]")
//    await expect(page).toHaveTitle('Databases | Odoo')
//    await page.pause()
//    const locator = page.locator("//a[contains(text(),'Create')]");
//    await expect(locator).toHaveText(/Create/);
// })