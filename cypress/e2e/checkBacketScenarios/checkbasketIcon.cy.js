


  it('check validation user login', () => {
    // https://on.cypress.io/type
   

            cy.loginAuth('standard_user', 'secret_sauce')

            cy.url('https://www.saucedemo.com/inventory.html').should('contain', '/inventory')
            cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

            cy.get('.shopping_cart_badge').then(text=>{
               if( text.text().includes('1')){
                   cy.log('Backets update correctly')
               }else {
                   throw new error ('Backets update not correctly after adding product to the cart')
               }
            })

            cy.wait(1000)

      })

    
