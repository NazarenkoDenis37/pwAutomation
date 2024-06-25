import {expect, test} from '@playwright/test';

test.beforeEach(async ({page})=>{
    await page.goto('https://coding.pasv.us/user/login')
})

test('authentication PASV', async ({page, browserName})=>{
    // const logOut = page.locator('[data-qa="logout"]')
    const header = page.locator('[data-qa="topmenu-Interview Questions"]')
    await expect(header).toHaveText('Interview Questions')
    await page.screenshot({path:`screenShot/${browserName}.png`})
})