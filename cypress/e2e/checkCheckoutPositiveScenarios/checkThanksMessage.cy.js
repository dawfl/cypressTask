

import checkoutElements from '../pageObject/checkoutElements'



const checkoutElement = new checkoutElements()


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
        


        checkoutElement.firstNameInput().type('firstName')
        checkoutElement.secondNameInput().type('lastName')
        checkoutElement.zipCodeInput().type('12345')

        cy.get('[data-test="continue"]').click()
        
        cy.url().should('contain', '/checkout-step-two.html')


        cy.get('.summary_info > :nth-child(4)').then(shippingInformation => {
            if(shippingInformation.text().includes('FREE PONY EXPRESS DELIVERY!')){
                cy.log('ok text exist')
            }else {
                throw new Error('shipping FREE PONY EXPRESS DELIVERY! text not exist')
            }
        })



        cy.get('[data-test="finish"]').click()
        cy.get('.complete-header').then(textOrder => {
            if(textOrder.text().includes('THANK YOU FOR YOUR ORDER')){
                cy.log('Text THANK YOU FOR YOUR ORDER Exist')
            }else {
                throw new Error('Text Thank you for order not exist')
            }
        })
     

      })

    