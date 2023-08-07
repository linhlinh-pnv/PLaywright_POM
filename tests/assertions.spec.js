import test, {page,expect} from '@playwright/test'

test('Assertions Demo', async({page})=>{

    await page.goto('https://kitchen.applitools.com/');
    await page.pause();

    await expect(page.locator('text=The Kitchen')).toHaveCount(1);
    
    if( await page.$('text=The Kitchen')){
        await page.locator('text=The Kitchen').click();

    }
// check element hidden or visible
    await expect(page.locator('text=The Kitchen')).toBeVisible();
    // await expect.soft(page.locator('text=The Kitchen')).toBeHidden();
    ///CHeck element enabled or disabled
    await expect(page.locator('text=The Kitchen')).toBeEnabled();
    // await expect.soft(page.locator('text=The Kitchen')).toBeDisabled();


    await expect(page.locator('text=The Kitchen')).toHaveText('The Kitchen');
    // await expect(page.locator('text=The Kitchen')).not.toHaveText('The Kitchen');


    await expect(page).toHaveURL('https://kitchen.applitools.com/');
    await expect(page).toHaveTitle(/.*Kitchen/);
    await page.pause();

    await expect(page).toHaveScreenshot();
});