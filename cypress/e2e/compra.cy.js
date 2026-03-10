import InventoryPage from "../pageObjects/inventoryPage";
import LoginPage from "../pageObjects/loginPage";

describe("Compra en SauceDemo", () => {

  it("Agregar producto al carrito", () => {

    const inventory = new InventoryPage()
    const login = new LoginPage()

    login.visit()
login.login("standard_user","secret_sauce")

    inventory.addBackpack()

    cy.get(".shopping_cart_badge").should("contain","1")

    inventory.openCart()
cy.get(".inventory_item_name").should("contain","Sauce Labs Backpack")

cy.get("#checkout").click()

cy.get("#first-name").type("Elsys")
cy.get("#last-name").type("Rondon")
cy.get("#postal-code").type("1000")

cy.get("#continue").click()

cy.get(".summary_info").should("be.visible")

cy.get("#finish").click()

cy.get(".complete-header")
  .should("contain","Thank you for your order")



  })

})