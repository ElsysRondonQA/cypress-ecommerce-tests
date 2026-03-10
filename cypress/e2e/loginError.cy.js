import LoginPage from "../pageObjects/loginPage";

describe("Login inválido", () => {

  it("Debe mostrar error con credenciales incorrectas", () => {

    const login = new LoginPage()

    login.visit()
    login.login("standard_user","password_incorrecto")

    cy.get(".error-message-container")
      .should("be.visible")

  })

})