import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://cinemaulagam.netlify.app/');
  await page.pause()
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Sign Up' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Guna');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('gu7@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Guna@?2004');
  await page.getByRole('button', { name: 'Sign Up' }).click();
  await page.getByRole('link', { name: 'Movies' }).click();
  await page.getByRole('heading', { name: 'Lucky Baskhar' }).click();
  await page.getByText('Fri Mar 14').click();
  await page.getByText('Sat Mar 15').click();
  await page.getByText(':30 PM').click();
  await page.getByText('A4').click();
  await page.getByText('A3').click();
  await page.getByText('A2').click();
  await page.getByText('A1', { exact: true }).click();
  await page.getByText('B1', { exact: true }).click();
  await page.getByText('C1', { exact: true }).click();
  await page.getByText('D1', { exact: true }).click();
  await page.getByText('D2').click();
  await page.getByText('D3').click();
  await page.getByText('D4').click();
  await page.getByText('C4').click();
  await page.getByText('C5').click();
  await page.getByText('C6').click();
  await page.getByText('C7').click();
  await page.getByText('D7').click();
  await page.getByRole('button', { name: 'Pay Now :' }).click();
  await page.getByText('Debit / Credit Card').click();
});