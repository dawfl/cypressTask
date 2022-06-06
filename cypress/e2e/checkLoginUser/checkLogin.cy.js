




  it('check validation user login', () => {
    // https://on.cypress.io/type
   

            cy.loginAuth('standard_user', 'secret_sauce') 
            cy.url('https://www.saucedemo.com/inventory.html').should('contain', '/inventory')
            cy.wait(1000)

           
            
      })
