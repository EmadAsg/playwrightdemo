const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {
    // Go to https://www.asggroup.com.au/
    await page.goto('https://www.asggroup.com.au/');

    // Click img[alt="ASG Group - An NRI Company"]
    await page.click('img[alt="ASG Group - An NRI Company"]');

    expect(page.url()).toBe('https://www.asggroup.com.au/');
});
