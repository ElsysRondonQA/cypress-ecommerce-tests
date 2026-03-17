import LoginPage from "../pageObjects/loginPage"
import InventoryPage from "../pageObjects/inventoryPage"

describe("Compra en SauceDemo", () => {

  it("Agregar producto al carrito", () => {

    const login = new LoginPage()
    const inventory = new InventoryPage()

    login.visit()

    cy.fixture("user").then((user) => {

      login.login(user.username, user.password)

      cy.url().should("include","inventory")
      cy.get(".title").should("contain","Products")

      inventory.addBackpack()

      cy.get(".shopping_cart_badge").should("have.text","1")

      inventory.openCart()

      cy.get(".inventory_item_name").should("contain","Sauce Labs Backpack")

      cy.get("#checkout").click()

      cy.get("#first-name").type(user.firstName)
      cy.get("#last-name").type(user.lastName)
      cy.get("#postal-code").type(user.postalCode)

      cy.get("#continue").click()

      cy.get(".summary_info").should("be.visible")

      cy.get("#finish").click()

      cy.get(".complete-header")
        .should("contain","Thank you for your order")

    })

  })

})