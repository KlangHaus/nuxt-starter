import { test, expect } from '@playwright/test';

test('homepage loads', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Mit Projekt|My Project/);
});

test('navigation links work', async ({ page }) => {
  await page.goto('/');
  await page.click('text=Om');
  await expect(page.locator('h1')).toContainText(/Om|About/);
});

test('theme toggle exists', async ({ page }) => {
  await page.goto('/');
  const toggle = page.getByRole('button', { name: /tema|theme/i });
  await expect(toggle).toBeVisible();
});
