import { test, expect } from '@playwright/test';

test('homepage loads', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Mit Projekt|My Project/);
});

test('navigation links work', async ({ page, isMobile }) => {
  await page.goto('/');
  // On a phone the header links sit behind the menu toggle. A click before
  // hydration does nothing, so retry until the toggle reports the menu open.
  if (isMobile) {
    const close = page.getByRole('button', { name: /Luk menu|Close menu/ }).first();
    await expect(async () => {
      if (!(await close.isVisible())) {
        await page.getByRole('button', { name: /Åbn menu|Open menu/ }).click({ timeout: 1000 });
      }
      await expect(close).toBeVisible({ timeout: 1000 });
    }).toPass();
  }
  // A bare `text=Om` is a case-insensitive substring match, and its first hit
  // is the HOME link, so the click stayed on `/`. Name the link exactly.
  await page
    .getByRole('link', { name: /^(Om|About)$/ })
    .first()
    .click();
  await expect(page.locator('h1')).toContainText(/Om|About/);
});

test('theme toggle exists', async ({ page }) => {
  await page.goto('/');
  const toggle = page.getByRole('button', { name: /tema|theme/i });
  await expect(toggle).toBeVisible();
});
