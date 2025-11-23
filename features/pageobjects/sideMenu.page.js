// test/pageobjects/sideMenu.page.js

class SideMenu {
    /**
     * Side menu subtitle "Contact"
     */
    get contactMenuItem() {
        return $('/html/body/app-root/mat-sidenav-container/mat-sidenav/div/sidenav/mat-nav-list/h3[2]');
    }

    /**
     * Side menu option "About Us"
     */
    get aboutUsMenuItem() {
        return $('/html/body/app-root/mat-sidenav-container/mat-sidenav/div/sidenav/mat-nav-list/a[2]');
    }

    /**
     * Version info text box
     * Пример текста: "OWASP Juice Shop v15.0.0"
     */
    get versionInfoTextBox() {
        return $('body > app-root > mat-sidenav-container > mat-sidenav > div > sidenav > div');
    }
}

module.exports = new SideMenu();
