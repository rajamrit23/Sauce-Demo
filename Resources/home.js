import * as xpath from '../Data/variables';
import * as testdata from '../Data/testdata';
import {test,expect} from '@playwright/test';

export async function homePageValidation(page) {
    //Headers
    await expect.soft(page).toHaveTitle(testdata.links.loginTitle);
    await expect.soft(page.locator(xpath.header.appLogo)).toBeVisible();
    await expect.soft(page.locator(xpath.header.shoppingCart)).toBeVisible();
    await expect.soft(page.locator(xpath.header.cartIcon)).toBeVisible();
    //Menu
    await page.locator(xpath.menu.burgerButton).click();
    await expect.soft(page.locator(xpath.menu.allItems)).toBeVisible();
    await expect.soft(page.locator(xpath.menu.about)).toBeVisible();
    await expect.soft(page.locator(xpath.menu.logout)).toBeVisible();
    await expect.soft(page.locator(xpath.menu.resetAppState)).toBeVisible();
    await page.click(xpath.menu.closeButton);
    //inventory
    //await expect.soft(page.locator(xpath.inventory.productsLabel)).toBeVisible();
    await expect.soft(page.locator(xpath.inventory.sortDropdown)).toBeVisible();
    await page.click(xpath.inventory.sortDropdown);
  
    // Backpack
  await expect.soft(page.locator(xpath.inventory.backpack.imageLink)).toBeVisible();
  await expect.soft(page.locator(xpath.inventory.backpack.titleLink)).toBeVisible();
  await expect.soft(page.locator(xpath.inventory.backpack.description)).toBeVisible();
  await expect.soft(page.locator(xpath.inventory.backpack.price)).toBeVisible();
  await expect.soft(page.locator(xpath.inventory.backpack.addButton)).toBeVisible();

  // Bike Light
  await expect.soft(page.locator(xpath.inventory.bikeLight.imageLink)).toBeVisible();
  await expect.soft(page.locator(xpath.inventory.bikeLight.titleLink)).toBeVisible();
  await expect.soft(page.locator(xpath.inventory.bikeLight.description)).toBeVisible();
  await expect.soft(page.locator(xpath.inventory.bikeLight.price)).toBeVisible();
  await expect.soft(page.locator(xpath.inventory.bikeLight.addButton)).toBeVisible();

  // Bolt T-Shirt
  await expect.soft(page.locator(xpath.inventory.boltShirt.imageLink)).toBeVisible();
  await expect.soft(page.locator(xpath.inventory.boltShirt.titleLink)).toBeVisible();
  await expect.soft(page.locator(xpath.inventory.boltShirt.description)).toBeVisible();
  await expect.soft(page.locator(xpath.inventory.boltShirt.price)).toBeVisible();
  await expect.soft(page.locator(xpath.inventory.boltShirt.addButton)).toBeVisible();

  // Fleece Jacket
  await expect.soft(page.locator(xpath.inventory.fleeceJacket.imageLink)).toBeVisible();
  await expect.soft(page.locator(xpath.inventory.fleeceJacket.titleLink)).toBeVisible();
  await expect.soft(page.locator(xpath.inventory.fleeceJacket.description)).toBeVisible();
  await expect.soft(page.locator(xpath.inventory.fleeceJacket.price)).toBeVisible();
  await expect.soft(page.locator(xpath.inventory.fleeceJacket.addButton)).toBeVisible();

  // Onesie
  await expect.soft(page.locator(xpath.inventory.onesie.imageLink)).toBeVisible();
  await expect.soft(page.locator(xpath.inventory.onesie.titleLink)).toBeVisible();
  await expect.soft(page.locator(xpath.inventory.onesie.description)).toBeVisible();
  await expect.soft(page.locator(xpath.inventory.onesie.price)).toBeVisible();
  await expect.soft(page.locator(xpath.inventory.onesie.addButton)).toBeVisible();

  // Test Red Shirt
  await expect.soft(page.locator(xpath.inventory.testRedShirt.imageLink)).toBeVisible();
  await expect.soft(page.locator(xpath.inventory.testRedShirt.titleLink)).toBeVisible();
  await expect.soft(page.locator(xpath.inventory.testRedShirt.description)).toBeVisible();
  await expect.soft(page.locator(xpath.inventory.testRedShirt.price)).toBeVisible();
  await expect.soft(page.locator(xpath.inventory.testRedShirt.addButton)).toBeVisible();


}