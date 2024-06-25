import { expect, test } from "@playwright/test";

test.describe('POPUP window', () => {
    test('popUp window accept',async  ({page}) => {
        await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
        page.on('dialog', dialog => dialog.accept())
        await page.locator('#confirmbtn').click()
    });
    test('popUp window dismiss',async  ({page}) => {
        await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
        page.on('dialog', dialog => dialog.dismiss())
        await page.locator('#confirmbtn').click()
    });
});