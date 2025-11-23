const { Given, Then } = require('@wdio/cucumber-framework');
const ProductsPage = require('../pageobjects/products.page');
const SideMenu = require('../pageobjects/sideMenu.page');

Given(/^I open Juice Shop main page$/, async () => {
    await browser.url('http://juiceshop.tdlbox.com/');
    await browser.maximizeWindow();

    // Закрываем welcome-баннер, если он есть
    const dismissButton = await $('//*[@id="mat-mdc-dialog-0"]/div/div/app-welcome-banner/div[2]/button[2]');
    if (await dismissButton.isExisting()) {
        await dismissButton.waitForClickable({ timeout: 10000 });
        await dismissButton.click();

    }

    await browser.pause(1000);
});

Then(/^I should see language dropdown$/, async () => {
    await expect(ProductsPage.languageSelectDropdown).toBeDisplayed();
});

Then(/^I should see All Products title$/, async () => {
    await expect(ProductsPage.titleAllProducts).toBeDisplayed();
});

Then(/^I should see page size selector$/, async () => {
    await expect(ProductsPage.pageSizeSelect).toBeDisplayed();
});

Then(/^I should see paginator info text$/, async () => {
    await expect(ProductsPage.currentItemsTextBox).toBeDisplayed();
});

Then(/^I should see next and previous page buttons$/, async () => {
    await expect(ProductsPage.nextPageButton).toBeDisplayed();
    await expect(ProductsPage.previousPageButton).toBeDisplayed();
});

Then(/^I should see Contact and About Us in side menu$/, async () => {
    const menuButton = await $(
        '/html/body/app-root/mat-sidenav-container/mat-sidenav-content/app-navbar/mat-toolbar/mat-toolbar-row/button[1]'
    );
    await menuButton.waitForClickable({ timeout: 5000 });
    await menuButton.click();

    const sideNav = await $('/html/body/app-root/mat-sidenav-container/mat-sidenav/div/sidenav');
    await sideNav.waitForDisplayed({ timeout: 5000 });

    await expect(SideMenu.contactMenuItem).toBeDisplayed();
    await expect(SideMenu.aboutUsMenuItem).toBeDisplayed();
});

Then(/^I should see version info in side menu$/, async () => {
    await expect(SideMenu.versionInfoTextBox).toBeDisplayed();
});
