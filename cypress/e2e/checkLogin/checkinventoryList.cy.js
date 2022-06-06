

  it('check validation user login', () => {
    // https://on.cypress.io/type
   

            
            cy.visit('https://www.saucedemo.com/')
            cy.get('[data-test="username"]').type('standard_user')
            cy.get('[data-test="password"]').type('secret_sauce')
            cy.get('[data-test="login-button"').click()

            cy.url('https://www.saucedemo.com/inventory.html').should('contain', '/inventory')


            cy.get('.inventory_list')
                .should('be.visible')
                .children()
                .should('have.length', 6)


           
            
      })
