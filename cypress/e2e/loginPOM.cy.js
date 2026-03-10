import LoginPage from "../pageObjects/loginPage";

describe("Login SauceDemo con POM", () => {

  it("Login exitoso usando POM y fixture", () => {
    const login = new LoginPage();
    
    cy.fixture("example").then((data) => {
      login.visit();
      login.fillUsername(data.standardUser.user);
      login.fillPassword(data.standardUser.pass);
      login.submit();
    });

    cy.url().should("include", "inventory");
    cy.get(".inventory_list").should("be.visible");
  });

});
