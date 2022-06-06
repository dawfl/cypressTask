


  it('checkCheckoutValidationName', () => {
    // https://on.cypress.io/type
   

        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"').click()

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
        


        cy.get('[data-test="firstName"]').type('firstName')
        cy.get('[data-test="lastName"]').type('lastName')
        cy.get('[data-test="postalCode"]').type('12345')


        cy.get('[data-test="continue"]').click()
        
        cy.url().should('contain', '/checkout-step-two.html')


        cy.get('.summary_info > :nth-child(4)').then(shippingInformation => {
            if(shippingInformation.text().includes('FREE PONY EXPRESS DELIVERY!')){
                cy.log('ok text exist')
            }else {
                throw new Error('shipping FREE PONY EXPRESS DELIVERY! text not exist')
            }
        })

     

      })

    