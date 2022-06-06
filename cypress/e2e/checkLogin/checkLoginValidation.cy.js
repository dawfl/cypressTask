




  it('check validation user login', () => {
    // https://on.cypress.io/type
   

            cy.visit('https://www.saucedemo.com/')
            cy.get('[data-test="username"]').type('testvalidation')
            cy.get('[data-test="password"]').type('testpasswordvalidation')
            cy.get('[data-test="login-button"').click()

            cy.url('https://www.saucedemo.com/inventory.html').should('contain', '/inventory')
            cy.get('.title').should('contain', 'PRODUCTS')

            cy.wait(1000)

           
            
      })
