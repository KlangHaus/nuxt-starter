import { test, expect } from '@playwright/test';

test('homepage loads', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Mit Projekt|My Project/);
});

test('navigation links work', async ({ page }) => {
  await page.goto('/');
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
