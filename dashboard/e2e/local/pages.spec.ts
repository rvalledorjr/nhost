import { expect, test } from '@playwright/test';

test('has "local" as title', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page).toHaveTitle(/local app - nhost/i);
});

test('the sidebar and the menu items are visible', async ({ page }) => {
  await page.goto('http://localhost:3000');

  const sidebar = page.locator('nav[aria-label="Main navigation"]');

  await expect(sidebar).toBeVisible();

  // Enabled menu items
  await expect(sidebar.locator('a', { hasText: /overview/i })).toBeVisible();
  await expect(sidebar.locator('a', { hasText: /database/i })).toBeVisible();
  await expect(sidebar.locator('a', { hasText: /graphql/i })).toBeVisible();
  await expect(sidebar.locator('a', { hasText: /hasura/i })).toBeVisible();
  await expect(sidebar.locator('a', { hasText: /auth/i })).toBeVisible();
  await expect(sidebar.locator('a', { hasText: /storage/i })).toBeVisible();

  // Disabled menu items
  await expect(
    sidebar.locator('span', { hasText: /functions/i }),
  ).toBeVisible();
  await expect(
    sidebar.locator('span', { hasText: /deployments/i }),
  ).toBeVisible();
  await expect(sidebar.locator('span', { hasText: /backups/i })).toBeVisible();
  await expect(sidebar.locator('span', { hasText: /logs/i })).toBeVisible();
  await expect(sidebar.locator('span', { hasText: /settings/i })).toBeVisible();
});

test('relevant sections are available on the overview page', async ({
  page,
}) => {
  await page.goto('http://localhost:3000');
  await expect(page.locator('h1', { hasText: /local/i })).toBeVisible();
  await expect(page.locator('p', { hasText: /localhost/i })).toBeVisible();
});
