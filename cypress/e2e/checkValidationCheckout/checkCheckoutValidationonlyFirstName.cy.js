


  it('checkCheckoutValidationName', () => {
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
        


        cy.get('[data-test="firstName"]').type('asdasd')


        cy.get('[data-test="continue"]').click()
        cy.get('.checkout_info > :nth-child(1) > .svg-inline--fa > path').should('be.visible')

        cy.wait(500)

        cy.get('.error-message-container').then(error => {
            if(error.text().includes('Error: Last Name is required')){
                cy.log('Error text Last Name is required exist')
            }else {
                throw new Error ('Error text not visible')
            }
        })



     

      })

    