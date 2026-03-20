describe('Compra en SauceDemo', () => {

  it('Flujo de compra completo', () => {

    cy.visit('https://www.saucedemo.com')

    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    cy.get('.inventory_item').first().find('button').click()
    cy.get('.shopping_cart_link').click()

    cy.get('#checkout').click()
    cy.get('#first-name').type('Test')
    cy.get('#last-name').type('User')
    cy.get('#postal-code').type('1234')
    cy.get('#continue').click()
    cy.get('#finish').click()

    cy.get('.complete-header')
      .should('contain', 'Thank you for your order')

    cy.screenshot('compra-final')

  })

})