
  it('check backets number and price', () => {
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

        cy.get('.shopping_cart_link').click()

        cy.get('.cart_item').should('have.length', 1)

       
        const price = 29.99

        cy.get('.inventory_item_price').contains(price)

        cy.get('[data-test="checkout"]').click()
        

        cy.url().should('contain', '/checkout-step-one.html')
        



     

      })

    