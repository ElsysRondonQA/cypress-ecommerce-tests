class InventoryPage {

  addBackpack() {
    cy.get("#add-to-cart-sauce-labs-backpack").click()
  }

  openCart() {
    cy.get(".shopping_cart_link").click()
  }

}

export default InventoryPage