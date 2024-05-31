import {test as setup, expect} from '@playwright/test';

const authFile = './.auth/user.json';

setup('authenticate', async ({ page }) => {
    // Perform authentication steps. Replace these actions with your own.
    await page.goto('https://coding.pasv.us/user/login');
    await page.getByPlaceholder('Email').fill('293728den@gmail.com');
    await page.getByPlaceholder('Password').fill('293728den');
    await page.getByRole('button', { name: 'Login' }).click();
    // Wait until the page receives the cookies.
    //
    // Sometimes login flow sets cookies in the process of several redirects.
    // Wait for the final URL to ensure that the cookies are actually set.
    await page.waitForURL('https://coding.pasv.us/profile/64656b3ccc28f14deeb1e969');
    await page.screenshot({path: 'screen/authenticate.png'})
    // Alternatively, you can wait until the page reaches a state where all cookies are set.
    await expect(page.locator('[class="ms-2 me-2"]')).toHaveText('Denis Nazarenko');
  
    // End of authentication steps.
  
    await page.context().storageState({ path: authFile });
  });