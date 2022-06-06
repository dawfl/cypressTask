

  it('check validation user login', () => {
    // https://on.cypress.io/type
   

            
            cy.loginAuth('standard_user', 'secret_sauce')

            cy.url('https://www.saucedemo.com/inventory.html').should('contain', '/inventory')


            cy.get('.inventory_list')
                .should('be.visible')
                .children()
                .should('have.length', 6)


           
            
      })
