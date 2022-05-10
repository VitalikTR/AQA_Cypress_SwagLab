class CartPage {
    get linkInCart() { return cy.get(".shopping_cart_link"); }
    get inventoryItemsNamesInCart() { return cy.get(".inventory_item_name"); }
    get selectedProductQuantityInCart() { return cy.get(".cart_quantity"); }
    get urlCart() { return cy.url(); }

    openShoppingCart(){
        this.linkInCart.click();
    }

    logAllProductsInCart() {
        this.inventoryItemsNamesInCart.each(item => {
            cy.log(item.text())
        });

        return this
    }

    quantityOfSelectedProductsInCart() {
        this.selectedProductQuantityInCart.each(element => {
            expect(element.text()).to.be.equal("1");
        });

        return this
    }

    verifyUrlCart() {
        this.urlCart.should('eq', 'https://www.saucedemo.com/cart.html')
        
        return this
    }
}

export default new CartPage()
