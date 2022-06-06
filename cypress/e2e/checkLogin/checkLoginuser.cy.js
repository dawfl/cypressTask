


  it('check user login', () => {
    // https://on.cypress.io/type
   

            cy.visit('https://www.saucedemo.com/')
            cy.get('[data-test="username"]').type('standard_user')
            cy.get('[data-test="password"]').type('secret_sauce')
            cy.get('[data-test="login-button"').click()
            cy.wait(1000)

            cy.get('[data-test="error"]').then($errors => {

                if($errors.text().includes('Epic sadface: Username and password do not match any user in this service')){
                    cy.log('validation text correct')
                }else {
                    throw new Error('Validation text is not shown')
                }

            })
            
      })