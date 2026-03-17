describe("Login inválido", () => {

  it("Debe mostrar error con credenciales incorrectas", () => {

    cy.visit("https://www.saucedemo.com")

    cy.get("#user-name").type("usuario_incorrecto")
    cy.get("#password").type("clave_incorrecta")
    cy.get("#login-button").click()

    cy.get("[data-test='error']")
      .should("be.visible")

  })

})