class ProductsPage {

    // Language dropdown (кнопка выбора языка)
    get languageSelectDropdown() {
        return $('//*[@id="navbarLanguageButton"]');
    }

    // --- остальные геттеры оставь как есть ---
    get titleAllProducts() {
        return $('//*[contains(text(),"All Products")]');
    }

    get pageSizeSelect() {
        return $('//mat-paginator//mat-select');
    }

    get currentItemsTextBox() {
        return $('/html/body/app-root/mat-sidenav-container/mat-sidenav-content/app-search-result/div/div/mat-paginator/div/div/div[1]/mat-form-field/div[1]/div/div[2]/div');
    }

    get nextPageButton() {
        return $('//button[@aria-label="Next page"]');
    }

    get previousPageButton() {
        return $('//button[@aria-label="Previous page"]');
    }
}

module.exports = new ProductsPage();
