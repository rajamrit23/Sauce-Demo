import * as xpath from '../Data/variables';
import * as testdata from '../Data/testdata';
import {test,expect} from '@playwright/test';

export async function loginPage(page) {
    await expect.soft(page).toHaveTitle(testdata.links.loginTitle);
    await expect.soft(page.locator(xpath.LoginPage.loginLogo)).toBeVisible();
    await expect.soft(page.locator(xpath.LoginPage.username)).toBeVisible();
    await expect.soft(page.locator(xpath.LoginPage.password)).toBeVisible();
    await expect.soft(page.locator(xpath.LoginPage.loginButton)).toBeVisible();
    await expect.soft(page.locator(xpath.LoginPage.loginDetails)).toBeVisible();  
}
export async function invalidCreds(page,uname,password,error) {
    await page.locator(xpath.LoginPage.username).fill(uname);
    await page.locator(xpath.LoginPage.password).fill(password);
    await page.locator(xpath.LoginPage.loginButton).click();
    await expect.soft(page.locator(xpath.LoginPage.loginError)).toHaveText(error) 
}
export async function validLogin(page,uname,password) {
    await page.locator(xpath.LoginPage.username).fill(uname);
    await page.locator(xpath.LoginPage.password).fill(password);
    await page.locator(xpath.LoginPage.loginButton).click();
    await expect.soft(page).toHaveTitle(testdata.links.loginTitle);
    await expect.soft(page).toHaveURL(/.*inventory.*/);
}
export async function problemUser(page,uname,password) {
    await page.locator(xpath.LoginPage.username).fill(uname);
    await page.locator(xpath.LoginPage.password).fill(password);
    await page.locator(xpath.LoginPage.loginButton).click();
    await expect.soft(page).toHaveTitle(testdata.links.loginTitle);
    await expect.soft(page).toHaveURL(/.*inventory.*/);
    await expect(
      page.locator('.inventory_item_img img[src*="sl-404"]')
    ).toHaveCount(6);
    await page.locator(xpath.LoginPage.menu).click();
    await page.locator(xpath.LoginPage.logout).click();
}
export async function performanceGlitchUser(page,uname,password) {
    await page.locator(xpath.LoginPage.username).fill(uname);
    await page.locator(xpath.LoginPage.password).fill(password);
    const start = Date.now();
    await page.locator(xpath.LoginPage.loginButton).click();
    await expect.soft(page).toHaveTitle(testdata.links.loginTitle);
    await expect.soft(page).toHaveURL(/.*inventory.*/);
    const duration=Date.now() - start;
    console.log(`Inventory load time: ${duration} ms`);
    await expect.soft(duration).toBeGreaterThan(3000);
     await page.locator(xpath.LoginPage.menu).click();
    await page.locator(xpath.LoginPage.logout).click();
}
export async function logout(page) {
    await validLogin(page,testdata.loginCreds.standard,testdata.loginCreds.password);
    await page.locator(xpath.LoginPage.menu).click();
    await page.locator(xpath.LoginPage.logout).click();
    await page.waitForTimeout(2000);
    await expect.soft(page).toHaveURL(testdata.links.baseURL);  
}
